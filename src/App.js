import {CheckBox} from "./components/Forms/checkBox.jsx";
import {Input} from "./components/Forms/input";
import {ProductCategoryRow}  from "./components/products/productCategorieRow";
import {ProductRow} from "./components/products/productRow";
import {useState} from "react";
import {MyStyle} from "./components/StileDir/monstyle"
import img1 from "./imageHome/toto.jpg"
import img2 from "./imageHome/man.jpeg"
import {MyBloc} from  "./components/StileDir/monstyle"

const PRODUCTS = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
]


function App({ image }) {
  const [showStockedOnly , setShowStockedOnly] = useState(false)
  const [search, setSearch]= useState('')

  const visibleProducts= PRODUCTS.filter(product =>{
    return !(showStockedOnly && !product.stocked);

  })

  const imageStyle = {
    width: '200px', // Ajustez les dimensions de l'image selon vos besoins
    height: 'auto', // Définissez la hauteur sur auto pour maintenir le rapport hauteur/largeur
  };

  return <div className="container my-3">
    <SearchBar
        search={search}
        onSearchChange={setSearch}
        showStockedOnly={showStockedOnly}
        onStockedOnlyChange={setShowStockedOnly}/>
    <ProductTable products={visibleProducts}/>

    <div>
      <h1>Mon style</h1>
      <hr/>
    </div>
    <Afficher/>
    <img src={img1} alt="" style={imageStyle}/>
    <MyBloc image={img2}></MyBloc>
  </div>


}


function Afficher() {

  return <MyStyle/>
}

function SearchBar({showStockedOnly, onStockedOnlyChange, search, onSearchChange}){
  return <div>
    <div className="mb-3">
      <Input
          type="text"
          value={search}
          onchange={onSearchChange}
          placeholder="Rechercher..."/>
      <CheckBox
          id="stocked"
          checked={showStockedOnly}
          onchange={onStockedOnlyChange}
          label ="N' afficher que les produits en stock" />
    </div>
  </div>
}

function ProductTable({products}){
  const rows = []
  let lastCategory = null

  for (let product of products){
    if (product.category !== lastCategory){
      rows.push(<ProductCategoryRow key={product.category} name={product.category}
      />)
    }
    lastCategory = product.category
    rows.push(<ProductRow product ={product} key={product.name}/>)
  }
  return <table className="table">
    <thead>
    <tr>
      <th>Nom</th>
      <br/><br/>
      <th>Prix</th>
    </tr>
    </thead>
    <tbody><br/><br/>
    <hr/>
    {rows}
    </tbody>
  </table>
}
export default App;