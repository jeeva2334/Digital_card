import email from './images/email.png'
import Linkedin from './images/Linkedin.png'

const Info = () =>{
    return(
        <div className='info'>            
            <h1 className='name' >Jeeva Padmanaban</h1>
            <h3 className='sub' >React Trainee</h3>
            <p className='port' >jeevaportfolio.netlify.app</p>
            <div className='btn'>
                <button className='email-btn'>
                    <img src={email} className="logo" alt="socialMedia"/>
                    Email</button>
                <button className='linkedin-btn'>
                    <img src={Linkedin} className="logo1"  alt="socialMedia" />
                    Linkedin</button>
            </div>
        </div>
    )
}

export default Info