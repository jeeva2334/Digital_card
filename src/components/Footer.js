import Twitter from './images/1.png'
import Insta from './images/Instagram.png'
import Linkedin from './images/Linkedinn.png'
import Github from './images/GitHub.png'
import Facebook from './images/Facebook.png'

const Footer = () => {
    return ( 
        <div className="footer">
            <div className='flex'> 
                <img src={Twitter} alt="socialMedia" />
                <img src={Insta} alt="socialMedia" />
                <img src={Linkedin} alt="socialMedia" />
                <img src={Github} alt="socialMedia" />
                <img src={Facebook} alt="socialMedia" />
            </div>
        </div>
     );
}
 
export default Footer;