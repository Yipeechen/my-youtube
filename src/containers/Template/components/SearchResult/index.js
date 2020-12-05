import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 40px auto;
`;
const StyledCard = styled.a.attrs(props => ({
  href: `https://www.youtube.com/watch?v=${props.videoId}`,
  target: '_blank',
}))`
  overflow: hidden;
  width: 33%;
  text-align: center;
  margin: 8px auto;
`;
const StyledCardImg = styled.img.attrs(props => ({
  src: props.img,
}))`
  
`;
const StyledCardTitle = styled.h5`
  color: blue;
`;

const ResultCard = ({ img, title, videoId }) => {
  return (
    <StyledCard videoId={videoId}>
      <StyledCardImg img={img} />
      <StyledCardTitle>
        {title}
      </StyledCardTitle>
    </StyledCard>
  )
};

const SearchResult = ({ data }) => {
  return (
    <StyledContainer>
      {data.map((item, i) => {
        return (
          <ResultCard
            key={i}
            videoId={item.id.videoId}
            img={item.snippet.thumbnails.medium.url}
            title={item.snippet.title}
          />
        )
      })}
    </StyledContainer>
  )
}

export default SearchResult;
