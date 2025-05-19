import './App.css'

function App() {

  return (
    <div>
      <p>Hello World</p>
      <Greeting />
      <Greeting display="Whats upp" />
    </div>
  )
}

export default App


function Greeting({display}) {
  return(
    <>
      <div>Hello Ryan</div>
      <p>{display}</p>
    </>
  )
}