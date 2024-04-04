import React, {useState, useEffect} from 'react'


function Todo(){
    const [tasks, setTasks] = useState([]);
    const [time, setTime] = useState(new Date);
    let add = ()=>{
        let x = document.querySelector("#txt").value;
        document.querySelector("#txt").value = "";
        if(x !== ""){
            setTasks(t => [...t , x]);
        }
    }
    let remove = (index)=>{
        setTasks(tasks.filter((_,i)=> i !== index));
    }
    let moveUp = (index)=>{
        if(index > 0){
            let arr = [...tasks];
            [arr[index-1], arr[index]] = [arr[index], arr[index-1]];
            setTasks(arr);
        }
    }
    let moveDown = (index)=>{
        if(index < tasks.length - 1){
            let arr = [...tasks];
            [arr[index+1], arr[index]] = [arr[index], arr[index+1]];
            setTasks(arr);
        }
    }
    let clock = ()=>{
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let meridian = hours >= 12 ? "PM":"AM";
        hours = hours % 12 || 12;
        let addZero = (x)=>{
            return (x < 10 ? "0":"") +x;
        }
        return `${addZero(hours)} : ${minutes} : ${addZero(seconds)} ${addZero(meridian)} `;
    }
    useEffect(()=>{
        let timeIntervalId = setInterval(()=>{
            setTime(new Date);
        }, 1000);

        return()=>{
            clearInterval(timeIntervalId);
        }
    }, []);
    return(
        <div className="flex flex-col items-center justify-center w-[99vw] h-[95vh]">
            <div className="text-white w-full flex justify-end items-center px-[10px]">
                <p className="text-xl p-[10px] backdrop-blur-[10px] rounded border-blue-500 border-[3px]">{clock()}</p>
            </div>
            <div className="flex flex-col items-center bg-black w-max h-max p-[20px] md:p-[40px] max-h-[95vh] overflow-auto rounded-[30px] shadow-2xl gap-[10px]">
                <h1 className="text-white">To-Do-List</h1>
                <div>
                    <input className="p-[10px] w-[200px] md:w-[240px] rounded-md" type="text" id="txt"/>
                    <button className="bg-gray-500 p-[5px] rounded m-[10px]" onClick={add}>Add</button>
                </div>
                <div>
                    <ul>
                        {tasks.map((task, i)=> <li key={i} className="flex  items-center justify-between bg-white rounded overflow-x-auto w-[200px] md:w-[240px] h-[50px] font-bold p-[10px] m-[10px]">{task}
                        <button className="bg-blue-500 p-[5px] mx-[5px] w-[69px] h-[30px] rounded " onClick={()=> remove(i)}>Delete</button>
                        <button className="bg-blue-500 p-[5px] font-bold w-[30px] h-[30px] rounded " onClick={()=>moveUp(i)}>↑</button>
                        <button className="bg-blue-500 p-[5px] mx-[5px] font-bold w-[30px] h-[30px] rounded " onClick={()=>moveDown(i)}>↓</button>
                        </li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Todo