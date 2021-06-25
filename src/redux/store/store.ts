import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { weatherReducer } from '../reducers/weatherReducer';
import { cityReducer } from './../reducers/cityReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  city: cityReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;