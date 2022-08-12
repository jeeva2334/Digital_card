import Twitter from './images/1.png'
import Insta from './images/Instagram.png'
import Linkedin from './images/Linkedinn.png'
import Github from './images/GitHub.png'
import Facebook from './images/Facebook.png'

const Footer = () => {
    return ( 
        <div className="footer">
            <div className='flex'> 
                <img src={Twitter} />
                <img src={Insta} />
                <img src={Linkedin} />
                <img src={Github} />
                <img src={Facebook} />
            </div>
        </div>
     );
}
 
export default Footer;