import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserAcs from "../../store/userReducer/actionCreators";

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      ...UserAcs,
    },
    dispatch
  );
};

export default useActions;
