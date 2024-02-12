import Lottie from 'lottie-react'
import Ani from '../an.json'
function Skills() {
    
  return (
      <div className='aboutme'>
          <div className="text-container">
              <h1>About me</h1>
              <p>My passion lies in crafting elegant and efficient solutions that leave a lasting impression. Armed with proficiency in React, Node.js, and AWS, I'm not just building apps; I'm engineering experiences. Whether it's untangling complex code or architecting seamless user interfaces, I'm always at the forefront of innovation.</p>
          </div>
          <div className="animation-container">
              <Lottie className="ani" animationData={Ani} />
          </div>
      </div>
  );
}
export default Skills;