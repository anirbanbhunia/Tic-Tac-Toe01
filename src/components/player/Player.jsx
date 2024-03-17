import { useState } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button"
import Headline from "../headline/Headline"
import { Link } from "react-router-dom";

function Player(){
    const[cardArr,setCardArr] = useState(Array(9).fill(""))
    const[turn,setTurn] = useState(true)
    function press(idx){
        if(cardArr[idx] == "" && logic() == false){
            setTurn(!turn)
            let arr = cardArr;
            if(turn == true){
                arr[idx] = "X"
                setCardArr(arr)
            } 
            else if (turn == false){
                arr[idx] = "O"
                setCardArr(arr)
            }   
        }
    }
    function tie(){
        if(logic() == false){
        let count = 0;
        for(let i = 0;i<cardArr.length;i++){
            if(cardArr[i] != ""){
            count++;
            }
        }
        if(count == cardArr.length) return true
        } 
    }
    function logic(){
        let res = false
        if(cardArr[0] == cardArr[1] && cardArr[1] == cardArr[2] && (cardArr[0]=="X"||cardArr[0]=="O")) res = cardArr[0]
        else if(cardArr[2] == cardArr[1] && cardArr[1] == cardArr[0] && (cardArr[2]=="X"||cardArr[2]=="O")) res = cardArr[0]
        if(cardArr[3] == cardArr[4] && cardArr[4] == cardArr[5] && (cardArr[3]=="X"||cardArr[3]=="O")) res = cardArr[5]
        else if(cardArr[5] == cardArr[4] && cardArr[4] == cardArr[3] && (cardArr[3]=="X"||cardArr[3]=="O")) res = cardArr[3]
        if(cardArr[6] == cardArr[7] && cardArr[7] == cardArr[8] && (cardArr[6]=="X"||cardArr[6]=="O")) res = cardArr[8]
        else if(cardArr[8] == cardArr[7] && cardArr[7] == cardArr[6] && (cardArr[8]=="X"||cardArr[8]=="O")) res = cardArr[8]
        if(cardArr[0] == cardArr[3] && cardArr[3] == cardArr[6] && (cardArr[0]=="X"||cardArr[0]=="O")) res = cardArr[6]
        else if(cardArr[6] == cardArr[3] && cardArr[3] == cardArr[0] && (cardArr[0]=="X"||cardArr[0]=="O")) res = cardArr[6]
        if(cardArr[1] == cardArr[4] && cardArr[4] == cardArr[7] && (cardArr[1]=="X"||cardArr[1]=="O")) res = cardArr[1]
        else if(cardArr[7] == cardArr[4] && cardArr[4] == cardArr[1] && (cardArr[7]=="X"||cardArr[7]=="O")) res = cardArr[1]
        if(cardArr[2] == cardArr[5] && cardArr[5] == cardArr[8] && (cardArr[2]=="X"||cardArr[2]=="O")) res = cardArr[2]
        else if(cardArr[8] == cardArr[5] && cardArr[5] == cardArr[2] && (cardArr[2]=="X"||cardArr[2]=="O")) res = cardArr[2]
        if(cardArr[2] == cardArr[4] && cardArr[4] == cardArr[6] && (cardArr[2]=="X"||cardArr[2]=="O")) res = cardArr[6]
        else if(cardArr[6] == cardArr[4] && cardArr[4] == cardArr[2] && (cardArr[2]=="X"||cardArr[2]=="O")) res = cardArr[6]
        if(cardArr[0] === cardArr[4] && cardArr[4] === cardArr[8] && (cardArr[0]==="X"||cardArr[0]==="O")) res = cardArr[8]
        else if(cardArr[8] === cardArr[4] && cardArr[4] === cardArr[0] && (cardArr[0]==="X"||cardArr[0]==="O")) res = cardArr[8]
        return res
    }
    function resetAll(){
        cardArr.fill("")
        setCardArr([...cardArr])
    }
    return (
        <Link to="/player">
            <div className="flex flex-col items-center gap-8">
            <div>
                <h1 className="text-white text-2xl md:text-4xl font-semibold"><Headline currTurn={turn} currLogic={logic()} tieLogic={tie()}/></h1>
                <div className="flex h-[260px] w-[260px] flex-wrap gap-x-2 mt-5 md:h-[400px] md:w-[400px] md:gap-x-3">
                {cardArr.map((el,idx)=> <Card key={idx} onC={press} i={idx} val={el}/>)}
                </div>
            </div>
            <div className="flex gap-6">
                <Link to="/">
                    <button className="bg-white px-5 py-1 rounded-2xl md:px-7 md:py-1 text-center font-bold active:bg-yellow-200">Home</button>
                </Link>
                {logic() !== false ? <Button onC={resetAll}/>:null}
                {tie() === true?<Button onC={resetAll}/>:null}
            </div>
            </div>
        </Link>
    );
}
export default Player
