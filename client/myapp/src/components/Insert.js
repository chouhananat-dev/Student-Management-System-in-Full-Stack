import React,{useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Insert.css'

const Insert = () => {
  const [values, setvalues] = useState({
    student_id:'',
    first_name:'',
    last_name:'',
    class:'',
    age:'',
    fees:''
  });
const handlesubmit=(e)=>{
 e.preventDefault();
  //using axios post method to send data
  axios.post('http://localhost:5000/insert',values)
  .then((res)=>{alert(res.data)})
  .catch((err)=>{console.log(err)})
 }
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',backgroundColor:'black'}}>
      <div style={{height:'650px',width:'500px',backgroundColor:'rgb(138, 242, 242)',border:'8px solid rgb(31, 140, 249)',borderRadius:'10px'}}>
        <div className='innerupdatediv'>
          <h2>Insert new student:</h2>
        </div>
      <form onSubmit={handlesubmit}>
        <div className='innerupdatediv'>
        <input style={{height:'40px',width:'300px',fontSize:'20px'}} type='number' placeholder='student ID' name='student_id' onChange={(e)=>{setvalues({...values,student_id: e.target.value})}}></input>
        </div>
        <div className='innerupdatediv'>
        <input style={{height:'40px',width:'300px',fontSize:'20px'}} type='text' placeholder='first_name' name='first_name'  onChange={(e)=>{setvalues({...values,first_name: e.target.value})}}></input>
        </div>
        <div className='innerupdatediv'>
        <input style={{height:'40px',width:'300px',fontSize:'20px'}} type='text' placeholder='last_name' name='last_name'  onChange={(e)=>{setvalues({...values,last_name: e.target.value})}}></input>
        </div>
        <div className='innerupdatediv'>
        <input style={{height:'40px',width:'300px',fontSize:'20px'}} type='text' placeholder='class' name='class'  onChange={(e)=>{setvalues({...values,class: e.target.value})}}></input>
        </div>
        <div className='innerupdatediv'>
        <input style={{height:'40px',width:'300px',fontSize:'20px'}} type='number' placeholder='age' name='age'  onChange={(e)=>{setvalues({...values,age: e.target.value})}}></input>
        </div>
        <div className='innerupdatediv'>
        <input style={{height:'40px',width:'300px',fontSize:'20px'}} type='text' placeholder='fees' name='fees'  onChange={(e)=>{setvalues({...values,fees: e.target.value})}}></input>
        </div> 
        <div className='innerupdatediv'>
      <button className='insertbutton' type='submit'>Submit</button>
      </div> 
      </form>
      <div style={{marginLeft:'20px',marginTop:'20px'}}>
    <Link style={{fontWeight:'bold',fontSize:'20px'}} to='/'>Home</Link>
    </div>
    </div>
    </div>
  )
}

export default Insert