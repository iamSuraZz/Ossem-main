import "./Box.css";

const Box = ({ title1, title2, number, icon }) => {
  return (
    <div className="box">
      <h4 className="box-title">{title1}</h4>
      <div className="box-sec-section">
        <div>
          <h4>{title2}</h4>
          <span>{number}</span>
        </div>
        <img src={icon} alt="" />
      </div>
    </div>
  );
};

export default Box;
