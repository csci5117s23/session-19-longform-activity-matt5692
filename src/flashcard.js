import { useState } from "react";
import styled from "@emotion/styled";

const frontColor = "white";
const backColor = "lightgray";

const Container = styled.div`
    text-align: center;
    border-style: solid;
    font-size: 1.5em;
    background-color: ${props => (props.back ? backColor : frontColor)};
`

const CardLi = styled.li`
    list-style-type: none;
    margin-bottom: 10px;
    margin-top: 10px;
`

export default function Flashcard({front, back}){
    const [isFront, setIsFront] = useState(true);

    function handleClick(){
        setIsFront(!isFront);
    }

    if(isFront){
        return(<><Container>
            <p onClick={handleClick}>{front}</p>
            </Container>  
            </>);
    } else{
        return(<><Container back>
            <p onClick={handleClick}>{back}</p>
            </Container>
            </>);
    }
}

// map example from https://www.telerik.com/blogs/beginners-guide-loops-in-react-jsx
export function FlashcardList({cards}){
    return(<><ul>
            {cards.map(flashcard => (
                <CardLi><Flashcard front={flashcard.front} back={flashcard.back}></Flashcard></CardLi>
            ))}
        </ul></>);

}

export function FlashcardBuilder({onAdd}){
    function handleSubmit(e){
        e.preventDefault();

        const front = document.querySelector("#frontInput");
        const back = document.querySelector("#backInput")

        onAdd(front.value, back.value);

        front.value = "";
        back.value = "";
    }
    
    return(<>
    <Container>
    <form onSubmit={handleSubmit}>
        <label>
            Front:
            <input name="front" id="frontInput"></input>
        </label>
        <label>
            Back:
            <input name="back" id="backInput"></input>
        </label>
        <button type="submit">Build</button>
    </form>
    </Container>
    </>)
}