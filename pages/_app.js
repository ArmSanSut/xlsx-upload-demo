import '../styles/globals.css'
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../store/store';

function MyApp({ Component,  ...rest }) {
  const {store, props} = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
}

const wrapper = createWrapper(() => store);

export default MyApp;
