import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import './Search.css'

const Search = () => {
 const [search, setsearch] = useState('')
 const [result, setResult] = useState([]) 
 const [resultb, setResultb] = useState([]) 
  useEffect(()=>{
    fetch('http://localhost:5000/search')
    .then(res=>res.json())
    .then(data=>setResult(data))
    .catch(err=>console.log(err))
  }, [])
  const handlesubmit=(e)=>{
    e.preventDefault();
    fetch(`http://localhost:5000/search2/${search}`)
    .then(res=>res.json())
    .then(data=>setResultb(data))
    .catch(err=>console.log(err))
  }
  return (
   
    <div style={{minHeight:'100vh',display:'flex',justifyContent:'space-evenly',alignItems:'center',backgroundColor:'black',flexWrap:'wrap-reverse'}}>
     <div style={{display:'inline-block',marginTop:'20px',marginLeft:'20px',marginRight:'20px',paddingLeft:'10px',paddingRight:'10px',backgroundColor:'rgb(138, 242, 242)',border:'8px solid rgb(31, 140, 249)',borderRadius:'10px'}}>
      <h2>Here you will get the list of all the registered students</h2>
      <div style={{display:'flex',justifyContent:'center'}}>
      <table>
          <thead>
            <tr>
          <th>Student Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Class</th>
          <th>Age</th>
          <th>Fees Status</th>
          </tr>
          </thead>
          <tbody>
           {result.map(item => (
              <tr>
              <td>{item.student_id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.class}</td>
              <td>{item.age}</td>
              <td>{item.fees}</td>
              </tr>
            ))}
          </tbody>
        </table>  
        </div>    
        <div style={{marginTop:'20px', fontSize: '20px',
    fontWeight: 'bold'}}>
        <Link  to='/'>Home</Link>
        </div>
      </div>
      <div style={{display:'inline-block',marginLeft:'20px',marginRight:'20px',paddingLeft:'10px',paddingRight:'10px',marginTop:'20px',backgroundColor:'rgb(138, 242, 242)',border:'8px solid rgb(31, 140, 249)',borderRadius:'10px'}}>
        <form onSubmit={handlesubmit}>
          <input style={{marginTop:'10px',width:'350px',height:'25px',fontSize:'20px',fontWeight:'bold'}} type='text' placeholder='search' onChange={(e)=>{setsearch(e.target.value)}} ></input>
          <button style={{marginTop:'10px',marginBottom:'10px',height:'25px',width:'80px',backgroundColor:'red',color:'white',fontSize:'18px'}} type='submit'>Search</button>
        </form>
        <div  style={{display:'flex',justifyContent:'center'}}>
        <table>
          <thead>
            <tr>
          <th>Student Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Class</th>
          <th>Age</th>
          <th>Fees Status</th>
          </tr>
          </thead>
          <tbody>
           {resultb.map(item => (
              <tr>
              <td>{item.student_id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.class}</td>
              <td>{item.age}</td>
              <td>{item.fees}</td>
              </tr>
            ))}
          </tbody>
        </table>  
        </div>
       </div>
    </div>
   
  )
}

export default Search