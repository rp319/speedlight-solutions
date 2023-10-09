/* eslint-disable react/prop-types */
import   '../components/css/Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import ServiceCard from "./ServiceCard";
const ServiceList = ({ data }) => {
  return (
    <div className='container-fluid homeSections whyUs'>
    <div className="feat bg-gray pt-5 pb-5">
        <div className="container">
            <div className="row">
                <div className="section-head col-sm-12">
                    <h4>Services</h4>
                </div>
      {data.map((item) => (
        <ServiceCard key={item.id} {...item} />
      ))}
            </div>
        </div>
    </div>
</div>

  );
};

export default ServiceList;
