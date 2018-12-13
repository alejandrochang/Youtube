import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <img
              alt="search"
              style={{
                position: "absolute",
                right: "1%",
                width: "30px",
                top: "15%"
              }}
              src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-512.png"
            />
            <input
              value={this.state.term}
              onChange={event => this.setState({ term: event.target.value })}
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
