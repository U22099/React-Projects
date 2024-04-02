import React, {useState} from 'react'


function Todo(){
    const [tasks, setTasks] = useState([]);
    let add = ()=>{
        let x = document.querySelector("#txt").value;
        document.querySelector("#txt").value = "";
        setTasks(t => [...t , x]);
    }
    let remove = (index)=>{
        setTasks(tasks.filter((_,i)=> i !== index));
    }
    return(
        <div className="flex flex-col items-center bg-black w-max h-max p-[20px] md:p-[40px] max-h-[95vh] overflow-auto rounded-[30px] shadow-2xl gap-[10px]">
            <h1 className="text-white">To-Do-List</h1>
            <div>
                <input className="p-[10px] rounded-md" type="text" id="txt"/>
                <button className="bg-gray-500 p-[5px] rounded m-[10px]" onClick={add}>Add</button>
            </div>
            <div>
                <ul>
                    {tasks.map((task, i)=> <li key={i} className="flex  items-center justify-between bg-white rounded w-[200px] md:w-[240px] h-[50px] font-bold p-[10px] m-[10px]">{task}<button className="bg-red-500 p-[5px] 
                    w-[69px] h-[30px] rounded " onClick={()=> remove(i)}>Delete</button></li>)}
                </ul>
            </div>
        </div>
    );
}
export default Todo