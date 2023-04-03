import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Flashcard from './flashcard';
import { FlashcardList } from './flashcard';
import { FlashcardBuilder } from './flashcard';

function App() {
  let QUESTIONS = [{front: "question1", back:"answer1"},
                    {front: "question2", back:"answer2"},
                    {front: "question3", back:"answer3"},]
  const [cardList, setCardList] = useState(QUESTIONS)

  function handleAdd(front, back){
    let newList = cardList.slice();
    newList.push({front: front, back: back});
    setCardList(newList);
  }
  
  return (
    <div className="App">
      <div>
        <FlashcardList cards={cardList}></FlashcardList>
        <FlashcardBuilder onAdd={(front, back) => handleAdd(front, back)}></FlashcardBuilder>
      </div>
    </div>
  );
}

export default App;
