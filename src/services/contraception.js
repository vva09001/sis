import request from 'utils/request';

const contraception = (params, id) => {
  return request({
    url: `/calculate/tranh-thai/${id}`,
    method: 'post',
    data: params
  });
};

export { contraception };
