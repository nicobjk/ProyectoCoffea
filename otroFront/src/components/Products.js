import { useEffect, useState } from 'react';
import "../assets/css/styles.css"
import {FaMugHot} from "react-icons/fa"

function Products() {
    const [productsInDb, setProductsInDb]= useState([])

    const [lastProductsInDb, setLastProductsInDb]= useState({})
  useEffect(()=>{
    fetch("http://localhost:3000/api/products/")
    .then(productos=>productos.json())
    .then(({products})=>{
      setProductsInDb(products)
      setLastProductsInDb(products[products.length-1])
    })
  },[])

  return(
    <>
    
    <div className='productsContainer'> 

    <div className="productosDb">
        <h2>Cantidad total de productos </h2>
        <h2><FaMugHot/></h2>
        <div>
        <h4 className='productsH4'>{productsInDb.length}</h4>
        </div>
        
    </div>

    <br/> 
    <br/> 
    <br/> 

    <div className="productosDb">
        <h2>Listado de productos </h2>
        <div className='productsDiv'> 
        <ul> 
            {
                productsInDb.map((p, i)=>{
                    return (
                        
                        <li key={i}>{p.name}</li>

                        
                    )
                })
            }
        </ul>
        </div>

    </div>

    <div className="productosDb">
        <div>
          <h2>Último producto creado:</h2>
          <h2><FaMugHot/></h2>
          </div>
        <div className='lastProduct'>
        <h4> Id: {lastProductsInDb.id}</h4>
        <h4> Producto: {lastProductsInDb.name}</h4>
        <h4> Descripción: {lastProductsInDb.description}</h4>
        <h4> Origen: {lastProductsInDb.origin}</h4> 
        </div>
    </div>

    </div>

    <hr className='hr1'></hr>
        
    </>
  )
}

export default Products