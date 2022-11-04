// import logo from './logo.svg';
import './App.css';
import {useState,useEffect,useRef} from 'react'


function App() {
  const [size,setSize] = useState(1)
  const [screensize,setScreensize] = useState([])
  const [sizebudur,setSizebudur] = useState(1)

  
const katsayi = useRef(1)
const activerender = useRef([])
useEffect(()=>{
  setTimeout(()=>setSize((x)=>(x+katsayi.current)),2)

  if (size%75===0){
katsayi.current=-katsayi.current }

// console.log(size)
// return () => { console.log("ciktim")};
},[size])
useEffect(()=>{
console.log(activerender.current)
  if (JSON.parse(JSON.stringify(screensize)).filter(ter=>ter.y>52).length>0){
  setTimeout(()=>{setScreensize((eski)=>eski.filter((r,index)=>r.date!==undefined?r.y>52&&new Date(r.date.getTime() +25000)>new Date():null).map(t=>({x:t.x,y:t.y>52?t.y-1:52,date:t.date}))) },10)

  }



console.log(size)


// return () => { console.log("ciktim")};
},[size])

const handleclick = (e)=>{if(e==undefined){return} console.log(e); 


setScreensize(eski=>[...eski,{x:e.clientX,y:e.view.innerHeight-e.clientY,date:new Date()}]) 

}
  return (
    <div className="App" onClick={handleclick} className="noselect">
{/* {JSON.stringify(screensize)} */}
{/* {JSON.stringify(screensize)} */}
           {screensize!=undefined&&JSON.parse(JSON.stringify(screensize)).map(budur=> <div style={{"font-size":"40px",position:"absolute",bottom:budur.y-100,width:20,left:budur.x-100}}><section class="stage">
      <figure class="ball bubble"></figure>
</section> </div>)}

      <header className="App-header">
        

Balon Showwww
<div style={{"font-size":20}}><svg class="heart" viewBox="0 0 32 29.6">
  <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
  c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
</svg>  </div>
      </header>
    </div>
  );
}

export default App;
