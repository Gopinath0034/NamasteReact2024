import { useState, useEffect } from "react";
import Resturantcard from "./Component/RestroCard";
import Shimmer from "../src/Component/Shimmer";

const Body = () => {
  const [resturantlist, setResturantList] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [searchtext, setSearchtext] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const resturantList = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2960587&lng=85.8245398&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const JsonData = await resturantList.json();
    setResturantList(
      JsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredResturant(
      JsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (resturantlist?.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            value={searchtext}
            onChange={(e) => setSearchtext(e?.target?.value)}
          ></input>
          <button
            onClick={() => {
              const searchedList = filteredResturant.filter((resItem) =>
                resItem?.info?.name
                  .toLowerCase()
                  .includes(searchtext.toLowerCase())
              );
              setResturantList(searchedList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          type="text"
          onClick={() => {
            const filteredList = resturantlist.filter(
              (item) => item.info.avgRating > 4.4
            );

            setResturantList(filteredList);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="restro-container">
        {resturantlist?.map((resItem) => (
          <Resturantcard key={resItem.info.id} resName={resItem} />
        ))}
      </div>
    </div>
  );
};
export default Body;
