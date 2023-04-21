import { ThunkAction } from "@/store/store";
import {
  galleryActions,
  GalleryActionsType,
} from "@/store/galleryReducer/actions";
import { galleryService } from "@/services/GalleryService";
import { userActions, UserActionsType } from "@/store/userReducer/actions";
import handleAxiosError from "@/utils/handlers/reduxAxiosError.handler";

export const collectGalleries =
  (
    skip?: number,
    limit?: number,
    userId?: string,
    searchString?: string,
    isFirstLiked?: string
  ): ThunkAction<GalleryActionsType> =>
  async (dispatch) => {
    try {
      dispatch(galleryActions.setGalleryFetching(true));
      const data = (
        await galleryService.getAll(
          skip,
          limit,
          userId,
          searchString,
          isFirstLiked
        )
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
    title: string,
    callback: () => void
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
      callback();
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

export const editGallery =
  (
    galleryId: string,
    title: string,
    callback: () => void
  ): ThunkAction<GalleryActionsType | UserActionsType> =>
  async (dispatch) => {
    try {
      dispatch(galleryActions.setGalleryFetching(true));
      const edited = (await galleryService.edit(galleryId, title)).data;
      dispatch(
        userActions.setModalMessage(`Gallery ${edited._id} has been edited`)
      );
      callback();
    } catch (e) {
      handleAxiosError(e, dispatch);
    } finally {
      dispatch(galleryActions.setGalleryFetching(false));
    }
  };

export const removeGallery =
  (
    galleryId: string,
    callback: () => void
  ): ThunkAction<GalleryActionsType | UserActionsType> =>
  async (dispatch) => {
    try {
      dispatch(galleryActions.setGalleryFetching(true));
      const deleted = (await galleryService.remove(galleryId)).data;
      dispatch(
        userActions.setModalMessage(`Gallery ${deleted._id} has been deleted`)
      );
      dispatch(userActions.setPostsCount(deleted.postsCount));
      callback();
    } catch (e) {
      handleAxiosError(e, dispatch);
    } finally {
      dispatch(galleryActions.setGalleryFetching(false));
    }
  };
