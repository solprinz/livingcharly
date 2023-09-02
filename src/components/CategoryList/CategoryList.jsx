import React from "react";
import { useState } from "react"
import { Link } from "react-router-dom"

const categoryOptions = [
  { text: "Sofá", route: "#sofa" },
  { text: "Sofá Cama", route: "#sofa-cama" },
  { text: "Esquineros", route: "#esquineros" },
  { text: "Poltronas", route: "#poltronas" }
]; 

const CategoryList = () => {

  const [activeLink, setActiveLink] = useState(null);

  const renderList = () => {
    return categoryOptions.map((option, route) => {
      return (
        <li
          key={route}
          onClick={() => setActiveLink(option.route)}
          id={option.route}
          className={`active, hover:color-primary ${
            (activeLink === option.route || option.route === "sofa") ? "active" : ""
          }`}
        >
          <Link className="to-btn" to={`${option.route}`}>{option.text} </Link>
        </li>
      )
    })
  }

  return (
   
            <div className='category-container'>
                <h2>Categorías</h2>
 
                    <ul id="ul"> 
                    {
                        renderList()
                    }
                    </ul> 
            </div>

    
)
}

export default CategoryList