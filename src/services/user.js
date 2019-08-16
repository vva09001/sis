import request from 'utils/request';
const Register = params => {
  return request({
    url: '/register',
    method: 'post',
    data: params
  });
};

const Login = params => {
  return request({
    url: '/login',
    method: 'post',
    data: params
  });
};

const SaveCodeInsurance = params => {
  return request({
    url: '/users',
    method: 'patch',
    data: params
  });
};
const SaveInfo = (params, id, token) => {
  return request({
    url: '/users/' + id,
    method: 'put',
    headers: {
      Authorization: 'Bearer ' + token
    },
    data: params
  });
};
export { Register, Login, SaveCodeInsurance, SaveInfo };
