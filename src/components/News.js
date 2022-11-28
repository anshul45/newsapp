import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=1feb78f3400b4e9e896d96369f699020&page=1";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles });
  }
  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1feb78f3400b4e9e896d96369f699020&page=1${
      this.state.page - 1
    }`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
    });
  };

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1feb78f3400b4e9e896d96369f699020&page=1${
      this.state.page + 1
    }`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);

    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles,
    });
  };
  render() {
    return (
      <div className="container my-3">
        <h1>News</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark "
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button className="btn btn-dark " onClick={this.handleNextClick}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
