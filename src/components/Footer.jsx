import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = ({title}) => {

    return (
            <nav>
            <h3>{title}</h3>
            <div class="logo">
            <a href="https://www.facebook.com/saksit.jittasopee.1" target="_blank"><FaFacebook size={20}/></a>
            <a href="https://www.instagram.com/saksitjittasopee/" class="link" target="_blank"><FaInstagram size={20}/></a>
            <a href="https://github.com/Saksit-Jittasopee" class="link" target="_blank"><FaGithub size={20}/></a>
            </div>
            </nav>
        )
}

export default Footer;