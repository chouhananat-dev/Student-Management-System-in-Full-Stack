import { Link } from 'react-router-dom'
import './Home.css'
const Home = () => {
  return (
    <div className='homediv'>
      <div style={{textAlign:'center',paddingTop:'30px'}}>
        <h1 style={{color:'white'}}>WELCOME TO THE STUDENT MANAGEMENT WEBSITE</h1>
      </div>
      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',alignItems:'center',marginTop:'50px'}}>
      <Link style={{textDecoration:'none'}} to='/insert'><button style={{background:'red',fontSize:'50px',fontWeight:'bold',color:'white'}} className='homebutton'>Insert</button></Link>
      <Link style={{textDecoration:'none'}} to='/search'><button style={{background:'green',fontSize:'50px',fontWeight:'bold',color:'white'}} className='homebutton'>Search</button></Link>
      <Link style={{textDecoration:'none'}} to='/delete'><button style={{background:'blue',fontSize:'50px',fontWeight:'bold',color:'white'}} className='homebutton'>Delete</button></Link>
      <Link style={{textDecoration:'none'}} to='/update'><button style={{background:' rgb(31, 140, 249)',fontSize:'50px',fontWeight:'bold',color:'white'}} className='homebutton'>Update</button></Link>
      </div>
    </div>
  )
}

export default Home