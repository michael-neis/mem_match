import { useState } from "react";

function Card({cardId, setCount, count, resetCards}){

    const [cardDisplay, setCardDisplay] = useState(
        <p>Card</p>
    );
    const [isFlipped, setIsFlipped] = useState(false);


    const handleClick = () => {
        if(isFlipped === false){
            setIsFlipped(true);
            setCount(count += 1);
            setCardDisplay(
                <p>{cardId}</p>
            );
            console.log('Card clicked: ' + cardId);
            console.log("count is: " + count);
            if(count > 1){
                resetCards();
            }
        }else{
            console.log('Card clicked already')
        }
    }


    return(
        <div className="game-card" onClick={handleClick}>
            {cardDisplay}
        </div>
    )
}


export default Card;