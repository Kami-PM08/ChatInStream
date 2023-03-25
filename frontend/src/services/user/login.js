import axios from "axios";

const login = (data) =>
  axios
    .post(process.env.REACT_APP_API_URL + "auth/login", data)
    .then((res) => {
      return res.headers.jwt;
    })
    .catch((error) => console.log(error));

export default login;
