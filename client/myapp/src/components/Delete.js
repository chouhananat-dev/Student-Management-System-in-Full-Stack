import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Delete.css';
const Delete = () => {
    const [student_id, setstudent_id] = useState('');
    const idsubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/deletea',{student_id})
        .then((res)=>{alert(res.data)})
        .catch((err)=>{console.log(err)})
    }
    const [first_name, setfirst_name] = useState('');
    const namesubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/deleteb',{first_name})
        .then((res)=>{alert(res.data)})
        .catch((err)=>{console.log(err)})
    }
    const [student_class, setstudent_class] = useState('');
    const classsubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/deletec',{student_class})
        .then((res)=>{alert(res.data)})
        .catch((err)=>{console.log(err)})
    }
    
  return (
    <div className='container'>
     
        <div className='inner-container'>
       <div>
       <form  onSubmit={idsubmit} className='A'>
            <h2>Delete by student-id:</h2>
            <input type='number' placeholder='Enter student-id' onChange={(e)=>{setstudent_id(e.target.value)}} style={{fontSize:'20px'}}></input>
            <button className='deletebutton' type='submit'>Delete</button>
        </form>
       </div>

       <div >
       <form  onSubmit={namesubmit} className='A'>
            <h2>Delete by student-name:</h2>
            <input type='text' placeholder='Enter student-name' onChange={(e)=>{setfirst_name(e.target.value)}} style={{fontSize:'20px'}}></input>
            <button className='deletebutton' type='submit'>Delete</button>
        </form>
       </div>

       <div >
       <form  onSubmit={classsubmit} className='A'>
            <h2>Delete by student-class:</h2>
            <input type='text' placeholder='Enter student-class' onChange={(e)=>{setstudent_class(e.target.value)}} style={{fontSize:'20px'}}></input>
            <button className='deletebutton' type='submit'>Delete</button>
        </form>
       </div>
       <Link to='/' className='link'>Home</Link>
       </div>
    </div>
  )
}

export default Delete