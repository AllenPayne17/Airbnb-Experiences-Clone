import React, {Component} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Experience from './component/Experience';



class App extends Component {

  state = {

    reviews: [
      {
        id: 1,
        img: require('./images/img-experience1.jpg'),
        rate: '5.0',
        countRate: '(71)',
        country: 'USA',
        title: 'life lessons with katie Zaferes',
        price: '$136'
      },
      {
        id: 2,
        img: require('./images/img-experience2.jpg'),
        rate: '4.5',
        countRate: '(55)',
        country: 'USA',
        title: 'Marriage And Wedding Have More In Common Than You Think',
        price: '$136'
      },
      {
        id: 3,
        img: require('./images/img-experience3.jpg'),
        rate: '4.4',
        countRate: '(30)',
        country: 'USA',
        title: 'Everything I Learned About Bike I Learned From Potus',
        price: '$136'
      },
      {
        id: 4,
        img: require('./images/img-experience4.jpg'),
        rate: '3.1',
        countRate: '(13)',
        country: 'USA',
        title: 'Apply These 6 Secret Techniques To Improve Swimming',
        price: '$136'
      },
      {
        id: 5,
        img: require('./images/img-experience5.png'),
        rate: '1.5',
        countRate: '(5)',
        country: 'USA',
        title: 'Why Relaxes are Harder than Acing the SATs',
        price: '$136'
      },
      {
        id: 6,
        img: require('./images/img-experience6.jpg'),
        rate: '4.0',
        countRate: '(20)',
        country: 'USA',
        title: 'Why Bakes are Cuter Than a Kitten',
        price: '$136'
      },
      {
        id: 7,
        img: require('./images/img-experience7.jpg'),
        rate: '4.2',
        countRate: '(43)',
        country: 'USA',
        title: 'An Expert Interview About Sing',
        price: '$136'
      },
      {
        id: 8,
        img: require('./images/img-experience8.jpg'),
        rate: '3.5',
        countRate: '(18)',
        country: 'USA',
        title: 'Unbelievable Piano Success Stories',
        price: '$136'
      },
      {
        id: 9,
        img: require('./images/img-experience9.png'),
        rate: '1.0',
        countRate: '(3)',
        country: 'USA',
        title: 'Why Mom Was Right About Guitars',
        price: '$136'
      },
      {
        id: 10,
        img: require('./images/img-experience10.jpg'),
        rate: '3.0',
        countRate: '(10)',
        country: 'USA',
        title: 'Why Cooking is the new hotness',
        price: '$136'
      }
    ]
  }
  render() {
      return (
        <div>
          <Navbar />
          <Hero />
          <Experience reviews={this.state.reviews} />
        </div>
      );
  }
}
export default App;
