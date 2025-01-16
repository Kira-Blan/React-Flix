import '../Header/Header.css'


function Header(){
    return ( 
    <header className="header">    
    <img src="/logo.ico" className="logo" alt="logo"/> 
    <div className="botones">
        <button className="home">Home</button>
        <button className="nuevo-video">Nuevo video</button>
    </div>   
    </header> 
    )              
}

export default Header