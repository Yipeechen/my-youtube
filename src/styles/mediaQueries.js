import { css } from 'styled-components';

const breakPoints = {
  desktop: '@media (min-width: 1024px)',
  mobile: '@media (max-width: 700px)',
};

export default Object.keys(breakPoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
  ${breakPoints[label]} {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
