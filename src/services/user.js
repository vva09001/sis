import request from 'utils/request';
const Register = (params, token) => {
  return request({
    url: '/wp/v2/users',
    method: 'post',
    headers: {
      Authorization: 'Bearer ' + token
    },
    data: params
  });
};

const Login = params => {
  return request({
    url: '/jwt-auth/v1/token',
    method: 'post',
    params
  });
};

export { Register, Login };
