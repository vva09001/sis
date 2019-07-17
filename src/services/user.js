import request from 'utils/request';
const Register = (params, token) => {
  return request({
    url: '/v2/users/',
    method: 'post',
    headers: {
      Authorization: token
    },
    params: params
  });
};

export { Register };
