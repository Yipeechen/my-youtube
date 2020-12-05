import { ThemeProvider } from 'styled-components';

import mediaQueries from './styles/mediaQueries';
import { ResetStyle, GlobalStyle } from './styles/reset';
import Template from './containers/Template';

function App() {
  return (
    <ThemeProvider theme={mediaQueries}>
      <ResetStyle />
      <GlobalStyle />
      <Template />
    </ThemeProvider>
  );
}

export default App;
