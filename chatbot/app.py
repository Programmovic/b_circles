from flask import Flask, jsonify, request
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
import frontmatter
import markdown2

app = Flask(__name__)

def load_faq_data(file_path='../content/faq.md'):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Parse Markdown content using frontmatter
    faq_data = frontmatter.loads(content)

    # Extract questions and answers
    questions = [faq['title'] for faq in faq_data['faqs']]
    answers = [faq['answer'] for faq in faq_data['faqs']]

    return questions, answers

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
        user_question = data['question']
        answer = answer_question(user_question)
        return jsonify({'answer': answer})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
