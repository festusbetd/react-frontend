import axios from "axios";

const UpdatePasswordService = (id, password) => {
  console.log(id, password);

  try {
    return axios.put(`http://3.83.221.40:8080/password`, null, {
      params: {
        id,
        password,
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

export default UpdatePasswordService;
