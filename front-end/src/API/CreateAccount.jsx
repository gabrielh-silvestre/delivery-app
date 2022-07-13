import axios from 'axios';
import API_URL from './API_URL';

const CreateAccount = async (
  name,
  email,
  password
) => {
  const response = await axios
    .post(`${API_URL}user`, {
      name,
      email,
      password,
    })
    .then((response) => response.data)
    .catch((error) => error);

  return response;
};

export default CreateAccount;
