import React, {useState, useRef, useEffect} from 'react'

function StopWatch(){
    let min = 0;
    let sec = 0;
    let millisec = 0;
    let minStr = "00";
    let secStr = "00";
    let millisecStr = "00"
    let timeInt;
    let [arr, setArr] = useState([0,0,0]);
    let [strArr, setStrArr] = useState(["00","00","00"]);
    let isRunning = false;
    function start(){
        if(isRunning == false){
            isRunning = true;
            timeInt = setInterval(()=>{
                if(millisec == 99){
                    sec++;
                    millisec = 0;
                    if(sec == 60){
                        min++;
                        sec = 0;
                    }
                }else{
                    millisec += 1;
                }
                minStr = String(min).padStart(2, "0");
                secStr = String(sec).padStart(2, "0");
                millisecStr = String(millisec).padStart(2, "0");
                document.querySelector("#time").innerHTML = minStr+":"+secStr+":"+millisecStr;
            }, 10);
        }
    }
    function stop(){
        clearInterval(timeInt);
        isRunning = false;
    }
    function reset(){
        min = 0;
        sec = 0;
        millisec = 0;
        minStr = "00";
        secStr = "00";
        millisecStr = "00";
        clearInterval(timeInt);
        document.querySelector("#time").innerHTML = "00:00:00";
        isRunning = false;
    }
    return(
        <div className="p-[10px] md:p-[30px] flex flex-col  items-center justify-center border-white border-[6px] rounded-lg">
            <h1 className="text-white text-[3rem] md:text-[5rem] font-mono [text-shadow:_0_1px_0_rgb(255,255,255)] font-bold" id="time">00:00:00</h1>
            <div className="flex items-center gap-[20px]">
                <button className="bg-green-500 rounded shadow-sm shadow-green-300 font-bold active:shadow-none w-[80px] md:w-[100px] h-[40px]" onClick={start}>Start</button>
                <button className="bg-red-500 rounded shadow-red-300 shadow-sm active:shadow-none w-[80px] md:w-[100px] h-[40px] font-bold" onClick={stop}>Stop</button>
                <button className="bg-blue-500 rounded shadow-blue-300 shadow-sm active:shadow-none w-[80px] md:w-[100px] h-[40px] font-bold" onClick={reset}>Reset</button>
            </div>
        </div>
    )
}
export default StopWatch