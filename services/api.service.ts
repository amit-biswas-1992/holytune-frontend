import { BASE_URL, VERSION } from "../utils/constants";
import { toast } from "react-toastify";
// export const userToken = async () => {
//   const UserData = localStorage.getItem("user_token");
//   return `Bearer ${UserData}`;
// };

export const callApi = async (endpoint: string, options: any = {}) => {
  const baseUrl = BASE_URL || "http://localhost:3000";
  const url = `${baseUrl}${VERSION}${endpoint}`;
  const UserData = localStorage.getItem("user_token");
  console.log(UserData, "user data token");

  const response = await fetch(url, {
    ...options,
    method: "GET",
    headers: {
      Authorization: `Bearer ${UserData}`,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  return response.json();
};

export const callApiWithoutToken = async (
  endpoint: string,
  options: any = {}
) => {
  const baseUrl = BASE_URL || "http://localhost:3000";
  const url = `${baseUrl}${VERSION}${endpoint}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  return response.json();
};

export const callApiGetWithoutToken = async (
  endpoint: string,
  options: any = {}
) => {
  const baseUrl = BASE_URL || "http://localhost:3000";
  const url = `${baseUrl}${VERSION}${endpoint}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  return response.json();
};

export const updateProfileApi = async (endpoint: string, options: any = {}) => {
  //   console.log(endpoint, options);
  const formdata = new FormData();
  formdata.append("name", options.name);
  formdata.append("user_image", options.userimg);

  const id = options.userid;

  const requestOptions = {
    method: "PATCH",
    body: formdata,
  };

  await fetch(`${BASE_URL}${VERSION}${endpoint}${id}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
    })
    .catch((error) => console.log("error", error));
};
// export const callApifatchWithoutToken = async (endpoint: string, options
//             :any = {}) => {
//             console.log(options,"options");

//                 const baseUrl = BASE_URL || 'http://localhost:3000';
//                 const url = `${baseUrl}${VERSION}${endpoint}`;
//                 // const response = await fetch(url, {
//                 //     method: 'POST',
//                 //     body:
//                 //     headers: {
//                 //     'Content-Type': 'application/json',
//                 //     ...(options.headers || {}),
//                 //     },
//                 // });

//                 return options;

//                 }

export const searchApi = async (endpoint: string, options: any = {}) => {
  //   console.log(endpoint, options);
  // const formdata = new FormData();
  // formdata.append("name", options.searchKey);
  const raw = JSON.stringify({
    search_keyword: options.searchValue,
  });

  // const UserData = JSON.parse(localStorage.getItem("user_info"));

  // const id = UserData.id;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    body: raw,
  };

  const response = await fetch(
    `${BASE_URL}${VERSION}${endpoint}`,
    requestOptions
  );
  return response.json();
};
export const mediaViewCountApi = async (
  endpoint: string,
  options: any = {}
) => {
  // const formdata = new FormData();
  // formdata.append("name", options.searchKey);
  const raw = JSON.stringify({
    media_content_id: options.mediaId,
  });

  const UserData = localStorage.getItem("user_token");
  console.log(UserData, "token");

  // const id = UserData.id;

  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${UserData}`,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    body: raw,
  };

  const response = await fetch(
    `${BASE_URL}${VERSION}${endpoint}`,
    requestOptions
  );
  return response.json();
};
export const generateotp = async (endpoint: string, options: any = {}) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    sender: "8809612558888",
    receiver: options.num,
    notification_type: "otp",
    send_by: "sms",
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  try {
    const fetchResponse = await fetch(
      `${BASE_URL}${VERSION}${endpoint}`,
      requestOptions
    );
    const data = await fetchResponse.json();
    return data;
  } catch (e) {
    return e;
  }
};
export const varifyotp = async (endpoint: string, options: any = {}) => {
  // console.log(options, "options");
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    sender: "8809612558888",
    receiver: options.num,
    notification_text: options.otp,
    notification_type: "otp",
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };
  try {
    const fetchResponse = await fetch(
      `${BASE_URL}${VERSION}${endpoint}`,
      requestOptions
    );
    const data = await fetchResponse.json();
    return data;
  } catch (e) {
    console.log(e, "catching");
    return e;
  }
  // const response = await fetch(
  //   `${BASE_URL}${VERSION}${endpoint}`,
  //   requestOptions
  // );
  // .then((result) => console.log(result))
  // .catch((error) => console.log("error", error));

  // const response = await fetch(
  //   `${BASE_URL}${VERSION}${endpoint}`,
  //   requestOptions
  // );
  // .then(response => response.text())
  // .then(result => console.log(result))
  // .catch(error => console.log('error', error));
  // return response.json();
};
export const createUserProfile = async (
  endpoint: string,
  options: any = {}
) => {
  // console.log(options, "options api heat");
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    phone: options.userNum,
    name: options.userName,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  try {
    const fetchResponse = await fetch(
      `${BASE_URL}${VERSION}${endpoint}`,
      requestOptions
    );
    const data = await fetchResponse.json();
    return data;
  } catch (e) {
    return e;
  }
};
