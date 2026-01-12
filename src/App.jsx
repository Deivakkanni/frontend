import Apidata from './component/Apidata'
import Count from './component/Count'
import React, { useState } from 'react'
import Product from './component/Product'
import Name from './component/Name'
import Array from './component/Array'
import ProductUseff from './component/ProductUseff'
import UsEffect from './component/UsEffect'
import Formtwo from './component/Formtwo'
import Formone from './component/Formone'
import Object from './component/Object'
import Square from './component/Square'
import Practice from './component/Practice'
import Userefrence from './component/Userefrence'
import CompA from './component/CompA'
import CompAcontextApi from './component/CompAcontextApi'
import { CounterProvider } from './component/context/CounterProvider'
import CompB from './component/CompB'
import GroceryList from './component/GroceryList'


export default function App() {

  const [hide, setHide] = useState(true);
  const handlefalse = () => {
    setHide(false);
  }

  //CompA,CompB

  const [name, setName] = useState("Arun");
  const [count, setCount] = useState(0)
  const handleadd = (data) => {
    setCount(count + 1)
    console.log(data);
  }

  return (
    <div>
      {/* <h1>Name: Deivakanni V </h1> */}
      <CounterProvider>           

      {/*{hide && <button onClick={handlefalse}>Log out</button> }
       {hide ? <UsEffect /> :"Loged out please login"}

     <hr></hr>
      <button onClick={handlefalse}>Log Out</button>
     {hide? <ProductUseff />:"Loged out please login"} */}
      {/* <hr></hr>

<Count />
<hr></hr>

<Name />
<hr></hr>

<Array />
<hr></hr>

<Apidata />
<hr></hr> */}

      {/* <Product />
<hr></hr> */}

      <ProductUseff />

      {/* <hr></hr>
     
{/* <Object /> */}
      {/* <hr></hr>
    
{/* <Formone />
<hr></hr> */}

      {/* <Formtwo /> 
<hr></hr>*/}

      {/* <Practice /> 
<hr></hr> */}

      {/* <Square />  
<hr></hr>*/}

      {/* <Userefrence /> 
<hr></hr>*/}

      {/* <CompA name={name} age={25}/> */}
      {/* <CompA nm={"Deva"} age={28} count={count}/> */}
      {/* <CompA count={count} handleadd={handleadd} /> 
      <hr></hr>*/}

      {/* <CompAcontextApi />
      <CompB />
<hr></hr> */}
{/* <GroceryList /> */}
      </CounterProvider>
    </div>
  )
}


