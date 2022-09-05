import React, {Component} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';



class App extends Component {

  state = {

    experience: [
      {
        id: 1,
        img: './images/img-experience1.jpg',
        rate: '5.0 (30)',
        country: 'USA',
        title: 'life lessons with katie Zaferes',
        price: '$136'
      },
      {
        id: 2,
        img: './images/img-experience2.jpg',
        rate: '5.0 (30)',
        country: 'USA',
        title: 'life lessons with katie Zaferes',
        price: '$136'
      },
      {
        id: 3,
        img: './images/img-experience3.jpg',
        rate: '5.0 (30)',
        country: 'USA',
        title: 'life lessons with katie Zaferes',
        price: '$136'
      },
      {
        id: 4,
        img: './images/img-experience4.jpg',
        rate: '5.0 (30)',
        country: 'USA',
        title: 'life lessons with katie Zaferes',
        price: '$136'
      },
      {
        id: 5,
        img: './images/img-experience5.jpg',
        rate: '5.0 (30)',
        country: 'USA',
        title: 'life lessons with katie Zaferes',
        price: '$136'
      },
      {
        id: 6,
        img: './images/img-experience6.jpg',
        rate: '5.0 (30)',
        country: 'USA',
        title: 'life lessons with katie Zaferes',
        price: '$136'
      },
      {
        id: 7,
        img: './images/img-experience7.jpg',
        rate: '5.0 (30)',
        country: 'USA',
        title: 'life lessons with katie Zaferes',
        price: '$136'
      },
      {
        id: 8,
        img: './images/img-experience8.jpg',
        rate: '5.0 (30)',
        country: 'USA',
        title: 'life lessons with katie Zaferes',
        price: '$136'
      },
      {
        id: 9,
        img: './images/img-experience9.jpg',
        rate: '5.0 (30)',
        country: 'USA',
        title: 'life lessons with katie Zaferes',
        price: '$136'
      },
      {
        id: 10,
        img: './images/img-experience10.jpg',
        rate: '5.0 (30)',
        country: 'USA',
        title: 'life lessons with katie Zaferes',
        price: '$136'
      }
    ]
  }
  render() {
      return (
        <div>
          <Navbar />
          <Hero />
        </div>
      );
  }
}
export default App;
