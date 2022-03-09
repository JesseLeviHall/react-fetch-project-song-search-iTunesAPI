import React from "react";
import ResultItem from "./ResultItem";
import SearchForm from "./SearchForm";

export default class SearchApp extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      results: [],
    };
    this.runSearch = this.runSearch.bind(this);
  }

  runSearch(text) {
    const mergedText = text.replace(/ /g, "+");
    this.setState({
      isLoading: true,
      results: [],
    });
    fetch(`https://itunes.apple.com/search?term=${mergedText}&entity=song`)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then((json) => {
        this.setState({
          results: json.results,
          isLoading: false,
        });
      });
    try {
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="text-center">Search Songs On iTunes</h1>
          <p className="lead text-center">
            Search for a song (Powered by iTunes API)
          </p>
        </div>
        <SearchForm onSearch={this.runSearch} />
        {this.state.isLoading
          ? "Searching..."
          : `Found ${this.state.results.length} results`}
        <ul className="media-list">
          {this.state.results.map((song, index) => {
            return <ResultItem key={index} song={song} />;
          })}
        </ul>
      </div>
    );
  }
}
