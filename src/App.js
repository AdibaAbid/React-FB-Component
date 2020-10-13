import React from 'react';

import Facebook from './components/views/Facebook';

import './App.css';

const userObject ={
  createdBy:'Adiba Abid',
  avtar:'https://i2.wp.com/nofiredrills.com/wp-content/uploads/2016/10/myavatar.png?fit=400%2C400&ssl=1',
  descriptions:'Nature always wears the colors of the spirit. —Ralph Waldo Emerson',
  images : ['https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350',
  'https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg',
  'https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg',
  'https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&h=350',
  "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350",
  "https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg"],
  createdAt: Date.now()
  
}

function App() {

  return (
    <div className="App">
       <Facebook userObject={userObject}/>
    </div>
  );
}

export default App;
