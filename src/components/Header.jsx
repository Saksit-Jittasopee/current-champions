import "./Header.css";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { SiWwe } from "react-icons/si";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import AEW from "../assets/AEW/AEW.ico";
import NXT from "../assets/NXT/NXT.ico";
import TNA from "../assets/TNA/TNA.ico";
import NJPW from "../assets/NJPW/NJPW.ico";

//**Arrow Function**
const Header = ({theme,setTheme}) => {
    // const {title,theme,setTheme} = props
    function toggleTheme(){
        if(theme=="light"){
            setTheme("dark")
        } else{
            setTheme("light")
        }

    }

    return (
        <nav>
        <span ><Link to="/"><FaHome size={30}/></Link></span>
            <div class="logo">
                <Link to="/wwe"><button><SiWwe size={30}/></button></Link>
                <Link to="/nxt"><button><img src={NXT} alt="nxt" class="nxt"/></button></Link>
                <Link to="/aew"><button><img src={AEW} alt="aew" class="aew"/></button></Link>
                <Link to="/tna"><button><img src={TNA} alt="tna" class="tna"/></button></Link>
                <Link to="/njpw"><button><img src={NJPW} alt="njpw" class="njpw"/></button></Link>
            </div>    
        <span onClick={toggleTheme}>
                {theme === "light" ? <IoSunny size={20}/> : <FaMoon size={20}/>}
        </span>
        </nav>
    )
}
export default Header;