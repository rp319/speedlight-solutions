import './components/css/About_Us.css'



 const About = () => {
  return (
    <div className="container-full-width">
      <h1 className='pageTitle'>About Us</h1>
      <div className="text-center">
        <div className="aboutUsContainer" style={{ padding: '5% 10% 10% 10%' }}>
          <div className="aboutUs"><img src="./SVGs/About_Us.svg" className='supportVector' /></div>
          <div className="aboutUs">
            <h6>About Company</h6>
            <h2>
              Accelerating your business through innovative motion IT Solutions problems.
            </h2>
            <p className="aboutUsDesc">
              At <span>Speedlight Solutions</span>, we are passionate about simplifying the world of technology. As a trusted IT support and solutions provider based in Canada, we strive to empower businesses and individuals with cutting-edge technology services that drive success.
            </p>
            <button>
              Explore More
            </button>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="aboutUsContainer aboutUsContainer2" style={{ padding: '5% 10% 10% 5%' }}>
          <div className="aboutUs">
            <h6 style={{ color: "red" }}>Our Vision</h6>
            <div className="ourVisionLines">
              <h4>Empowering Digital Success</h4>
              <p>Simplify the complexity, making technology accessible and user-friendly for everyone.</p>
            </div>
            <div className="ourVisionLines">
              <h4>Empowering Businesses</h4>
              <p>We aspire to equip enterprises with the tools and solutions they need to thrive in a digital-first world.</p>
            </div>
            <div className="ourVisionLines">
              <h4>Enriching Lives</h4>
              <p>We believe that technology should enhance your everyday experiences, from seamless home/business WiFi connections to secure digital communication.</p>
            </div>
            <div className="ourVisionLines">
              <h4>Excellence in Everything</h4>
              <p> We continually strive to be at the forefront of technological advancements, providing innovative solutions and top-tier support. </p>
            </div>
          </div>
          <div className="aboutUs">
            <img src="./SVGs/vision.svg" className='visionVector' />
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="aboutUsContainer" style={{ padding: '5% 10% 10% 10%' }}>
          <div className="aboutUs"><img src="/SVGs/mission.svg" className='supportVector' /></div>
          <div className="aboutUs">
            <h6 style={{ color: "red" }}>Our Mission</h6>
            <div className="ourMission">
              <h4>Simplifying Technology</h4>
              <p>We break down complex IT solutions into manageable steps, ensuring that technology works for you, not against you.</p>
            </div>
            <div className="ourMission">
              <h4>Enabling Business Success</h4>
              {/* // eslint-disable-next-line react/no-unescaped-entities */}
              <p>We provide the tools and expertise needed to optimize your operations, boost productivity, and stay competitive in today's digital marketplace.</p>
            </div>
            <div className="ourMission">
              <h4>Enhancing Digital Experiences</h4>
              <p>enhance your digital experiences. We believe that technology should be a source of convenience and enjoyment in your daily life. From seamless home WiFi to secure online interactions.</p>
            </div>
            <div className="ourMission">
              <h4>Excellence in Everything</h4>
              <p> We continually strive to be at the forefront of technological advancements, providing innovative solutions and top-tier support. </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="row">
          <div className="col">
            <h6 style={{ color: "red" }}>Our Vision</h6>
            <div className="ourVisionLines">
              <h4>Empowering Digital Success</h4>
              <p>Simplify the complexity, making technology accessible and user-friendly for everyone.</p>
            </div>
            <div className="ourVisionLines">
              <h4>Empowering Businesses</h4>
              <p>We aspire to equip enterprises with the tools and solutions they need to thrive in a digital-first world.</p>
            </div>
            <div className="ourVisionLines">
              <h4>Enriching Lives</h4>
              <p>We believe that technology should enhance your everyday experiences, from seamless home/business WiFi connections to secure digital communication.</p>
            </div>
            <div className="ourVisionLines">
              <h4>Excellence in Everything</h4>
              <p> We continually strive to be at the forefront of technological advancements, providing innovative solutions and top-tier support. </p>
            </div>
            <div className="ourVisionLines">
              <h4>Join Us on the Journey</h4>
              <p>We invite you to join us on this exciting journey towards a digitally empowered future. Whether you're a business aiming for success or an individual seeking a better digital experience, Speedlight Solutions Pvt. Ltd. is here to make our vision a reality for you.</p>
            </div>
          </div>
          <div className="col">
            <img src={vision} className='visionVector' />
          </div>
        </div>
      </div> */}

    </div>
  )
}

export default About;