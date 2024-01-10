const Resturantcard = (props) => {
  const {
    name,
    avgRatingString,
    costForTwo,
    sla,
    cuisines,
    cloudinaryImageId,
  } = props.resName.info;

  return (
    <div className="res-card" style={{ backgroundColor: "pink" }}>
      <img
        alt="res-logo"
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime}Minuites</h4>
    </div>
  );
};
export default Resturantcard;
