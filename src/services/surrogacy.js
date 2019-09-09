import request from 'utils/request';

const surrogacy = (params, id) => {
  return request({
    url: `/calculate/mang-thai-ho-la-nguoi-mang-thai-ho/${id}`,
    method: 'post',
    data: params
  });
};

const thanksurrogacy = (params, id) => {
  return request({
    url: `/calculate/mang-thai-ho-la-nguoi-nho-mang-thai-ho/${id}`,
    method: 'post',
    data: params
  });
};

export { surrogacy, thanksurrogacy };
