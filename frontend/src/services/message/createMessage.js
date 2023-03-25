import axios from "axios";

const createMessage = (token, data) =>
  axios
    .post(process.env.REACT_APP_API_URL + "message", data, {
      headers: {
        "jwt-auth": token,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.log(error));

export default createMessage;
