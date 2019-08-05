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

export { Register, Login };
