import axios from "axios";

const UserEmailDataService = async (email) => {
  try {
    return axios.post(`http://3.83.221.40:8080/notification`, null, {
      params: {
        email,
      },
    });
  } catch (err) {
    let error = "";
    if (err.response) {
      error += err.response;
    }
    return error;
  }
};

export default UserEmailDataService;
