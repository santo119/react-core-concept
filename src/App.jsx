
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {
 
  function handleClick(){
    alert('button is clicked')
  }
  const handle2 = () =>{
    alert('button 2 is clicked')
  }
  const addToFive = (num) =>{
    alert(num + 5)
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <div className='margin-5px'>
      <button onClick={handleClick}>Click Me</button> 
      <button onClick={handle2}>Click 2</button>
      <button onClick={()=> {alert('button 3 is clicked')}}>Click 3</button>
      <button onClick={() => addToFive(3)}>Click 4</button>

      </div>
      
    </>
  )
}

export default App
