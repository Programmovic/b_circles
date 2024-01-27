from flask import Flask, request, jsonify
from transformers import pipeline
from flask_cors import CORS  # Import the CORS extension

app = Flask(__name__)
CORS(app)

# Load the pre-trained model and tokenizer
model_name = "deepset/roberta-base-squad2"
qa_pipeline = pipeline("question-answering", model=model_name, tokenizer=model_name)

# Define the FAQ context with more descriptive titles and longer answers
faq_context = [
    {
        "title": "About B-Circles",
        "answer": "We are an innovative outsourcing company that offers a wide range of services to businesses, firms, and startups. With a strong emphasis on digital marketing, B-Circles acts as a strategic partner, assisting clients in achieving unparalleled success and market prominence. Our expert team in their respective fields can provide the most professional services for our clients. Our commitment to excellence and client satisfaction sets us apart in the industry. We have successfully collaborated with diverse clients, helping them navigate the evolving business landscape."
    },
    {
        "title": "Services Provided by B-Circles",
        "answer": "B-Circles offers a diverse range of specialized services tailored to meet the unique needs of our clients. Our comprehensive service portfolio includes:\n\n1. **Digital Marketing:** Leverage cutting-edge digital strategies to enhance your online presence and reach your target audience effectively.\n\n2. **Web Development:** Our skilled development team creates custom websites aligned with your business objectives, ensuring a seamless user experience.\n\n3. **Sales Strategy:** Drive revenue growth through strategic planning and effective sales initiatives, tailored to your industry and market dynamics.\n\n4. **Graphic Design:** Our creative team delivers visually captivating designs to enhance your brand identity, from logos to marketing collateral.\n\n5. **Business Partnership:** Collaborate with us as a strategic partner for mutual success and growth, leveraging our expertise to achieve shared business objectives.\n\n6. **Training and Workshops:** Empower your team with our specialized training programs covering the latest industry trends and technologies, fostering continuous growth and innovation."
    },
    {
        "title": "List Services Provided by B-Circles",
        "answer": "Digital Marketing, Web Development, Sales Strategy, Graphic Design, Business Partnership, Training and Workshops."
    },
    {
        "title": "Contacting B-Circles Team",
        "answer": "At B-Circles, we prioritize open communication with our clients. Our dedicated team is available 24/7 to address your inquiries and provide assistance. Feel free to reach out to us by emailing through our 'Contact Us' page on our website. We understand the urgency of your queries, and you can expect a prompt response within less than 24 hours. Your satisfaction is our top priority, and we are committed to ensuring a seamless communication experience."
    },
    {
        "title": "Why Choose B-Circles",
        "answer": "Choosing B-Circles means selecting a team of seasoned experts dedicated to your success. What sets us apart is not just our professional services but also our innovative approach. We strive to be the driving force behind your success, offering groundbreaking ideas and a comprehensive suite of services to propel your business to new heights. Our flexible and client-centric approach ensures that we are readily available to meet your evolving needs. When you choose B-Circles, you're choosing a strategic ally committed to achieving unparalleled success and market prominence for your business."
    },
    {
        "title": "Time for Initial Project Plan",
        "answer": "We recognize the importance of timely planning for the success of your projects. When you engage with B-Circles, we commit to delivering the initial business plan and designs within a maximum of one week. This ensures that you can kickstart your project with a well-thought-out strategy and a clear roadmap for success. Our efficient and experienced team works diligently to provide you with high-quality deliverables within the stipulated timeframe."
    }
]

# Dictionary to store chat history
chat_history = {}


@app.route('/ask', methods=['POST'])
def ask_question():
    # Get the question and user ID from the request
    data = request.get_json()
    user_question = data.get('question', '')
    user_id = data.get('id', None)

    # Handle greetings and farewells
    if is_greeting(user_question):
        answer_text = "Hello! How can I assist you today?"
    elif is_farewell(user_question):
        answer_text = "Goodbye! If you have more questions, feel free to ask anytime."
    else:
        # Combine FAQ context answers with additional context
        combined_context = " ".join([f"{faq['title']} {faq['answer']}" for faq in faq_context])

        # Using the question-answering pipeline to get the answer
        answer = qa_pipeline(question=user_question, context=combined_context)
        answer_text = answer["answer"]

    # Update chat history for the user
    if user_id not in chat_history:
        chat_history[user_id] = []

    # Append the user's question and bot's answer to the chat history
    chat_history[user_id].append({"user": user_question, "bot": answer_text})

    # Return the result as JSON
    return jsonify({"question": user_question, "answer": answer_text})


@app.route('/chat_history/<user_id>', methods=['GET'])
def get_chat_history(user_id):
    # Retrieve the chat history for a specific user
    history = chat_history.get(user_id, [])
    return jsonify({"user_id": user_id, "chat_history": history})


def is_greeting(text):
    greetings = ["hi", "hello", "hey", "howdy"]
    return any(greeting in text.lower() for greeting in greetings)


def is_farewell(text):
    farewells = ["bye", "goodbye", "see you", "adios"]
    return any(farewell in text.lower() for farewell in farewells)


if __name__ == '__main__':
    app.run(debug=True)
