import * as querystring from "querystring";

type CreateQueryStringType = {
  userId?: string;
  searchString?: string;
  isFirstLiked?: string;
  skip?: number;
  limit?: number;
};

export const createQueryStringHelper = ({
  userId,
  searchString,
  isFirstLiked,
  skip,
  limit,
}: CreateQueryStringType) => {
  const str: CreateQueryStringType = {};

  if (skip) {
    str.skip = skip;
  }
  if (limit) {
    str.limit = limit;
  }
  if (userId) {
    str.userId = userId;
  }
  if (searchString) {
    str.searchString = searchString;
  }
  if (isFirstLiked === "true") {
    str.isFirstLiked = "true";
  }
  if (isFirstLiked === "false") {
    str.isFirstLiked = "false";
  }

  return querystring.stringify(str);
};
