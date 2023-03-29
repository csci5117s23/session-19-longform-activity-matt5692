import { useState } from "react";
import styled from "@emotion/styled";

const frontColor = "white";
const backColor = "lightgray";

const Container = styled.div`
    text-align: center;
    border-style: solid;
    font-size: 1.5em;
    background-color: ${props => (props.front ? frontColor : backColor)};
`
export default function Flashcard({front, back}){
    const [isFront, setIsFront] = useState(true);

    function handleClick(){
        setIsFront(!isFront);
    }

    if(isFront){
        return(<><Container front>
            <p className="front" onClick={handleClick}>{front}</p>
            </Container>  
            </>);
    } else{
        return(<><Container>
            <p className="back" onClick={handleClick}>{back}</p>
            </Container>
            </>);
    }
}

// map example from https://www.telerik.com/blogs/beginners-guide-loops-in-react-jsx
export function FlashcardList({cards}){
    return(<><ul>
            {cards.map(flashcard => (
                <li><Flashcard front={flashcard.front} back={flashcard.back}></Flashcard></li>
            ))}
        </ul></>);

}