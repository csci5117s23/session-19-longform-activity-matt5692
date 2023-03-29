import logo from './logo.svg';
import './App.css';
import Flashcard from './flashcard';
import { FlashcardList } from './flashcard';

function App() {
  const QUESTIONS = [{front: "question1", back:"answer1"},
                    {front: "question2", back:"answer2"},
                    {front: "question3", back:"answer3"},]

  return (
    <div className="App">
      <div>
      <Flashcard front="hello" back="world"></Flashcard>
      </div>
      <div>
        <FlashcardList cards={QUESTIONS}></FlashcardList>
      </div>
    </div>
  );
}

export default App;
