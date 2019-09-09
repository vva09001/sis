import request from 'utils/request';

const miscarriage = (params, id) => {
  return request({
    url: `/calculate/say-thai/${id}`,
    method: 'post',
    data: params
  });
};

export { miscarriage };
