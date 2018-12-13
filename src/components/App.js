import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";
import VideoDetail from './VideoDetail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
  }

  componentDidMount() {
    this.onTermSubmit('lofi')
  }
  
  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video});
  };

  render() {
    return (
      <div className="ui container">
        <img
          alt="youtube"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2000px-YouTube_Logo_2017.svg.png"
          style={{ width: "9%", left: "7%", top: "4%", position: "absolute" }}
        />
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
                <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
