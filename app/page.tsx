"use client";
import React, { useState } from 'react';

const Page: React.FC = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const[mainTask,setMainTask]=useState([])

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    // to store the previous and current data in the setMaintask
    // setMainTask([...mainTask,{title,desc}]);
    
    setTitle("")
    setDesc("")
    console.log(mainTask);
    
  };
  let renderTask =<h2>No Task Available</h2>;
 



  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">Deepak Todo List</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2"
          placeholder='Enter Title here'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2"
          placeholder='Enter Description here'
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        ></input>
        <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5">Add task</button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        {/* to displY OR PRINT THE RENDERTASK   */}
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  );
};

export default Page;








 