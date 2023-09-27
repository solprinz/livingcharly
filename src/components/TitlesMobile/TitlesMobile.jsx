
const TitlesMobile = ({title, subtitle, image}) => {

    return (
        /*<div className="container-fluid mobile-image"  style={{ 
            backgroundImage: `url(${image})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"
            }}  >*/
                <div className="title__container">
                <h5 className="subtitle">{subtitle}</h5>
                <h2 className="title">{title}</h2>
            
        </div>
    )
}

export default TitlesMobile