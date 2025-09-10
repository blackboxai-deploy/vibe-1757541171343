'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function GamesSection() {
  const [activeGame, setActiveGame] = useState('quiz')
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)

  const quizQuestions = [
    {
      question: "Where did Kevin and Jaymee first meet?",
      options: ["Joe V's Smart Shop", "At a movie theater", "At the gym", "At a restaurant"],
      correct: "Joe V's Smart Shop"
    },
    {
      question: "Who said 'I love you' first?",
      options: ["Kevin", "Jaymee", "They said it at the same time", "It's a secret!"],
      correct: "Kevin"
    },
    {
      question: "What time was Kevin born?",
      options: ["Morning", "Afternoon", "Evening", "Midnight"],
      correct: "Morning"
    },
    {
      question: "What's their favorite sport to play together?",
      options: ["Basketball", "Tennis", "Pickleball", "Soccer"],
      correct: "Pickleball"
    },
    {
      question: "Where did they go on their first baecation?",
      options: ["Jollibee Cruise", "Beach resort", "Mountain cabin", "City hotel"],
      correct: "Jollibee Cruise"
    },
    {
      question: "What do they love making together at home?",
      options: ["Cookies", "Pizza", "Pasta", "Sandwiches"],
      correct: "Pizza"
    },
    {
      question: "Which holiday destination did they visit together?",
      options: ["Disneyland", "Santa's Wonderland", "Six Flags", "Zoo"],
      correct: "Santa's Wonderland"
    },
    {
      question: "What's one of their favorite activities together?",
      options: ["Shopping", "Cooking", "Going to the gym", "Watching TV"],
      correct: "Going to the gym"
    }
  ]

  const wordSearchGrid = [
    ['L', 'O', 'V', 'E', 'K', 'R', 'S', 'T', 'A', 'B'],
    ['J', 'A', 'Y', 'M', 'E', 'E', 'A', 'Y', 'D', 'C'],
    ['P', 'I', 'C', 'K', 'L', 'E', 'B', 'A', 'L', 'L'],
    ['K', 'E', 'V', 'I', 'N', 'T', 'H', 'E', 'A', 'R'],
    ['C', 'R', 'U', 'I', 'S', 'E', 'M', 'O', 'V', 'I'],
    ['A', 'N', 'N', 'I', 'V', 'E', 'R', 'S', 'A', 'R'],
    ['P', 'I', 'Z', 'Z', 'A', 'G', 'A', 'M', 'E', 'S'],
    ['G', 'Y', 'M', 'H', 'O', 'M', 'E', 'J', 'O', 'Y'],
    ['S', 'A', 'N', 'T', 'A', 'W', 'O', 'N', 'D', 'E'],
    ['H', 'A', 'P', 'P', 'Y', 'F', 'I', 'R', 'S', 'T']
  ]

  const wordsToFind = ['LOVE', 'JAYMEE', 'KEVIN', 'PICKLEBALL', 'CRUISE', 'PIZZA', 'GYM', 'GAMES', 'SANTA', 'HAPPY', 'FIRST']

  const handleQuizAnswer = (answer: string) => {
    setSelectedAnswer(answer)
    setShowResult(true)
    
    if (answer === quizQuestions[currentQuestion].correct) {
      setScore(score + 1)
    }
    
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer('')
        setShowResult(false)
      } else {
        setQuizComplete(true)
      }
    }, 2000)
  }

  const resetQuiz = () => {
    setQuizStarted(false)
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer('')
    setShowResult(false)
    setQuizComplete(false)
  }

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100
    if (percentage >= 80) return "Amazing! You know us so well! 💕"
    if (percentage >= 60) return "Great job! You're learning about our love story! 😊"
    if (percentage >= 40) return "Not bad! Keep exploring our memories! 👍"
    return "Aww, spend more time with us to learn our story! 💖"
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Fun & Games
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Test your knowledge about Kevin and Jaymee's love story with interactive games!
          </p>
        </div>

        {/* Game Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          <Button
            variant={activeGame === 'quiz' ? 'default' : 'outline'}
            onClick={() => setActiveGame('quiz')}
            className={`px-8 py-3 rounded-full text-lg transition-all duration-200 ${
              activeGame === 'quiz'
                ? 'bg-pink-500 hover:bg-pink-600 text-white'
                : 'border-pink-300 text-pink-600 hover:bg-pink-50'
            }`}
          >
            Love Quiz
          </Button>
          <Button
            variant={activeGame === 'wordsearch' ? 'default' : 'outline'}
            onClick={() => setActiveGame('wordsearch')}
            className={`px-8 py-3 rounded-full text-lg transition-all duration-200 ${
              activeGame === 'wordsearch'
                ? 'bg-pink-500 hover:bg-pink-600 text-white'
                : 'border-pink-300 text-pink-600 hover:bg-pink-50'
            }`}
          >
            Word Search
          </Button>
          <Button
            variant={activeGame === 'memory' ? 'default' : 'outline'}
            onClick={() => setActiveGame('memory')}
            className={`px-8 py-3 rounded-full text-lg transition-all duration-200 ${
              activeGame === 'memory'
                ? 'bg-pink-500 hover:bg-pink-600 text-white'
                : 'border-pink-300 text-pink-600 hover:bg-pink-50'
            }`}
          >
            Memory Match
          </Button>
        </div>

        {/* Quiz Game */}
        {activeGame === 'quiz' && (
          <div className="max-w-4xl mx-auto">
            {!quizStarted ? (
              <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">How Well Do You Know Us?</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Test your knowledge about Kevin and Jaymee's relationship with {quizQuestions.length} fun questions!
                </p>
                <Button
                  onClick={() => setQuizStarted(true)}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 text-lg rounded-full"
                >
                  Start Quiz
                </Button>
              </div>
            ) : quizComplete ? (
              <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Quiz Complete!</h3>
                <div className="text-6xl mb-6">🎉</div>
                <p className="text-2xl font-bold text-pink-600 mb-4">
                  You scored {score} out of {quizQuestions.length}!
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  {getScoreMessage()}
                </p>
                <div className="space-x-4">
                  <Button
                    onClick={resetQuiz}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full"
                  >
                    Play Again
                  </Button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">
                      Question {currentQuestion + 1} of {quizQuestions.length}
                    </span>
                    <span className="text-sm text-gray-500">
                      Score: {score}/{quizQuestions.length}
                    </span>
                  </div>
                  <div className="w-full bg-pink-100 rounded-full h-2">
                    <div 
                      className="bg-pink-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                  {quizQuestions[currentQuestion].question}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      onClick={() => !showResult && handleQuizAnswer(option)}
                      disabled={showResult}
                      className={`p-4 text-left justify-start h-auto text-wrap transition-all duration-200 ${
                        showResult
                          ? option === quizQuestions[currentQuestion].correct
                            ? 'bg-green-100 border-green-500 text-green-700'
                            : option === selectedAnswer
                            ? 'bg-red-100 border-red-500 text-red-700'
                            : 'opacity-50'
                          : 'hover:bg-pink-50 hover:border-pink-300'
                      }`}
                    >
                      {option}
                    </Button>
                  ))}
                </div>

                {showResult && (
                  <div className="mt-6 p-4 rounded-lg text-center">
                    {selectedAnswer === quizQuestions[currentQuestion].correct ? (
                      <div className="text-green-600">
                        <div className="text-2xl mb-2">✅</div>
                        <p className="font-bold">Correct! Great job!</p>
                      </div>
                    ) : (
                      <div className="text-red-600">
                        <div className="text-2xl mb-2">❌</div>
                        <p className="font-bold">
                          Oops! The correct answer is: {quizQuestions[currentQuestion].correct}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Word Search Game */}
        {activeGame === 'wordsearch' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Love Story Word Search
              </h3>
              <p className="text-center text-gray-600 mb-8">
                Find these words hidden in the grid related to Kevin and Jaymee's story:
              </p>
              
              {/* Words to Find */}
              <div className="mb-8">
                <h4 className="font-bold text-lg mb-4 text-center">Words to Find:</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {wordsToFind.map((word, index) => (
                    <span 
                      key={index}
                      className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>

              {/* Word Search Grid */}
              <div className="flex justify-center">
                <div className="grid grid-cols-10 gap-1 bg-pink-50 p-4 rounded-lg">
                  {wordSearchGrid.flat().map((letter, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 bg-white border border-pink-200 flex items-center justify-center text-sm font-bold text-gray-700 hover:bg-pink-100 cursor-pointer transition-colors"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 text-center text-gray-500 text-sm">
                💡 Tip: Words can be found horizontally, vertically, or diagonally!
              </div>
            </div>
          </div>
        )}

        {/* Memory Match Game */}
        {activeGame === 'memory' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Memory Match Game
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Match the photos with their corresponding dates and events from Kevin and Jaymee's love story!
              </p>
              
              {/* Memory Game Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <div
                    key={num}
                    className="aspect-square bg-pink-100 rounded-lg border-2 border-pink-200 flex items-center justify-center cursor-pointer hover:bg-pink-200 transition-colors"
                  >
                    <span className="text-4xl">❤️</span>
                  </div>
                ))}
              </div>
              
              <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full">
                Start Memory Game
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}