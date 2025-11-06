import logo from './logo.svg';
import './App.css';
import { BookList } from './BookList';
import { BookList2 } from './BookList2';
import { UseStateData01 } from './UseState/UseStateData01';
import { UseStateData02 } from './UseState/UseStateData02';
import { CounterApp } from './CounterApp';
import { UseStateArrayOfObjects } from './UseState/UseStateArrayOfObjects';
import { UseEffectChangeName01 } from './UseEffect/UseEffectChangeName01';
import { UseEffectGitHub } from './UseEffect/UseEffectGitHub';
import { ControlInputForm } from './Forms/ControlInputForm';
import { MultipleInputForm } from './Forms/MultipleInputForm';
import { UseRefDemo } from './UseREF/UseRefDemo';
import { PropDrillingDemo } from './PropDrilling/PropDrillingDemo';
import { ContextBook } from './PropDrilling/ContextBook';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Main } from './Router/Main';
import { About } from './Router/About';
import { Home } from './Router/Home';
import { Product } from './Router/Product';
import { SingleProduct } from './Router/SingleProduct';
import { useState } from 'react';
function App() {
  var[user,setUser]=useState({fname:"", mail:""});
  return (
      <div>
        {/* <HashRouter>
        <Routes>
          {/* <Route path='/' element={<h1>This is Home Component</h1>}/>
          <Route path='/about' element={<h1>This is About Component</h1>}/>
          <Route path='/contact' element={<h1>This is Contact Component</h1>}/> */}
          <Route path='/' element={<Main/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/product/:productID' element={<SingleProduct/>}/>
          </Route>
        </Routes>
        </HashRouter> */}
        {/* <h1>Welcome to React Application</h1>  */}
        {/* <h2 style={{'backgroundColor':'green'}}>Hello World</h2> */}
        {/* <Greet/> */}
        {/* <Greeting></Greeting> */}
        {/* <Greeting2></Greeting2> */}
        {/* <BookList></BookList> */}
        {/* <BookList2></BookList2> */}
        {/* <UseStateData01></UseStateData01> */}
        {/* <UseStateData02></UseStateData02> */}
        {/* <Increment.js></Increment.js> */}
        {/* <CounterApp></CounterApp> */}
        {/* <UseStateArrayOfObjects></UseStateArrayOfObjects> */}
        {/* <UseEffectChangeName01></UseEffectChangeName01> */}
        {/* <UseEffectGitHub></UseEffectGitHub> */}
        {/* <ControlInputForm></ControlInputForm> */}
        {/* <MultipleInputForm></MultipleInputForm> */}
        {/* <UseRefDemo></UseRefDemo> */}
        {/* <PropDrillingDemo></PropDrillingDemo> */}
        {/* <ContextBook></ContextBook> */}
       </div> 
      
  );
}

function Greet()
{
  return (<div><h3 style={{'backgroundColor':'lightblue'}}>Good Evening</h3></div>)
}
//anonymous function
var Greeting=function()
{
  return (<div className='myclass'><h3 style={{'backgroundColor':'pink'}}>This is anonymous function</h3></div>)
}

//arrow function
var Greeting2=()=>{
  return (<div className='myclass2'><h3 style={{'color':'red', 'backgroundColor':'violet'}}>This is Arrow Function</h3></div>)
}
export default App;
