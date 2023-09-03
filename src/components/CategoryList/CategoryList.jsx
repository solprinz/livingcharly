import React from "react";
import { useState , useEffect, useRef} from "react"
import { HashLink } from 'react-router-hash-link'

const categoryOptions = [
  { text: "Sofá", route: "#sofa", section:  "sofa" },
  { text: "Sofá Cama", route: "#sofa-cama", section: "sofa-cama" },
  { text: "Esquineros", route: "#esquineros", section:  "esquineros" },
  { text: "Poltronas", route: "#poltronas", section: "poltronas" }
]; 

const CategoryList = () => {

  const [activeSection, setActiveSection] = useState('sofa');
  
  const sections = useRef([]);
  console.log('activeSection ' + activeSection)
 
  const handleScroll = () => {
    const pageYOffset = window.pageYOffset
    console.log('pageYOffset '+ pageYOffset)
    let newActiveSection = null

    sections.current.forEach((section) => {

      const sectionOffsetTop = section.offsetTop
      console.log('sectionOffsetTop '+ sectionOffsetTop)
      const sectionHeight = section.offsetHeight
      console.log('sectionHeight '+ sectionHeight)
      /* newActiveSection = section.id */
      console.log('newActiveSection '+ newActiveSection)

      if (pageYOffset >= sectionOffsetTop && pageYOffset 
      <sectionOffsetTop + sectionHeight) {
         newActiveSection = section.id
        console.log('newActiveSection ' + newActiveSection)
        setActiveSection(newActiveSection)
      }
    })

    setActiveSection(newActiveSection)

  }

  useEffect(() => {
    sections.current = document.querySelectorAll('[data-section]')
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const [activeLink, setActiveLink] = useState('sofa')

  const renderList = () => {
    return categoryOptions.map((option) => {
      return (
        
        <li
          key={option.section}
          onClick={() => setActiveLink(option.section)}
          className={`lista ${ 
            ( activeLink === option.section || activeSection === option.section) ? "active" : ""
          }`}
        >
           
          <HashLink smooth className="to-btn" to={`${option.route}`}>{option.text} </HashLink>
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
                      <li>
                      <HashLink smooth className="underlined-btn" to="#">Creá tu diseño </HashLink>
                      </li>
                    </ul> 
            </div>

    
)
}

export default CategoryList