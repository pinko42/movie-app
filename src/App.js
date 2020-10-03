import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CardMovie from "./components/CardMovie";
import Wish from "./components/Wish";
import MovieDetail from "./components/MovieDetail"
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


var wishList = [];
const apiKey = "apikey=488b3291";

function App() {
  const [data, setData] = useState(null);
  const [wishListData, setWishListData] = useState(wishList)

  const getData = async (value) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?t=${value}&${apiKey}`
    );
    console.log(response.data.Poster);
    setData(response.data);
    console.log(!wishList)
  };

  const addToWishList = (value) => {
    wishList = [...wishList, value];
    setWishListData(wishList);
    console.log(wishList);
  };

  return (
    <Router>
      <div className="App">
        <Navbar getData={getData} />
        <Switch>
        <Route path="/" exact >
          <div className="card-movie">
            <CardMovie data={data} addToWishList={addToWishList} />
          </div>
        </Route>
        <Route path="/wishlist" exact>
          <Wish wishList={wishListData}/>
        </Route>
        <Route path="/wishlist/:title" exact component={MovieDetail}>
          
        </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
