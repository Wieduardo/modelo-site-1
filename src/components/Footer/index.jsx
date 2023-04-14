import { useContext } from "react";
import { GlobalContext } from "../../providers/global";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {

    const { userData } = useContext(GlobalContext);

    return(
        <>
        <footer className="footer-container">
            <h3>Venha nos conhecer!</h3>
            <div className="media-container">
                <ul className="footer-media">
                    <li>
                        <a target="_blank" rel='noreferrer' href={`https://web.whatsapp.com/send?phone=+55${userData.celular}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`} className="icon-whats"><FaWhatsapp/></a>
                    </li>
                    <li>
                        <a target="_blank" rel='noreferrer' href={userData.facebook} className="icon-face"><FaFacebook/></a>
                    </li>
                    <li>
                        <a target="_blank" rel='noreferrer' href={userData.twitter} className="icon-twit"><FaTwitter/></a>
                    </li>
                    <li>
                        <a target="_blank" rel='noreferrer' href={userData.insta} className="icon-insta"><FaInstagram/></a>
                    </li>
                </ul>
                <div className="footer-endereco">
                    <h4>Endereço</h4>
                    <span>{userData.rua} - {userData.bairro} - {userData.cidade}</span>
                </div>
            </div>
        </footer>
        </>
    )   
}

export default Footer;