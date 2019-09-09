import request from 'utils/request';

const maintenance = (params, id) => {
  return request({
    url: `/calculate/phuc-duong-sau-khi-sinh/${id}`,
    method: 'post',
    data: params
  });
};

export { maintenance };
