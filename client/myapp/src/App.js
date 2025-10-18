    // App.js
    import React from 'react';
    import {Routes,Route} from 'react-router-dom'
    import Home from './components/Home';
    import Search from './components/Search';
    import Insert from './components/Insert';
import Update from './components/Update';
import Delete from './components/Delete';

    function App() {
      return (
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/insert' element={<Insert/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/update' element={<Update/>}/>
          <Route path='/delete' element={<Delete/>}/>
        </Routes>
      
      );
    }

    export default App;