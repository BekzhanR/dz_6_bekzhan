import React,{useState,useEffect,useRef} from "react";

const CounterComponent = () => {
    const [count,setCount] = useState(0)
    const [run,setRun] = useState(true)
    const interval = useRef(null)

    useEffect(() => {
        const up = () => {
            setCount((prevCount) => prevCount + 1)
        }
        if (run){
            interval.current = setInterval(up,1000)
        }
        return() => clearInterval(interval.current)
    },[run])

    const handleTogle = () => {
        setRun((prevRun) => !prevRun)
    }
    return(
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={handleTogle}>
                {run ?'остановить':'возобновить'}
            </button>
        </div>
    )
}

export default CounterComponent