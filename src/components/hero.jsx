
import wall from "../images/herowall.png"

const Hero = ()=>{
  return(
    <section className="container__hero">
        <img className="hero__wall" src={wall} alt="wall"/>
        <div className="hero__box">
            <h1 className="hero__box-line">Not sure where to go?Perfect</h1>
            <button className="hero__button" >I'm flexible</button>
        </div>
    </section>
  )
}


export default Hero