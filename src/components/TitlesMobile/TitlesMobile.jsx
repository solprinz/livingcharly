
const TitlesMobile = ({title, subtitle, image}) => {

    return (
        <div className="container-fluid mobile-image" style={{ 
            backgroundImage: `url(${image})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"
            }}>
            
        </div>
    )
}

export default TitlesMobile