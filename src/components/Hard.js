import Card from "./Card";
import { useState } from "react";


function Hard(){


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
           <Card resetCards={resetCards} setCount={setCount} count={count} cardId={1}/>,
           <Card resetCards={resetCards} setCount={setCount} count={count} cardId={6}/>,
           <Card resetCards={resetCards} setCount={setCount} count={count} cardId={2}/>,
           <Card resetCards={resetCards} setCount={setCount} count={count} cardId={3}/>,
           <Card resetCards={resetCards} setCount={setCount} count={count} cardId={5}/>,
           <Card resetCards={resetCards} setCount={setCount} count={count} cardId={4}/>,
           <Card resetCards={resetCards} setCount={setCount} count={count} cardId={5}/>,
           <Card resetCards={resetCards} setCount={setCount} count={count} cardId={2}/>,
           <Card resetCards={resetCards} setCount={setCount} count={count} cardId={3}/>,
           <Card resetCards={resetCards} setCount={setCount} count={count} cardId={4}/>,
           <Card resetCards={resetCards} setCount={setCount} count={count} cardId={1}/>,
           <Card resetCards={resetCards} setCount={setCount} count={count} cardId={6}/>,
           <Card resetCards={resetCards} setCount={setCount} count={count} cardId={7}/>,
           <Card resetCards={resetCards} setCount={setCount} count={count} cardId={8}/>,
           <Card resetCards={resetCards} setCount={setCount} count={count} cardId={8}/>,
           <Card resetCards={resetCards} setCount={setCount} count={count} cardId={7}/>
    ])

    
    return(
        <>
            <h1>Hard</h1>
            <div className="card-container">
                {displayCards}
            </div>
        </>
    )
}


export default Hard;