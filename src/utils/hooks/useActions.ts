import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserAcs from "../../store/userReducer/actionCreators";
import * as GalleryAcs from "../../store/galleryReducer/actionCreators";

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      ...UserAcs,
      ...GalleryAcs,
    },
    dispatch
  );
};

export default useActions;
