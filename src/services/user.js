import request from 'utils/request';
const Register = (params, token) => {
  return request({
    url: '/wp/v2/users',
    method: 'post',
    headers: {
      'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9nYXRvcjMxOTkudGVtcC5kb21haW5zXC9-bWlyYWNsZXNcL3ZpbmhsaXZlcnBvb2xcL2Jhb2hpZW1kYXRhIiwiaWF0IjoxNTYzMzgxMjk5LCJuYmYiOjE1NjMzODEyOTksImV4cCI6MTU2Mzk4NjA5OSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMzAifX19.-s-lYvc-5nF461YsU9lH_ASeRfTttiwh-y3yn9L3r28'
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
