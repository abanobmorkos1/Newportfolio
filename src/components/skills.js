function Skills() {
  return (
    <> 
    <h1 style={{display:"flex" , justifyContent:"center"}}>Skills</h1>
    <div className="skillscontainer">
      <div className="skillsholder">
      <h1 style={{textAlign:"center"}}>hello</h1>
        <img className="skillpic" src={process.env.PUBLIC_URL + '/html.png'} alt="slide 1" />
        <img className="skillpic" src={process.env.PUBLIC_URL + '/javascript.png'} alt="slide 2" />
        <img className="skillpic" src={process.env.PUBLIC_URL + '/python.png'} alt="slide 4" />
      </div>

      <div className="skillsholder">
      <h1 style={{textAlign:"center"}}>hello</h1>
        <img className="skillpic" src={process.env.PUBLIC_URL + '/python.png'} alt="slide 4" />
        <img className="skillpic" src={process.env.PUBLIC_URL + '/html.png'} alt="slide 1" />
        <img className="skillpic" src={process.env.PUBLIC_URL + '/javascript.png'} alt="slide 2" />
      </div>
      <div className="skillsholder">
      <h1 style={{textAlign:"center"}}>hello</h1>
      <img className="skillpic" src={process.env.PUBLIC_URL + '/html.png'} alt="slide 1" />
        <img className="skillpic" src={process.env.PUBLIC_URL + '/javascript.png'} alt="slide 2" />
        <img className="skillpic" src={process.env.PUBLIC_URL + '/python.png'} alt="slide 4" />
      </div>
    </div>
    </>
  );
  
}
export default Skills;




{/* <img className="skillpic" src={process.env.PUBLIC_URL + '/html.png'} alt="slide 1" />
<img className="skillpic" src={process.env.PUBLIC_URL + '/javascript.png'} alt="slide 2" />
<img className="skillpic" src={process.env.PUBLIC_URL + '/python.png'} alt="slide 4" />
<img className="skillpic" src={process.env.PUBLIC_URL + '/react.png'} alt="slide 3"  />
<img className="skillpic" src={process.env.PUBLIC_URL + '/react.png'} alt="slide 3"  /> */}