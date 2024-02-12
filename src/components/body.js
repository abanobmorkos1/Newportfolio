import { useState, useEffect } from "react";


    function Body (){
        const words = ['Full Stack Developer', 'Software Developer', 'Backend Developer' , 'Frontend Developer'];
        const [wordIndex, setWordIndex] = useState(0);
        const [text, setText] = useState('');
        const [isDeleting, setIsDeleting] = useState(false);
        function type() {
            // Current word
            const currentWord = words[wordIndex];
            // Determine the function to be performed
            const shouldDelete = isDeleting ? 1 : -1;
            // Create the new text
            setText(current => currentWord.substring(0, current.length - shouldDelete));
            // Determine if this word is complete
            if (!isDeleting && text === currentWord) {
              // Make a pause at the end
              setTimeout(() => setIsDeleting(true), 700);
            } else if (isDeleting && text === '') {
              setIsDeleting(false);
              // Move to the next word
              setWordIndex((current) => (current + 1) % words.length);
            }
          }
          useEffect(() => {
            const timer = setTimeout(type, isDeleting ? 20 : 50);
            // Cleanup function to clear the timeout
            return () => clearTimeout(timer);
          // Add dependencies to the dependency array
          }, [wordIndex, isDeleting, text]);
        
        return <> 
        <div className="intro">
        <h2 className='HW'>Hello World, I'm Abe!</h2> 
        <h3>{text}</h3>
        <img className="imgme" src="https://media.licdn.com/dms/image/D4E03AQEhNGnTmIHRfg/profile-displayphoto-shrink_800_800/0/1696491861573?e=1708560000&v=beta&t=s8v5xTRsSD6KWtOSdtpp07nbOZS1vxgwdGMtPM65qLI"/>
        </div> 
</>
}

export default Body;
