
const Titles = ({title, subtitle}) => {

    return (
        <div>         
            <div className="title__container">
                <h5 className="subtitle">{subtitle}</h5>
                <h2 className="title">{title}</h2>
            </div>
        </div>
    )
}

export default Titles