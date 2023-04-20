import { ThunkAction } from "@/store/store";
import {
  galleryActions,
  GalleryActionsType,
} from "@/store/galleryReducer/actions";
import { SortType } from "@/store/galleryReducer/initialState";
import { galleryService } from "@/services/GalleryService";
import { userActions, UserActionsType } from "@/store/userReducer/actions";
import handleAxiosError from "@/utils/handlers/reduxAxiosError.handler";

export const collectGalleries =
  (
    skip?: number,
    limit?: number,
    userId?: string,
    searchString?: string,
    sortType?: SortType
  ): ThunkAction<GalleryActionsType> =>
  async (dispatch) => {
    try {
      dispatch(galleryActions.setGalleryFetching(true));
      const data = (
        await galleryService.getAll(skip, limit, userId, searchString, sortType)
      ).data;
      dispatch(galleryActions.setGalleries(data));
    } catch (e) {
      handleAxiosError(e, dispatch);
    } finally {
      dispatch(galleryActions.setGalleryFetching(false));
    }
  };

export const createGallery =
  (
    photo: File,
    title: string
  ): ThunkAction<GalleryActionsType | UserActionsType> =>
  async (dispatch) => {
    try {
      dispatch(galleryActions.setGalleryFetching(true));
      const formData = new FormData();
      formData.append("gallery[]", photo);
      formData.append("gallery[]", title);
      const created = (await galleryService.create(formData)).data;
      dispatch(
        userActions.setModalMessage(`Gallery ${created._id} has been created`)
      );
      dispatch(userActions.setPostsCount(created.postsCount));
    } catch (e) {
      handleAxiosError(e, dispatch);
    } finally {
      dispatch(galleryActions.setGalleryFetching(false));
    }
  };

export const likePost =
  (galleryId: string): ThunkAction<GalleryActionsType | UserActionsType> =>
  async (dispatch) => {
    try {
      dispatch(galleryActions.setLikeFetching(true));
      const data = (await galleryService.like(galleryId)).data;
      dispatch(userActions.setLikedPosts(data.likedPosts));
      dispatch(userActions.setLikedCount(data.likedPosts.length));
    } catch (e) {
      handleAxiosError(e, dispatch);
    } finally {
      dispatch(galleryActions.setLikeFetching(false));
    }
  };

export const dislikePost =
  (galleryId: string): ThunkAction<GalleryActionsType | UserActionsType> =>
  async (dispatch) => {
    try {
      dispatch(galleryActions.setDislikeFetching(true));
      const data = (await galleryService.dislike(galleryId)).data;
      dispatch(userActions.setDislikedPosts(data.dislikedPosts));
    } catch (e) {
      handleAxiosError(e, dispatch);
    } finally {
      dispatch(galleryActions.setDislikeFetching(false));
    }
  };
