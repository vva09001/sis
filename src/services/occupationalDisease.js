import request from 'utils/request';

const accident = (params, id) => {
  return request({
    url: `/calculate/tai-nan-lao-dong/${id}`,
    method: 'post',
    data: params
  });
};

const sick = (params, id) => {
  return request({
    url: `/calculate/benh-nghe-nghiep/${id}`,
    method: 'post',
    data: params
  });
};

const rehibilitate = (params, id) => {
  return request({
    url: `/calculate/duong-suc-phuc-hoi-suc-khoe/${id}`,
    method: 'post',
    data: params
  });
};

const allowance = (params, id) => {
  return request({
    url: `/calculate/phu-cap-cho-nguoi-cham-soc-nguoi-bi-tai-nan-lao-dong/${id}`,
    method: 'post',
    data: params
  });
};

export { accident, sick, rehibilitate, allowance };
