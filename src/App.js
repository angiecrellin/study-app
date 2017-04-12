import React, { Component } from 'react'
import './App.css'

import Loader from './containers/Loader'

import FlashcardDisplay from './containers/FlashcardDisplay'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Loader />
        <FlashcardDisplay />

      </div>
    );
  }
}

export default App
