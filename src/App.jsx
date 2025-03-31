import './App.css'
import { useEffect, useState } from 'react'
import Card from './components/Card/Card'
import CardGrid from './components/CardGrid/CardGrid'
import Header from './components/Header/Header'
import Score from './components/Score/Score'
import fetchCats from './utils/fetchCats'


function App() {

  const [cats, setCats] = useState([]);
  const [clickedCats, setClickedCats] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0)

  useEffect(() => {
    fetchCats().then(setCats);
  }, [])

  const handleCardClick = (id) => {
    if (clickedCats.includes(id)){
      setScore(0);
      setClickedCats([]);
    } else {
      setScore(score + 1);
      setClickedCats(...clickedCats, id);

      console.log(clickedCats);
      console.log('score: ', score)

      if (score + 1 > highScore) {
        setHighScore(score + 1);
      }
    }
    setCats(shuffleArray([...cats]))
  }

  return (
    <>
      <Header/>
      <Score score = {score} highScore = {highScore}/>
      <CardGrid cats={cats} onCardClick={handleCardClick}/>
    </>
  )
}

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

export default App;
