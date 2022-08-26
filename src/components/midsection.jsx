import city1 from "../images/city1.png"
import city2 from "../images/city2.png"
import city3 from "../images/city3.png"
import city4 from "../images/city4.png"
import city5 from "../images/city5.png"
import city6 from "../images/city6.png"
import city7 from "../images/city7.png"
import city8 from "../images/city8.png"


const MidSection = ()=>{
    return(
        <section className="mid__container">
            <div className="explore__container">
                <h1 className="explore__line">Explore nearby</h1>
                <div className="explore__content-box">
                    <div className="explore__content">
                        <img className="city__image" src={city1} alt="city"/>
                        <div className="content__info">
                            <h4>Los Angeles</h4>
                            <h6>15 mins drive.</h6>
                        </div>
                    </div>
                    <div className="explore__content">
                    <img className="city__image" src={city2} alt="city"/>
                        <div className="content__info">
                            <h4>Los Angeles</h4>
                            <h6>15 mins drive.</h6>
                        </div>
                    </div>
                    <div className="explore__content">
                    <img className="city__image" src={city3} alt="city"/>
                        <div className="content__info">
                            <h4>Los Angeles</h4>
                            <h6>15 mins drive.</h6>
                        </div>
                    </div>
                    <div className="explore__content">
                    <img className="city__image" src={city4} alt="city"/>
                        <div className="content__info">
                            <h4>Los Angeles</h4>
                            <h6>15 mins drive.</h6>
                        </div>
                    </div>
                    <div className="explore__content">
                    <img className="city__image" src={city5} alt="city"/>
                        <div className="content__info">
                            <h4>Los Angeles</h4>
                            <h6>15 mins drive.</h6>
                        </div>
                    </div>
                    <div className="explore__content">
                    <img className="city__image" src={city6} alt="city"/>
                        <div className="content__info">
                            <h4>Los Angeles</h4>
                            <h6>15 mins drive.</h6>
                        </div>
                    </div>
                    <div className="explore__content">
                    <img className="city__image" src={city7} alt="city"/>
                        <div className="content__info">
                            <h4>Los Angeles</h4>
                            <h6>15 mins drive.</h6>
                        </div>
                    </div>
                    <div className="explore__content">
                    <img className="city__image" src={city8} alt="city"/>
                        <div className="content__info">
                            <h4>Los Angeles</h4>
                            <h6>15 mins drive.</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hosting__container">
                <div className="heading__container">
                    <h1>Be a Host to Afghan refugees.</h1>
                </div>
                <div className="details__container">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo aliquam vitae mi eget risus. A sagittis vitae dignissim lorem vestibulum vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo aliquam vitae mi eget risus. A sagittis vitae dignissim lorem vestibulum vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo aliquam vitae mi eget risus. A sagittis vitae dignissim lorem vestibulum vel.</p>
                    <button>Learn more at Airbnb.org</button>
                </div>
            </div>
        </section>
    )
}


export default MidSection