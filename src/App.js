
import './App.css';
import React, { Component } from 'react';
import Navbar from './Component/Navbar';
import News from './Component/News';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'  

export default class App extends Component {
  page=9;
  apikey=process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/'  element={<News key="general" pages={this.page} apikey={this.apikey} category="general" />} />
         <Route exact path='general'  element={<News key="general" pages={this.page} apikey={this.apikey} category="general" />} />
         <Route exact path='entertainment'  element={<News key="entertainment" pages={this.page} apikey={this.apikey} category="entertainment" />} />
         <Route exact path='business' element={<News  key="business"  pages={this.page} apikey={this.apikey} category="business"/>}/>
         <Route exact path='health'  element={<News key="health" pages={this.page} apikey={this.apikey} category="health"/>}/>
         <Route exact path='science'  element={<News  key="science" pages={this.page} apikey={this.apikey} category="science"/>}/>
         <Route exact path='sports'  element={<News key="ports" pages={this.page} apikey={this.apikey} category="sports"/>}/>
         <Route exact path='technology'  element={<News key="technology" pages={this.page} apikey={this.apikey} category="technology"/>}/>
     </Routes>
      </Router>
      </div>
    )
  }
}
