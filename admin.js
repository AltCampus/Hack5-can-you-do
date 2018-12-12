const topicText = document.getElementById('topic-text');
const submitTopic = document.getElementById('submit-topic');
const questionTextId = document.getElementById('question-text');
const submitQuestion = document.getElementById('btnSelected');
const topicList = document.getElementById('lstFruits');
console.log(topicText, submitTopic, submitQuestion, questionTextId, topicList) 

var questionObject = {
    questions: [],
    topics: []
}

function Question(questionText, topic) {
    this.questionText = questionText;
    this.topic = topic;
}

function addTopic() {
    if (!(questionObject.topics.includes(topicText.value))) {
    questionObject.topics.push(topicText.value);
    }
}

function addQuestion() {
    questionObject.question.push(new Question(questionTextId.value, topicText.value))
}

submitTopic.addEventListener('click', addTopic);