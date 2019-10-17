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

const SaveCodeInsurance = (params, token) => {
  return request({
    url: '/user',
    method: 'patch',
    headers: {
      Authorization: 'Bearer ' + token
    },
    data: params
  });
};
const SaveInfo = (params, id, token) => {
  return request({
    url: '/user/' + id,
    method: 'put',
    headers: {
      Authorization: 'Bearer ' + token
    },
    data: params
  });
};
const getUserByID = (id, token) => {
  return request({
    url: '/user/' + id,
    method: 'get',
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

const getUserProfile = (id, token) => {
  return request({
    url: `user/${id}`,
    method: 'get',
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};
export { Register, Login, SaveCodeInsurance, SaveInfo, getUserByID, getUserProfile };
