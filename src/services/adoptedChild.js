import request from 'utils/request';

const adoptedChild = (params, id) => {
  return request({
    url: `/calculate/nuoi-con/${id}`,
    method: 'post',
    data: params
  });
};

export { adoptedChild };
