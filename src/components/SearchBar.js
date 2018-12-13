import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form  onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search:</label>
            <input
              value={this.state.term}
              onChange={(event) => this.setState({ term: event.target.value }) }
              placeholder="Search"
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
