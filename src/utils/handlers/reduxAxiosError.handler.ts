import { Dispatch } from "redux";
import { AxiosError } from "axios";
import { userActions } from "@/store/userReducer/actions";

export const handleAxiosError = (error: any, dispatch: Dispatch) => {
  dispatch(userActions.setFetchingError(true));
  dispatch(userActions.setFetchingSuccess(false));
  if (error instanceof AxiosError) {
    dispatch(
      userActions.setModalMessage(error.response?.data.message || error.message)
    );
  } else {
    console.log(error);
  }
};

export default handleAxiosError;
