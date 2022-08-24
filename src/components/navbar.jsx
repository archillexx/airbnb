import logo from "../images/airbnb.png"
import search from "../images/search.png"
import world from "../images/globe.png"
import menu from "../images/menu.png"
import user from "../images/user.png"
import "../css/styles.css"


const Navbar = ()=>{
    return(
        <nav className="navbar">
            <img className="logo" src={logo} alt="error"/>
            <div className="search">
                <form action="#">
                    <input className="search__input" type="text"
                       placeholder=" Search Courses"
                      name="search"/>
                </form>
                 <span>
                    <img className="search__btn" src={search} alt="search"/>
                </span>
            </div>
            <div className="menu">
                <span className="menu__line">Become a Host</span>
                <img className="world__icon" src={world} alt="world"/>
                <span className="user_box">
                    <img className="menu__icon" src={menu} alt="menu"/>
                    <img src={user} className="user__icon" alt="user"/>
                </span>
            </div>
        </nav>
    )
}

export default Navbar