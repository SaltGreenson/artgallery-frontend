import { SortType } from "@/store/galleryReducer/initialState";
import * as querystring from "querystring";

type CreateQueryStringType = {
  userId?: string;
  searchString?: string;
  sortType?: SortType;
  skip: number;
  limit: number;
  [key: string]: any;
};

export const createQueryStringHelper = ({
  userId,
  searchString,
  sortType,
  skip,
  limit,
}: CreateQueryStringType) => {
  const str: CreateQueryStringType = {
    skip,
    limit,
  };

  if (userId) {
    str.userId = userId;
  }
  if (searchString) {
    str.searchString = searchString;
  }
  if (sortType) {
    str[sortType] = "true";
  }

  return querystring.stringify(str);
};
