
const title = 'Bonjour les gens'
const showTitle = true
const todo = ['bois', 'pierre', 'feuille', 'can']
function App() {
  const handClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        console.log(e.target)
        alert("Je suis une alerte")
  }
  return  <>
    {showTitle ? <h1 onClick={handClick} id="hello-world" className="hello-world" style={{color: 'red',
     background: 'blue', cursor: 'pointer'}}>{title}</h1> : null}
    <p>lorem</p>
    <ul>
        {todo.map((t, index) => <li key={index}>{t}</li>)}
    </ul>
   <Title color="blue" hidden={false}>Hello World</Title>
  </>

}

function Title({color, children, hidden}) {

    if (hidden) {
        return null
    }
    const propos = {
    id: "monid",
    className: "maclass"
    }

    return <h1 style = {{color: color}}>{children}</h1>

}
export default App;
