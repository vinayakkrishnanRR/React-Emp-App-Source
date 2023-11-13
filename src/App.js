import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './ui-components/Main.jsx';
import Dash from './Elements/Dash.jsx';
import List from './Elements/List.jsx';
import Form from './Elements/Form.jsx';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/React-Emp-APP" element={<Dash/>}/>
        <Route path="/detail" element={<Main child ={<List/>}/>}/>
        <Route path="/add" element={<Main child ={<Form/>}/>}/>
      </Routes>
    </div>
  )
}

export default App



