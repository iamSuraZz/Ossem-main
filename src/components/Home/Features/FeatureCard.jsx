import "./FeatureCard.css";

const FeatureCard = ({ title, para }) => {
  return (
    // <div className="FeatureCard-container">
    //   <div className="ft_crd-img">
    //     <img src={img} alt={title} />
    //   </div>
    //   <div className="ft_crd-cnt">
    //     <h3>{title}</h3>
    //     <p>{para}</p>
    //   </div>
    // </div>
    <>
      <div class="box">
        <span></span>
        <div class="content">
          <h3>{title}</h3>
          <p>{para}</p>
          <a href="#">Know more</a>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
