import "./about.css";
import { CheckCircle } from "@material-ui/icons";
import { CheckCircleOutline } from "@material-ui/icons";
import { CheckCircleOutlineRounded } from "@material-ui/icons";
const About = () => {
  return (
    <>
      <div className="about-page">
        <img src="/about1.jpg" alt="" />
        <h1>Creating happiness with every touch ...</h1>
      </div>
      <div className="about-para">
        <h1>Our Story</h1>
        <p>
          At Magik we belive that every moment, big or small, deserves to be
          celebrated. Our journey began with a simple yet profound ideas, to
          create a place where Joy, Thoughtfulness and Creativity meet,
          resulting in unforgetable expirience{" "}
        </p>
        
      </div>

      <div className="why-trust">
        <h1>WHY CHOOSE US</h1>
      <div className="check">
        <span>
        <CheckCircleOutlineRounded className="good" />
        <h4>Quality Asurance</h4>
        <p>We take pride in the quality of our products
            and makes sure that all Items meets our rigorous standard 
        </p>
        </span>
        <span>
        <CheckCircleOutlineRounded className="good" />
        <h4>Constomer-Centric Approach</h4>
        <p> Your satisfaction is our top piority we are here to 
            assist you to finding perfect suprise for your love. 
        </p>
        </span>
        <span>
        <CheckCircleOutlineRounded className="good" />
        <h4>Innovation</h4>
        <p>Were constantly on the lookoutfor new and exciting
             gift ideas to keep your gifting experience fresh
        </p>
        </span>
        <span>
        <CheckCircleOutlineRounded className="good" />
        <h4>Personnalization</h4>
        <p>Many of our offerings can be prsonalised to add that extra touch of sentiment and uniqueness.
        </p>
        </span>
      </div>

      <div className="ourteam">
        <h2>Meet Our Team</h2>
        <p>Our team is conposed of profesionals from verious background, 
            each bringing their unique skill and expertise to the table
        </p>
        <div className="team-container">
            <div className="team-content">
                <img src="/m1.jpg" alt="" />
                <div className="details">
                <h4>Solomon</h4>
                <p>CEO/Founder</p>
                </div>
            </div>
            <div className="team-content">
                <img src="/m2.jpg" alt="" />
                <div className="details">
                <h4>Solomon</h4>
                <p>CEO/Founder</p>
                </div>
            </div>
            <div className="team-content">
                <img src="/m3.jpg" alt="" />
                <div className="details">
                <h4>Solomon</h4>
                <p>CEO/Founder</p>
                </div>
            </div>
            
        </div>

        <div className="team-container">
            <div className="team-content">
                <img src="/m4.jpg" alt="" />
                <div className="details">
                <h4>Solomon</h4>
                <p>CEO/Founder</p>
                </div>
            </div>
            <div className="team-content">
                <img src="/m4.jpg" alt="" />
                <div className="details">
                <h4>Solomon</h4>
                <p>CEO/Founder</p>
                </div>
            </div>
            <div className="team-content">
                <img src="/m5.jpg" alt="" />
                <div className="details">
                <h4>Solomon</h4>
                <p>CEO/Founder</p>
                </div>
            </div>
            
        </div>

                <div className="team-container">
            <div className="team-content">
                <img src="/m6.jpg" alt="" />
                <div className="details">
                <h4>Solomon</h4>
                <p>CEO/Founder</p>
                </div>
            </div>
            <div className="team-content">
                <img src="/m7.jpg" alt="" />
                <div className="details">
                <h4>Solomon</h4>
                <p>CEO/Founder</p>
                </div>
            </div>
            <div className="team-content">
                <img src="/m8.jpg" alt="" />
                <div className="details">
                <h4>Solomon</h4>
                <p>CEO/Founder</p>
                </div>
            </div>
            
        </div>
      </div>
      </div>
    </>
  );
};

export default About;
