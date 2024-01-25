from flask import Flask, jsonify, request
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
import nltk
import frontmatter
import markdown2
from flask_cors import CORS  # Import the CORS module

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
nltk.download('punkt')
def load_faq_data():
    faq_data = [
        {
            "title": "Who we are?",
            "answer": "We are an innovative outsourcing company that offers a wide range of services to businesses, firms, and startups. With a strong emphasis on digital marketing, B-Circles acts as a strategic partner, assisting clients in achieving unparalleled success and market prominence. Our expert team in their respective fields can provide the most professional services for our clients."
        },
        {
            "title": "What services does B-Circles provide?",
            "answer": "- Digital Marketing.<br>- Web Development.<br>- Sales.<br>- Graphic Design.<br>- Business Partnership.<br>- Training and Workshops."
        },
        {
            "title": "How can I reach the B-Circles team?",
            "answer": "We are available 24/7. All you need to do is email us through our 'Contact Us' page, and we will reply in less than 24 hours."
        },
        {
            "title": "Why should I choose B-Circles?",
            "answer": "B-Circles provides experts in each field. We are a strategic partner, assisting clients in achieving unparalleled success and market prominence. We aim to be the driving force behind our clients' success, offering innovative ideas and a comprehensive range of services to propel businesses to new heights. We are flexible and readily available to meet our clients' needs."
        },
        {
            "title": "How long does it take to get an initial plan for my project?",
            "answer": "It takes a maximum of one week for us to provide you with the initial business plan and designs."
        }
    ]

    faq_questions = [faq['title'] for faq in faq_data]
    faq_answers = [faq['answer'] for faq in faq_data]

    return faq_questions, faq_answers

# Preprocess Text
def preprocess_text(text):
    # Convert Markdown to plain text
    plain_text = markdown2.markdown(text)

    # Tokenization and removal of stopwords
    tokens = word_tokenize(plain_text)
    stop_words = set(stopwords.words('english'))
    tokens = [word.lower() for word in tokens if word.isalnum() and word.lower() not in stop_words]

    return tokens

# Load FAQ data from the Markdown file
faq_questions, faq_answers = load_faq_data()

# Combine FAQ questions and answers into a single list for vectorization
combined_texts = [' '.join(preprocess_text(q)) + ' ' + ' '.join(preprocess_text(a)) for q, a in zip(faq_questions, faq_answers)]

# Embed Text using TF-IDF
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(combined_texts).toarray()

# Labels (use indices as labels)
labels = list(range(len(faq_questions)))

# Train Naive Bayes Classifier
nb_classifier = MultinomialNB()
nb_classifier.fit(X, labels)

# Function for Question Answering
def answer_question(question):
    # Preprocess the user's question
    preprocessed_question = preprocess_text(question)

    # Embed the question using the same vectorizer
    embedded_question = vectorizer.transform([' '.join(preprocessed_question)]).toarray()

    # Predict the label using the trained Naive Bayes classifier
    predicted_label = nb_classifier.predict(embedded_question)[0]

    # Return the corresponding answer based on the predicted label
    return faq_answers[predicted_label]

@app.route('/ask', methods=['POST'])
def ask():
    try:
        data = request.get_json()
        user_question = data.get('question', '').strip()

        # Provide an initial message when the user starts the conversation
        initial_message = "Welcome! How can I assist you today?"

        # If the user's question is empty, return the initial message
        if not user_question:
            return jsonify({'answer': initial_message})

        # Otherwise, answer the user's question
        answer = answer_question(user_question)

        # If the answer is the same as the initial message, consider it out of context
        if answer.strip().lower() == initial_message.strip().lower():
            return jsonify({'answer': "I'm sorry, I didn't understand that. How can I assist you?"})

        return jsonify({'answer': answer})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0')
