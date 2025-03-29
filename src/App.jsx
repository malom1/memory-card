import './App.css'
import { useEffect, useState } from 'react'
import Cards from './components/Card'
import CardGrid from './components/CardGrid'
import Header from './components/Header'
import Score from './components/Score'
import fetchCats from './utils/fetchCats'


function App() {

  const [cats, setCats] = useState([]);
  const [clickedCats, setClickedCats] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0)

  return (
    <>
      <Header/>
      <Score/>
      <CardGrid/>
    </>
  )
}

export default App
