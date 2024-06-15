import React from 'react'

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="titlehome">Пекарня "Веселый хлебушек"</h1> 
      <div className="gallery">
        <img className="img1" src="img/pek2.jpeg" />
        <img className="img1" src="img/pek3.jpeg" />
        <img className="img1" src="img/pek4.jpeg" />
        <img className="img1" src="img/pek5.jpeg" />
        <img className="img1" src="img/pek6.jpeg" />
        <img className="img1" src="img/pek7.jpeg" />
        <img className="img1" src="img/pek8.jpeg" />
      </div>
      <div className="description1">
        <h3>"Сладости жизни в каждом кусочке: от батона до макаруна!"</h3>
       </div>   
    </div>
  )
}

export default Home
