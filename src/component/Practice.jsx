import React, { useEffect, useState } from "react";

// function Mybutton(){
//     return(
//         <button>My Button</button>
//     );
// }

// const details = [{
//     name: "Deva",
//     age: 25
// },
// {
//     name: "Prabu",
//     age: 30
// },
// ];

// const records = [{
//     id: 1,
//     name: "Deva",
//     age: 25,
//     isAdult: true
// },
// {
//     id: 2,
//     name: "Prabu",
//     age: 15,
//     isAdult: false

// },
// ];

// function Alrtfn(){
//     function Eventhndle(){
//     alert("Bitton clicked");
//     }
//   return(
//     <button onClick={Eventhndle}>Click</button>
//   )
// }

export default function Practice() {
// const[color,setColor]=useState("Yellow");

// const[api,setApi]=useState([]);

// const apidata = async () =>{
// let fetchdata = await fetch("https://dummyjson.com/products");
// let data = await fetchdata.json();
// setApi(data.products);
// } 
// useEffect(()=>{
//  apidata();
//  return ()=>{
//     console.log("Dead");
//      }   
// }
// )

// const[count,setCount]=useState(0);

// useEffect(()=>{
//     setTimeout(() => {
//         setCount((count)=> count+1);
//     }, 1000);
// },[])

// const[count,setCount]=useState(0);

// const handlecount = (type) =>{
//     if(type=== 'inc') {
//        setCount(count+1)
//     }
//     else {
//         setCount(count-1)}
// }

// const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red"
//   });

// const handleobj = () =>{
//     setCar({color: "blue"})
// }
    return (
        <>
        {/* <p>{car.color},{car.brand}, {car.model}</p> 
        <button onClick={handleobj}>Color</button> */}
        {/* <p>Count:{count}</p>
        <button onClick={()=>handlecount('inc')}>Increase</button>
        <button onClick={()=>handlecount()}>Decrease</button> */}



        {/* <div>
<h1>Testing time {count}</h1>
        </div>

        <div>
       <button onClick={apidata}>Product</button>
{
  api.map((de)=>(
<div class="card">
 <div class="badge">HOT SALE</div>
 <div class="tilt">
  <div class="img"><img src="https://images.unsplash.com/photo-1544237526-cae15a57ed1e?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDkwNDY5NjB8&ixlib=rb-4.1.0&q=85" alt="Premium Laptop" /></div>
 </div>
 <div class="info">
  <div class="cat">{de.title}</div>
  <h2 class="title">UltraBook Pro X</h2>
  <p class="desc">Cutting-edge performance with Intel Core i9, 32GB RAM, and a 1TB SSD in a sleek, lightweight design.</p>
  <div class="feats">
   <span class="feat">4K Display</span>
   <span class="feat">16-Hour Battery</span>
   <span class="feat">Thunderbolt 4</span>
  </div>
  <div class="bottom">
   <div class="price">
    <span class="old">$2,499</span>
    <span class="new">$1,999</span>
   </div>
   <button class="btn">
    <span>Add to Cart</span>
    <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
     <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4"/>
     <line x1="3" y1="6" x2="21" y2="6"/>
     <path d="M16 10a4 4 0 01-8 0"/>
    </svg>
   </button>
  </div>
  <div class="meta">
   <div class="rating">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="0.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="0.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="0.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="0.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="0.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    <span class="rcount">245 Reviews</span>
   </div>
   <div class="stock">In Stock</div>
  </div>
 </div>
</div>
  ))  
}
   </div>
        <div>
<h1>My fav color {color}</h1>
<button onClick={()=>{setColor("Blue")}}>changecolor</button>
        </div>

<div>  <h1>Nested Button</h1>
        <Mybutton />
        <h1>Event button</h1>
<Alrtfn />
            <h1>List</h1>
            <ul>
                {
                    details.map((data) => (
                        <li key=''>My name is {data.name} and age {data.age}</li>
                    ))
                }
            </ul>

            <h1>Using Ternary Operstor (?::)</h1>
            <ul>
                {
                    records.map((re) => (
                        <li key={re.id} style={{ color: re.isAdult ? 'green' : 'red' }}>
                            {re.name} and {re.age}
                        </li>

                    ))
                }
            </ul>
            </div> */}
            <div><ul style={{fontSize:"20px"}}>
                <li>useState (Count,Name,array,object,api)</li>
                <li>useEffect (api)</li>
                <li>useForm (target, validation)</li>
                <li>useCallback,useMemo</li>
                <li>React Lifecycle</li>
                <li>useRef (formfocus)</li>
                <li>Props</li>
                </ul></div>
        </>
    );
}
