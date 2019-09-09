import request from 'utils/request';

const accident = (params, id) => {
  return request({
    url: `/calculate/tai-nan-khong-phai-loi-do-nld/${id}`,
    method: 'post',
    data: params
  });
};

export { accident };
