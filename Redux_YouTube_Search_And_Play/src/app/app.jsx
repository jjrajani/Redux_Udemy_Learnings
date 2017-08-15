import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import {
  SearchBar,
  VideoDetail,
  VideoList,
} from './components';

const API_KEY = 'AIzaSyC65e0itDIWnvwFnuCRaB70KEEFSAuxjX0';

class App extends Component {
    constructor(props) {
      super(props);
      this.videoSearch();

      this.state = {
        videos: [],
        selectedVideo: null,
      };
    }

    render() {

      const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300);

      return (
        <div>
          <SearchBar onSerachTermChange={videoSearch}/>
          <div>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
              onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
              videos={this.state.videos}
            />
          </div>
        </div>
      );
    }

    videoSearch = (term) => {
        YTSearch({ key: API_KEY, term }, (videos) => {
        this.setState({
          selectedVideo: videos[0],
          videos,
        });
      });
    }

}

export default App;
