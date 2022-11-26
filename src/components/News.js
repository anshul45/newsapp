import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div>
        <div>News</div>
        <NewsItem />
      </div>
    );
  }
}

export default News;
