/* eslint-disable react/prop-types */

const HomeCard = ({icon,title,desc}) => {
  return (
    <div className="col-lg-4 col-sm-6">
    <div className="item"><div className='circle'><img id='icon' src={icon}></img></div>
        <h6>{title}</h6>
        <p>{desc}</p>
    </div>
</div>
  )
}

export default HomeCard