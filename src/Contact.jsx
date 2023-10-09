import './components/css/About_Us.css'
 const Contact = () => {

  const linkToOpen = 'https://speedlightsolutions.ca/';

  function initiateCall() {
    const phoneNumber = '+17055622329'; // Replace with the phone number you want to call
    const telURI = `tel:${phoneNumber}`;
    window.location.href = telURI;
  }

  function initiateEmail() {
    const emailAddress = 'enquiry@speedlightsolutions.ca'; 
    const subject = 'Enquiry'; 
    const body = 'Hello, I wanted to get in touch with you.';
    const mailtoURI = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoURI;
  }

  function openLinkInNewTab(link) {
    const newTab = window.open(link, '_blank');
    newTab.focus();
  }

  return (
    <div className="container-full-width">
      <h1 className='pageTitle'>Contact Us</h1>
      <div className="text-center">
        <div className="contactUsContainer" style={{ padding: '5% 10% 10% 10%' }}>
          <div className="contactUs">
            <div className="contactDetails">
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="item"><div className='circle'><img id='icon' src="./Icons/ic_location.svg"></img></div>
                    <h6>Address</h6>
                    <p>55 Hedge End Road Toronto Canada- M1B5Z4</p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6" onClick={initiateCall}>
                  <div className="item"><div className='circle'><img id='icon' src="./Icons/ic_phone.svg"></img> </div>
                    <h6>Phone</h6>
                    <p>+1 (705) 562-2329</p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6" onClick={initiateEmail}>
                  <div className="item"><div className='circle'><img id='icon' src="./Icons/ic_location.svg"></img> </div>
                    <h6>Email</h6>
                    <p>enquiry@speedlightsolutions.ca</p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6"       onClick={() => openLinkInNewTab(linkToOpen)}>
                  <div className="item"><div className='circle'><img id='icon' src="./Icons/ic_website.svg"></img> </div>
                    <h6>Website</h6>
                    <p>www.speedlightsolutions.ca</p>
                  </div>
                </div>
              </div>

              <div className='container-fluid contactUsSection'>
                <div className="feat bg-gray pt-5 pb-5">
                  <div className="container text-center">
                    <div className="row">
                      <div className="contactUsContainer">
                        <div className="contactUsItem"><img src="./SVGs/contact_us.svg" className='contactUsVector' /></div>
                        <div className="contactUsItem">
                          <form action="" className="contactUsForm">
                            <h1>Connect With Us</h1>
                            <input type="text" name="" className='inputUserName' placeholder='Full Name' required />
                            <input type="email" name="" className='inputEmailAddress' placeholder='Email Address' required />
                            <textarea id="subject" name="subject" placeholder="Message" ></textarea>
                            <button type="submit">Submit</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact;