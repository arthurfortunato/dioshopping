import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { Provider } from 'react-redux';

import GlobalStyle from './globalStyles';

import Header from './components/Header'
import Announcement from './components/Announcement';
import store from './components/store';

const App = () => {

  const localCart = JSON.parse(localStorage.getItem('dioshopping: cart'))

  if (localCart !== null) {
    store.dispatch({ type: 'CHANGE_CART', localCart })
  }

  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Announcement />
        <Header />
        <Routes />
      </Router>
    </Provider>
  )
}

export default App;
