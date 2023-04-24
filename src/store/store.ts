import { Action, applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware, { ThunkDispatch, ThunkMiddleware } from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "@/store/userReducer/reducer";
import { galleryReducer } from "@/store/galleryReducer/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  gallery: galleryReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof rootReducer>;

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

const bindMiddleware = (middleware: ThunkMiddleware[]) => {
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const store = createStore(rootReducer, bindMiddleware([thunkMiddleware]));

export type AppStore = typeof store;

export const wrapper = createWrapper<AppStore>((): AppStore => store, {
  debug: false,
});

export default store;
