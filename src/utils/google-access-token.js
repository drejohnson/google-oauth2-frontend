import axios from "axios";

const getAccessTokenFromCode = async code => {
  console.log(JSON.stringify(code));
  const { data } = await axios({
    url: "https://oauth2.googleapis.com/token",
    method: "post",
    // headers: {
    //   "content-type": "application/x-www-form-urlencoded"
    // },
    data: {
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      client_secret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
      redirect_uri: "http://localhost:3000/authenticate/google",
      grant_type: `authorization_code`,
      code: code
    }
  });
  console.log(data); // { access_token, expires_in, token_type, refresh_token }
  return data.access_token;
};

export default getAccessTokenFromCode;
