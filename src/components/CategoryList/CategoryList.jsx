import { useState, useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";

const categoryOptions = [
  { text: "Sofá", route: "#sofa", section: "sofa" },
  { text: "Sofá Cama", route: "#sofa-cama", section: "sofa-cama" },
  { text: "Esquineros", route: "#esquineros", section: "esquineros" },
  { text: "Poltronas", route: "#poltronas", section: "poltronas" },
];

const CategoryList = () => {
  const [activeSection, setActiveSection] = useState("");
  const [activeLink, setActiveLink] = useState("sofa");

  const sections = useRef([]);

  const handleScroll = () => {
    const pageYOffset = window.pageYOffset;

    let newActiveSection = null;

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;

      const sectionHeight = section.offsetHeight;

      /* newActiveSection = section.id */

      if (
        pageYOffset >= sectionOffsetTop - 500 &&
        pageYOffset < sectionOffsetTop + sectionHeight
      ) {
        newActiveSection = section.id;

        setActiveSection(newActiveSection);
        setActiveLink(newActiveSection);
      }
    });

    setActiveSection(newActiveSection);
    setActiveLink(newActiveSection);
  };

  useEffect(() => {
    sections.current = document.querySelectorAll("[data-section]");
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  const renderList = () => {
    return categoryOptions.map((option) => {
      return (
        <li
          key={option.section}
          onClick={() => setActiveLink(option.section)}
          className={`lista ${
            activeLink === option.section || activeSection === option.section
              ? "active"
              : ""
          }`}
        >
          <HashLink smooth className="to-btn" to={`${option.route}`}>
            {option.text}{" "}
          </HashLink>
        </li>
      );
    });
  };

  return (
    <div className="category-container">
      <h2>Categorías</h2>

      <ul id="ul">
        {renderList()}
        <li>
          <HashLink smooth className="underlined-btn" to="#">
            Creá tu diseño{" "}
          </HashLink>
        </li>
      </ul>
    </div>
  );
};

export default CategoryList;
