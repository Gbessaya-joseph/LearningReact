
const title = 'Bonjour les gens'
function App() {
const showTitle = true
const handClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(e.target)
    alert("Je suis une alerte")
}
  return  <div className="App">
    {showTitle && <h1 onClick={handClick} id="hello-world" className="hello-world" style={{color: 'red',
     background: 'blue', cursor: 'pointer'}}>{title}</h1>}
    <p>lorem</p>

  </div>

}

export default App;
