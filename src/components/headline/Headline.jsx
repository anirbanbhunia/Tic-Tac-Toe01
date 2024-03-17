
function Headline({currTurn,currLogic,tieLogic}){
    if(tieLogic === true){
        return(
            <span className="text-red-600 mx-[55px] md:mx-[79px]">It was a draw</span>
        )
    }
    if(currLogic === false){
        return(
            <span>Current turn: &nbsp;{currTurn?"X":"O"}</span>
        )
    }else{
        return(
            <>
                <span>Winner is: &nbsp;{currLogic}</span>
            </>
        )
    }
}
export default Headline