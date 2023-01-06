import React, { Component } from 'react';
import NewsItems from './NewsItems';
import spin from './spin.gif'

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
        items: [],
        DataisLoaded: false,
        page:1,
        totalResults:1,
    };
    document.title=`${this.props.category}`
}
capital=(string)=>{
return string.charAt(0).toUpperCase()+string.slice(1);
}
async componentDidMount() {
  this.setState({DataisLoaded: true})
    let data= await fetch(
`https://newsapi.org/v2/top-headlines?country=id&category=${this.props.category}&apikey=${this.props.apikey}&page=1&pagesize=${this.props.pages}`);
this.setState({DataisLoaded: true})
let parsedate= await data.json();
this.setState({
  items:parsedate.articles,
  totalResults:parsedate.totalResults,
  DataisLoaded: false

})       
}
PreviousHandle= async()=>{
  let data= await fetch(
    `https://newsapi.org/v2/top-headlines?country=id&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page-1}&pagesize=${this.props.pages}`);
    this.setState({DataisLoaded: true})
    let parsedate= await data.json();
    this.setState({
      items:parsedate.articles,
      page:this.state.page-1,
      DataisLoaded: false
    })    
}
NextHandle= async()=>{
  let data= await fetch(
    `https://newsapi.org/v2/top-headlines?country=id&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page+1}&pagesize=${this.props.pages}`);
    this.setState({DataisLoaded: true})
    let parsedate= await data.json();
    this.setState({
      items:parsedate.articles,
      page:this.state.page+1,
      DataisLoaded: false
    })       
}
  render() {
    return (
      <div>
       <div className="container text-center my-4">
        <h1 style={{marginTop:"90px"}}>Top Headlines From {this.capital(this.props.category)}</h1>
        {this.state.DataisLoaded&&<img src={spin} alt="spin"/>}
       </div>
        <div className="container my-3">
        <div className="row">
          {this.state.items.map((element)=>{   
           return  <div className="col-md-4" key={element.url}>
                <NewsItems title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
       
          })}
           </div>    
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.PreviousHandle}>&larr; Previous</button>
        <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pages)} className="btn btn-dark" onClick={this.NextHandle}>Next &rarr;</button>
        </div>  
      </div>
    )
  }
}
