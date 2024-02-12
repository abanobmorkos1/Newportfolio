import Resume from '../resumefol/NewResume.pdf'
function navBar(){
    return (
            <nav className="nav">
                <ul className="ul_nav">
                    <li className='project'><a href="#projectcontainer">Projects</a></li>
                    <li className='skillsnav'><a href={Resume} target="_blank" rel="noreferrer">Resume</a></li>
                    <li className='contacts'><a href="#footer">Contact</a></li>
                </ul>
            </nav>
        );
    }

export default navBar;