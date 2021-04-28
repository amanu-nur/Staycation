import React from "react";
import "assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import landingPage from "pages/landingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route component={landingPage} />
      </Router>
    </div>
  );
}

export default App;
