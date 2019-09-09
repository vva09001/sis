import request from 'utils/request';

const normalBirth = (params, id) => {
  return request({
    url: `/calculate/sinh-con/${id}`,
    method: 'post',
    data: params
  });
};

const specialBirth = (params, id) => {
  return request({
    url: `/calculate/sinh-con-nghi-truoc-3-4-thang/${id}`,
    method: 'post',
    data: params
  });
};

const stillBirth = (params, id) => {
  return request({
    url: `/calculate/truoc-sinh-con-thai-chet/${id}`,
    method: 'post',
    data: params
  });
};

const childDiedAfterBirth = (params, id) => {
  return request({
    url: `/calculate/sau-sinh-con-con-chet/${id}`,
    method: 'post',
    data: params
  });
};

const maternityLeave = (params, id) => {
  return request({
    url: `/calculate/truoc-sinh-con-con-chet-luc-nghi-sinh/${id}`,
    method: 'post',
    data: params
  });
};

export { normalBirth, specialBirth, stillBirth, childDiedAfterBirth, maternityLeave };
