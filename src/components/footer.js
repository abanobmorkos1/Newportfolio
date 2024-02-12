import Lottie from "lottie-react";
import Contacts from '../contacts.json'

function Footer () {
    return <div id="footer">
        <div className="contactani">
        <Lottie
        animationData={Contacts}
        />        
        </div>

        <div id='contactinfo'>
        <h1>Let's connect</h1>
        <p>AbanobMorkos11@gmail.com</p>
        <p><a href='https://github.com/abanobmorkos1'>GitHub</a></p>
        <p><a href='https://linkedin.com/in/abanob-morkos'>LinkedIn</a></p>
        </div>
        </div>
}

export default Footer;