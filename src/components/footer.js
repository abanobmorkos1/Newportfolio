import Lottie from "lottie-react";
import Contacts from '../contacts.json'

function Footer () {
    return <div className="footer">
        <div className="contactani">
        <Lottie
        animationData={Contacts}
        />        
        </div>

        <div className='contactinfo'>
        <h1>Let's connect</h1>
        <p>AbanobMorkos11@gmail.com</p>
        <p><a href=''>GitHub</a></p>
        <p>LinkedIn</p>
        </div>
        </div>
}

export default Footer;