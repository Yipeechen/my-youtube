import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';

import SearchBar from '../../components/SearchBar';

class Template extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render () {
    const { onSearchVideo } = this.props;
    return (
      <>
        <h1>rrr</h1>
        <SearchBar
          fetchPlaylist={onSearchVideo}
        />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onSearchVideo: (result) => dispatch(actionCreators.searchVideo(result)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Template);
