import axios from "axios";

const getMessagesByChat = (token, chatId) =>
  axios
    .get(process.env.REACT_APP_API_URL + "message/" + chatId, {
      headers: {
        "jwt-auth": token,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw error;
    });

export default getMessagesByChat;
