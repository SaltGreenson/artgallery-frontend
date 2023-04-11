import { Action, applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware, { ThunkDispatch } from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "@/store/userReducer/reducer";

const rootReducer = combineReducers({
  user: userReducer,
});

const middleware = [thunkMiddleware];
const enhancers = composeWithDevTools(applyMiddleware(...middleware));
const store = createStore(rootReducer, enhancers);

export type AppStateType = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;

export type ThunkAction<
  A extends Action,
  R = Promise<void>,
  S = AppState,
  E = unknown
> = (
  dispatch: ThunkDispatch<S, E, A>,
  getState: () => S,
  extraArgument: E
) => R;

export const wrapper = createWrapper<AppStore>((): AppStore => store, {
  debug: false,
});

export default store;
