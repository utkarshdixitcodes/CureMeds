export const SmallComponent =(props) => {
    const v = props.number
    
    return(
        <div className='small-component'>
        <img className={  v%2==0 ? "small-component-image-pink" : "small-component-image-blue"} src = {props.imageAddress}></img>
        <p className="header-text"> {props.headerText} </p>
        <p className="bottom-text">{props.bottomText} </p>
        </div>
    )
}

