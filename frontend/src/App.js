
import './App.css';
import Header from './Components/Header/Header.js';
import ArticleList from './Components/ArticleList/ArticleList.js';
import { useState } from 'react';

function App() {

  //Declaring states
  //Theme and Search Term
  const [theme, setTheme] = useState("white");
  const [searchText, setSearchText] = useState("");

  //Change theme
  function changeTheme(newTheme) {
    setTheme(newTheme);
  }


  return (
    <div className="container" style={{backgroundColor:theme}}>
      <Header changeTheme={changeTheme}/>
      <ArticleList/>
    </div>
  );
}

export default App;
