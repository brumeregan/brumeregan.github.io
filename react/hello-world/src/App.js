import React, { Component } from 'react';
// import Dropdown from './Dropdown';
// import Header from './Header';

import './App.css';
import Menu from './Menu';


// import RegistrationForm from './RegistrationForm';
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
// <div className="container">
//         <RegistrationForm />
//       </div>

class App extends Component {
	submit() {
		console.log('submit', this.testInput.value);
	}
  render() {
    return (
      <div>
      	<Menu />
				<input type="text" placeholder="test" 
				ref={(input)=> this.testInput = input} />
				<button onClick={this.submit.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default App;
