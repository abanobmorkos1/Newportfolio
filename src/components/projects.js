function Projects() {
  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" , marginTop:"200px"}}>Projects</h1>
      <div id="projectcontainer">
      <div className="pro1">
        <p style={{display:"flex" , textAlign:"right" , color:"red" , width:"150px", margin:"0px" }}>Coming Soon</p>
        <a href='https://github.com/abanobmorkos1/wanderLustBE/'> <h1 style={{ display: "flex", justifyContent: "center" }}>WanderLust</h1></a>
        <h3>Wanderlust is a web application designed to help users capture and share their travel experiences.</h3>
          <p style={{ display: "flex", justifyContent: "center" }}>Technologies being Used</p>
          <div className="span">
            <span>javaScript</span>
            <span>Express</span>
            <span>React</span>
            <span>Node.js</span>
            <span>MUI</span>
            <span>MongoDB</span>
            <span>Vercel</span>
          </div>
        </div>
        <div className="pro1">
        <a href='https://talk-space-9ck53jrn1-abanobmorkos1.vercel.app/'> <h1 style={{ display: "flex", justifyContent: "center" }}>TalkSpace</h1></a>
        <h3>TalkSpace, a discussion app where users can post and engage in meaningful discussions.</h3>
          <p style={{ display: "flex", justifyContent: "center" }}>Technologies Used</p>
          <div className="span">
            <span>TypeScript</span>
            <span>Express</span>
            <span>Prisma</span>
            <span>React</span>
            <span>Node.js</span>
            <span>BootStrap</span>
            <span>MongoDB</span>
            <span>Vercel</span>
          </div>
        </div>
        <div className="pro2">
         
        <a href='https://safehive-fe.vercel.app/'><h1 style={{ display: "flex", justifyContent: "center" }}>SafeHive</h1></a>
          <h3>SafeHive is a web-based platform designed to empower communities to enhance safety and to report incidents</h3>
          <p style={{ display: "flex", justifyContent: "center" }}>Technologies Used</p>
          <div className="span">
            <span>JavaScript</span>
            <span>Python</span>
            <span>Django</span>
            <span>Node.js</span>
            <span>React</span>
            <span>CSS</span>
            <span>postgreSQL</span>
            <span>Vercel</span>
          </div>
        </div>
        <div className="pro3">
         <a href="https://project2-5847.onrender.com/"><h1 style={{ display: "flex", justifyContent: "center" }}>Car Social</h1></a>
          <h3>Car Social is a web application that looks to connect car enthusiasts and share their passion with one another</h3>
          <p style={{ display: "flex", justifyContent: "center", margin: "0 0 20px 0" }}>Technologies Used</p>
          <div className="span">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Node.js</span>
            <span>EJS</span>
            <span>MongoDB</span>
            <span>CSS</span>
            <span>Render</span>
            <span>Figma</span>
          </div>
        </div>
        <div className="pro4">
          <a href="https://abanobmorkos1-github-io.vercel.app/"><h1 style={{ display: "flex", justifyContent: "center" }}>Rick and Morty Portal</h1></a>
          <h3>An app that helps Rick and Morty fans find out more about the characters</h3>
          <p style={{ display: "flex", justifyContent: "center" }}>Technologies Used</p>
          <div className="span">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>API</span>
            <span>jQuery</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
