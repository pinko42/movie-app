import React from "react";
import CardMovie from "./CardMovie";
import { Link, useRouteMatch } from "react-router-dom";

const Wish = (props) => {
  let match = useRouteMatch("/wishlist/:title");
  
  
  return (
    <div className="card-movie">
      {props.wishList[0] ? (
        props.wishList.map((el) => {
          return (
            <Link to={{ 
              pathname: `/wishlist/${el.Title}`, 
              param1: el
            }}>
              
              <CardMovie data={el} />
            </Link>
          );
        })
      ) : (
        <>no wishlist to show ... please add some movies </>
      )}
    </div>
  );
};

export default Wish;
