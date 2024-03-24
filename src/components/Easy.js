import Card from "./Card";
import { useState } from "react";

function Easy(){

    const [count, setCount] = useState(0);

    const resetCards = () => {

        for(let Card of displayCards){
            if(Card.isFLipped){
                Card.setIsFlipped(false);
                Card.setCardDisplay(
                    <p>Card</p>
                );
            }
        }

    }


    let displayCards = ([
        <Card resetCards={resetCards} setCount={setCount} count={count} cardId={4}/>,
        <Card resetCards={resetCards} setCount={setCount} count={count} cardId={1}/>,
        <Card resetCards={resetCards} setCount={setCount} count={count} cardId={2}/>,
        <Card resetCards={resetCards} setCount={setCount} count={count} cardId={3}/>,
        <Card resetCards={resetCards} setCount={setCount} count={count} cardId={2}/>,
        <Card resetCards={resetCards} setCount={setCount} count={count} cardId={4}/>,
        <Card resetCards={resetCards} setCount={setCount} count={count} cardId={3}/>,
        <Card resetCards={resetCards} setCount={setCount} count={count} cardId={1}/>,
    ])



    return(
        <>
        <h1>Easy</h1>
        <div className="card-container">
            {displayCards}
        </div>
        </>
    )
}


export default Easy;