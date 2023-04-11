import { Dispatch } from "redux";
import { AxiosError } from "axios";
import { userActions } from "@/store/userReducer/actions";

const handleAxiosError = (error: any, dispatch: Dispatch) => {
  if (error instanceof AxiosError) {
    dispatch(userActions.setFetchingError(true));
    dispatch(userActions.setFetchingSuccess(false));
    dispatch(
      userActions.setModalMessage(error.response?.data.message || error.message)
    );
  } else {
    console.log(error);
  }
};

export default handleAxiosError;
