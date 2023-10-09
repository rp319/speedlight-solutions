
import { useParams } from 'react-router-dom';
import data from '../data.json'
import Header from './Header';
import Footer from './Footer';
const DonationDetails = () => {
  const { id } = useParams();
  let Id=+id;
  const details = data.find((item) => item.id == parseInt(Id));
  console.log(details);
  // Fetch donation details based on the 'id' parameter

  if (!details) {
    return <div>Donation not found.</div>;
  }
  return (
    <div className="container-full-width">
    <h1 className='pageTitle'>Services</h1>
    {/* <Header/> */}
    <div className="donation-details feat bg-gray pt-5 pb-5">
      <img src={details.icon} alt="" />
      <h2>Service Detaills Id: {id}</h2>
    </div>
    {/* <Footer/> */}
    </div>
  );
};

export default DonationDetails;
