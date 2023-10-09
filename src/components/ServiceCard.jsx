/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
const ServiceCard = ({id,icon,title,description}) => {
  return (
    <Link className='col-lg-4 col-sm-6' to={`/services/${id}`}>
        {/* <div className="item"> */}
    <div className="item"><div className='circle'><img id='icon' src={icon}></img></div>
        <h6>{title}</h6>
        <p>{description}</p>
    {/* </div> */}
</div>
    </Link>
  );
};

export default  ServiceCard;
