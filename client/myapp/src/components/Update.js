import React,{useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Update.css'
const Update = () => {
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
  axios.post('http://localhost:5000/update',values)
  .then((res)=>{alert(res.data)})
  .catch((err)=>{console.log(err)})
 }
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center',height:'100vh',backgroundColor:'black',paddingLeft:'15px',paddingRight:'15px'}}>
      <div style={{height:'650px',width:'500px',backgroundColor:' rgb(138, 242, 242)',border:'8px solid  rgb(31, 140, 249)', borderRadius:'10px'}}>
      <form onSubmit={handlesubmit} className='innerform'>
      <h2 style={{marginLeft:'30px'}}>Enter id of the student and update information:</h2>
        <div className='innerdiv'>
        <input className='updateform' type='number' placeholder='student ID' name='student_id' onChange={(e)=>{setvalues({...values,student_id: e.target.value})}}></input>
        </div>
       <div className='innerdiv'>
    
       <input className='updateform' type='text' placeholder='updated first_name' name='first_name'  onChange={(e)=>{setvalues({...values,first_name: e.target.value})}}></input>
       </div>
       <div className='innerdiv'>
        <input className='updateform' type='text' placeholder='updated last_name' name='last_name'  onChange={(e)=>{setvalues({...values,last_name: e.target.value})}}></input>
        </div>
        <div className='innerdiv'>
        <input className='updateform' type='text' placeholder='updated class' name='class'  onChange={(e)=>{setvalues({...values,class: e.target.value})}}></input>
        </div>
        <div className='innerdiv'>
        <input className='updateform' type='number' placeholder='updated age' name='age'  onChange={(e)=>{setvalues({...values,age: e.target.value})}}></input>
        </div>
        <div className='innerdiv'>
        <input className='updateform' type='text' placeholder='updated fees status' name='fees'  onChange={(e)=>{setvalues({...values,fees: e.target.value})}}></input>
        </div>
        <div className='innerdiv'>
      <button className='updatebutton' type='submit'>Submit</button>
      </div>
      </form>
      <div style={{marginLeft:'50px'}}>  
        <Link to='/' className='link'>Home</Link>
      </div>   
    </div>
    </div>
  )
}

export default Update