/* eslint-disable react/prop-types */

// import ServiceCard from "./components/ServiceCard"

import  data  from "./data.json";
import ServiceList from "./components/ServiceList";
// import data from "./data.json";
const Services = () => {
  return (
    <div className="container-full-width">
    <h1 className='pageTitle'>Services</h1>
    {/* <ServiceCard icon="./Icons/ic_expertise.svg" title="Expertise" desc="Our team comprises experienced IT professionals with a strong track record in the industry, ensuring your IT needs are handled by experts."/> */}
    {/* <SeviceL data={data}/> */}
    <ServiceList data={data}/>
  </div>
  )
}

export default Services