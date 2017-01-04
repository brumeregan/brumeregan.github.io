import React, { Component } from 'react';
// import Dropdown from './Dropdown';
import Header from './Header';

const menu = [
  {
    link: '/articles',
    label: 'Artciles'
  },
  {
    link: '/contacts',
    label: 'Contucts'
  },
  {
    link: '/posts',
    label: 'Posts'
  }
];

class App extends Component {

  render() {
    return ( 
      <div>
        <Header items={menu}/>
      </div>
    );
  }
}

export default App;
