import React from "react";
import axios from "axios";

//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//pages
 import HomePage from "./Pages/Home.page";
 import MoviePage from "./Pages/Movie.page";
 import Plays from "./Pages/Plays.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//axios default settings

 axios.defaults.baseURL="https://api.themoviedb.org/3"
 axios.defaults.params={};
 axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY;

// function HomePage() {
//   return <h1>homePage</h1>;
// }

function App() {
  return (<>
     <DefaultHOC  path="/" exact component={HomePage} />
     <MovieHOC  path="/movie/:id" exact component={MoviePage} />
     <DefaultHOC  path="/plays" exact component={Plays} />
  </>
  );
}

export default App;




