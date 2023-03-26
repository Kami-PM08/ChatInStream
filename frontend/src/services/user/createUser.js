import axios from "axios";

const createUser = (data) =>
  axios
    .post(process.env.REACT_APP_API_URL + "user", data)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw error;
    });

export default createUser;
