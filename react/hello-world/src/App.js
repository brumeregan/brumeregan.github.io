import React, { Component } from 'react';
// import Dropdown from './Dropdown';
// import Header from './Header';
import RegistrationForm from './RegistrationForm';
// const menu = [
//   {
//     link: '/articles',
//     label: 'Artciles'
//   },
//   {
//     link: '/contacts',
//     label: 'Contucts'
//   },
//   {
//     link: '/posts',
//     label: 'Posts'
//   }
// ];
// <Header items={menu}/>

class App extends Component {

  render() {
    return ( 
      <div>
        
        <RegistrationForm />
      </div>
    );
  }
}

export default App;
