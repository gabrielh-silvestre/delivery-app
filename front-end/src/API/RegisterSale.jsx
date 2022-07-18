import axios from 'axios';
import API_URL from './API_URL';

const RegisterSale = async ({
  token,
  sellerId,
  totalPrice,
  address,
  orders,
},
) => {
  const response = await axios
    .post(`${API_URL}sales`, {
      sellerId,
      totalPrice,
      address,
      orders,
    }, {
      headers: {
        Authorization: token,
      } })
    .then((Response) => Response.data)
    .catch((error) => error);

  return response;
};

export default RegisterSale;
