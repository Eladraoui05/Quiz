import React, { useState } from 'react';
import Quiz from './Quiz';

const quizTopics = [
  {
    topic: 'JavaScript',
    image: 'https://th.bing.com/th/id/OIP.C9Uh5eUpw5kw2gv_yDfydAHaHa?w=1200&h=1200&rs=1&pid=ImgDetMain',
  },
  {
    topic: 'HTML',
    image: 'https://th.bing.com/th/id/R.a27d14a27b5ef7d35c241d5cc9c1deb4?rik=%2bIRohW9bi3n67A&riu=http%3a%2f%2fblog.computercompany.net%2fwp-content%2fuploads%2f2014%2f07%2fHTML5logo.png&ehk=BDSIMnJyqHvsEx3sVRRqqYLGUc7UPIPYsTcFJPQsSxo%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    topic: 'CSS',
    image: 'https://th.bing.com/th/id/R.f462ea39ee7a688a9c46faa2d230907a?rik=gdVJOgOfym%2fv6Q&riu=http%3a%2f%2fwww.goldenapplewebdesign.com%2fwp-content%2fuploads%2f2011%2f07%2fcss3.jpg&ehk=XJePj%2bDwQf5elnrVTK24c%2fQvyJoDOV7RiybsjKJ7rso%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    topic: 'Bootstrap',
    image: 'https://static.javatpoint.com/bootstrappages/images/bootstrap-tutorial.png',
  },
];

const QuizSelector = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null); 

  const handleQuizSelection = (quizTopic) => {
    setSelectedQuiz(quizTopic);
  };

  return (
    <div style={{ backgroundColor: '#f0f8ff', padding: '20px', borderRadius: '10px' }}>
      <h1 style={{ textAlign: 'center', fontFamily: "'Press Start 2P', cursive", color: '#ff4500' }}>
        Choose Your Quiz!
      </h1>
      <div style={{
        display: 'flex', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        padding: '20px',
        backgroundColor: '#87cefa',
        borderRadius: '10px',
        boxShadow: '0px 0px 15px 5px #87ceeb'
      }}>
        {quizTopics.map((quiz, index) => (
          <div key={index} style={{ textAlign: 'center', margin: '10px', transform: 'scale(1)', transition: 'transform 0.2s' }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.2)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
            <img
              src={quiz.image}
              style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px', border: '3px solid #ff4500' }}
              alt={`${quiz.topic} Image`}
            />
            <button 
              onClick={() => handleQuizSelection(quiz.topic)}
              style={{
                backgroundColor: '#32cd32',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                padding: '10px 20px',
                fontSize: '1.2em',
                cursor: 'pointer',
                boxShadow: '0px 0px 10px 2px #32cd32'
              }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#228b22'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = '#32cd32'}
            >
              {quiz.topic}
            </button>
          </div>
        ))}
      </div>
      {selectedQuiz && <Quiz topic={selectedQuiz} />}
    </div>
  );
};

export default QuizSelector;
