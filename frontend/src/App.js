import React from "react";
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Home from "./components/view/recipeView";
import Header from "./components/Header";
import View from "./components/view/ViewRecipe";

function App() {
  return (
    
    <Router>
      <Header/>
      
      <Routes>
        {/* <Home /> */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/ViewRecipe" element={<View/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
