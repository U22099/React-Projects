import React, {useState, useRef, useEffect} from 'react'

function StopWatchTutorial(){
    const [isRunning, setIsRunning] = useState(false);
    const [ellapsedTime, setEllapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(()=>{
        if(isRunning){
            intervalIdRef.current = setInterval(()=>{
                setEllapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }
        return ()=>{
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - ellapsedTime;
    }
    function stop(){
        setIsRunning(false);
    }
    function reset(){
        setIsRunning(false);
        setEllapsedTime(0);
    }
    function formatTime(){
        let hours = Math.floor(ellapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(ellapsedTime / (1000 * 60));
        let seconds = Math.floor(ellapsedTime / 1000 % 60);
        let millisec = Math.floor((ellapsedTime % 1000) / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        millisec = String(millisec).padStart(2, "0");
        
        return `${minutes}:${seconds}:${millisec}`;
    }
    return(
        <div className="p-[10px] md:p-[30px] flex flex-col  items-center justify-center border-white border-[6px] rounded-lg">
            <h1 className="text-white text-[3rem] md:text-[5rem] font-mono [text-shadow:_0_1px_0_rgb(255,255,255)] font-bold" id="time">{formatTime()}</h1>
            <div className="flex items-center gap-[20px]">
                <button className="bg-green-500 rounded shadow-sm shadow-green-300 font-bold active:shadow-none w-[80px] md:w-[100px] h-[40px]" onClick={start}>Start</button>
                <button className="bg-red-500 rounded shadow-red-300 shadow-sm active:shadow-none w-[80px] md:w-[100px] h-[40px] font-bold" onClick={stop}>Stop</button>
                <button className="bg-blue-500 rounded shadow-blue-300 shadow-sm active:shadow-none w-[80px] md:w-[100px] h-[40px] font-bold" onClick={reset}>Reset</button>
            </div>
        </div>
    )
}
export default StopWatchTutorial