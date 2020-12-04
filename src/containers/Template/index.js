import React from 'react';
import axios from 'axios';

import SearchBar from '../../components/SearchBar';

class Template extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  fetchPlaylist = searchTerm => {
    const API_KEY = 'YOUR_API_KEY';
    const URL = 'https://www.googleapis.com/youtube/v3/search';

    axios.get(URL, {
      params: {
        part: 'snippet',
        type: 'video',
        q: searchTerm,
        maxResults: 5,
        key: API_KEY,
      }
    })
    .then(res => {
      console.log(res.data.items);
    })
    .catch(e => console.log(e));
  }

  render () {
    return (
      <>
        <h1>rrr</h1>
        <SearchBar
          fetchPlaylist={this.fetchPlaylist}
        />
      </>
    )
  }
}

export default Template;
