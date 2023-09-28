function Button({children,color}){
   
    return(
        <button className="btn" style={{backgroundColor:color}}>{children}</button>
    )
}

export default Button;