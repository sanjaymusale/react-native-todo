import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import rootReducer from './reducer';

AsyncStorage.removeItem('todos');
const configStore = async () => {
  const createAppStore = applyMiddleware()(createStore);
  const persistConfig = { key: 'root', storage: AsyncStorage };
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createAppStore(persistedReducer);
  const persistor = persistStore(store);
  return { persistor, store }
}

export default configStore;