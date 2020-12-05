import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';
import styled from 'styled-components';

import SearchBar from '../../components/SearchBar';
import SearchResult from './components/SearchResult';

const StyledContainer = styled.div`
  margin: 40px auto;
`;
class Template extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render () {
    const { data, onSearchVideo } = this.props;
    return (
      <StyledContainer>
        <SearchBar
          fetchPlaylist={onSearchVideo}
        />
        <SearchResult
          data={data}
        />
      </StyledContainer>
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
