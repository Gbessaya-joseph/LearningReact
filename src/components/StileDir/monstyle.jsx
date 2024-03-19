
const style = {
    color: 'red',
    backgroundColor: 'yellow'
}

export function MyStyle() {
    const myAppTyle = {
        width: '30%',
        color: 'red',
        borderRadius:'20px',
    }
    return <div style={myAppTyle}>
        <div>
            <img src="toto.jpg" alt="me voici" />
        </div>
        <h1>Mon style</h1>
    </div>
}
export function MyBloc({ image }) {
  const imageStyle = {
    width: '200px', // Ajustez les dimensions de l'image selon vos besoins
    height: 'auto', // Définissez la hauteur sur auto pour maintenir le rapport hauteur/largeur
    borderRadius: '20px'
  };

  return (
    <div>
      <div>
          <img src={image} alt="" style={imageStyle}/>
      </div>
    </div>
  );
}