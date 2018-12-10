import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    // Make sure we do callback from parent component
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
              placeholder="Search for a video..."
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
