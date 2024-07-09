import './Cacul.css'
import {useState} from "react";

function Calcul() {
    const [result, setResult] = useState("");
    const click = (event) => {
        setResult(result.concat(event.target.value))
    }
    const cleardispaly = () => {
        setResult("")
    }
    const calculate = () => {
        setResult(eval(result).toString())
    }
    return(
        <div>
            <input type="text" placeholder="0" id='reponse' value={result}/>
            <input type="button" value={"0"} className='button' onClick={click} />
            <input type="button" value={"1"} className='button' onClick={click}/>
            <input type="button" value={"2"} className='button' onClick={click}/>
            <input type="button" value={"3"} className='button' onClick={click}/>
            <input type="button" value={"4"} className='button' onClick={click}/>
            <input type="button" value={"5"} className='button' onClick={click}/>
            <input type="button" value={"6"} className='button' onClick={click}/>
            <input type="button" value={"7"} className='button' onClick={click}/>
            <input type="button" value={"8"} className='button' onClick={click}/>
            <input type="button" value={"9"} className='button' onClick={click}/>
            <input type="button" value={"."} className='button' onClick={click}/>
            <input type="button" value={"/"} className='button' onClick={click}/>
            <input type="button" value={"*"} className='button' onClick={click}/>
            <input type="button" value={"-"} className='button' onClick={click}/>
            <input type="button" value={"+"} className='button' onClick={click}/>
            <input type="button" value={"%"} className='button' onClick={click}/>
            <input type="button" value={"DEL"} className='button button1' onClick={cleardispaly} />
            <input type="button" value={"="} className='button button1' onClick={calculate}/>
        </div>
    )

}

export default Calcul;