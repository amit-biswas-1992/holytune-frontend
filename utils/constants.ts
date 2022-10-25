export const BASE_URL = "http://192.168.7.13:8041/api/";
// export const BASE_URL = "https://cmv.dvcoreapi.com/api/";
export const VERSION = "v1";
export const IMAGE_BASE_URL = "https://cmv.dvcoreapi.com/media/content";
export const CATAGORY_IMAGE_BASE_URL =
  "https://cmv.dvcoreapi.com/media/category";
export const USER_PROFILE_IMAGE_BASE_URL =
  "https://cmv.dvcoreapi.com/media/user";
export const userToken = async () => {
  const UserData = localStorage.getItem("user_token");
  return `Bearer ${UserData}`;
};
