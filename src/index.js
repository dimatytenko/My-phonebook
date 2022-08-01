import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootStor from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
// import { ThemeProvider } from '@mui/material/styles';
// import { Global } from '@emotion/react';

// import { GlobalStyles } from './GlobalStyles';
// import { Theme } from './Theme';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={rootStor.store}>
      <PersistGate loading={null} persistor={rootStor.persistor}>
        <BrowserRouter>
          {/* <ThemeProvider theme={Theme}> */}
          {/* <Global styles={GlobalStyles} /> */}
          <App />
          {/* </ThemeProvider> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
