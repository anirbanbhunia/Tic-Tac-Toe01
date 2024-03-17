import Icon from "../icon/Icon"

function Card({onC,i,val}){
    return(
        <div className="h-[80px] w-[80px] md:h-[120px] md:w-[120px] bg-[#ffc103] border-white border-4 rounded-xl flex items-center justify-center shadow-inner shadow-black cursor-pointer" onClick={() => onC(i)}>
            <Icon sym={val}/>
        </div>
    )
}
export default Card