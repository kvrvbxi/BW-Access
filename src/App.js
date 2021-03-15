import React from "react";
import './App.css';

import Login from "./Login";
import Header from "./Header";
import Sidebar from "./Sidebar";
//import Sector from "./Sector"; extention
import Feed from "./Feed";
import Widgets from "./Widgets";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    //BEM naming conventions
    // should incapsulate sibling function in div or fragment to avoid error (i used a fragment)
    <div className="app">
      {!user ? (<Login />) : (
        <>  <Header />

            <div className="app_body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
        </>  
      )} 
    </div>
  );
}

export default App;
