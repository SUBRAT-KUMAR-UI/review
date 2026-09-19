// import React, { useState } from 'react'

// function App() {
//   const [val,setVal] = useState(12);
  
//   return (
//     <div className='p-4'>
//       <h4>{val}</h4>
//       <button onClick={()=>setVal((prev) => prev + 1)} className='px-2 py-1 mt-2 rounded-full text-xs bg-blue-500 text-white'>Increment</button>
//     </div>
//   )
// }

// export default App
// import React, { useState } from 'react'

// function App() {
//   const [val,setValue] = useState({name:"harsh",isBanned:false})
//   return (
//     <div className='p-4'>
//       <h1>name:{val.name}</h1>
//       <h1>banned:{val.isBanned.toString()}</h1>
//       <button onClick={()=>setValue({...val,isBanned: !val.isBanned})} className={`px-3 py-1 ${!val.isBanned ? "bg-blue-500":"bg-red-500"} text-xs rounded-full text-white`}>
//         change</button>
//     </div>
//   )
// }

// export default App
// import React, { useState } from 'react'

// function App() {
//   const [val,setValue] = useState({name:"harsh",age: 24});
//   return (
//     <div onClick={()=>{setValue({...val,gender:"male"});
//     console.log(val);}}>click</div>
//   )
// }

// export default App
import React, { useState } from 'react'

function App() {
  const[val,setVal] = useState([1,2,3,4,5,6])
  return (
    <div>
      {val.map(item=><h1>{item}</h1>)}
      <button onClick={()=>setVal(()=>{
        return val.filter((item,index)=> index!=val.length-1)
      })} className='px-2 py-1 text-xs text-white rounded-full bg-blue-500'>click</button>
    </div>
  )
}

export default App