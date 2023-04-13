import { ThunkAction } from "@/store/store";
import {
  galleryActions,
  GalleryActionsType,
} from "@/store/galleryReducer/actions";
import { SortType } from "@/store/galleryReducer/initialState";
import { _commonActions } from "@/store/userReducer/actionCreators";
import { galleryService } from "@/services/GalleryService";
import { userActions, UserActionsType } from "@/store/userReducer/actions";

export const collectGallery =
  (
    skip: number,
    limit: number,
    userId?: string,
    searchString?: string,
    sortType?: SortType
  ): ThunkAction<GalleryActionsType> =>
  async (dispatch) => {
    await _commonActions(async () => {
      const data = (
        await galleryService.getAll(skip, limit, userId, searchString, sortType)
      ).data;
      dispatch(galleryActions.setGalleries(data));
    }, dispatch);
  };

export const createGallery =
  (
    photo: File,
    title: string
  ): ThunkAction<GalleryActionsType | UserActionsType> =>
  async (dispatch) => {
    await _commonActions(async () => {
      const formData = new FormData();
      formData.append("gallery[]", photo);
      formData.append("gallery[]", title);
      const created = (await galleryService.create(formData)).data;
      dispatch(
        userActions.setModalMessage(`Gallery ${created._id} has been created`)
      );
    }, dispatch);
  };
