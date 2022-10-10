import React from 'react';
import Header from './components/header/Header';
import Card from './components/card/Card';
import data from './helper/data'



function App() {
  // console.log(data);
  return(
    <>

  <Header/>
  <Card data={data}/>

  </>
  ) 
}

export default App;