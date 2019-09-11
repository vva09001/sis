import request from 'utils/request';

const unemployed = (params, id) => {
  return request({
    url: `/calculate/tro-cap-that-nghiep/${id}`,
    method: 'post',
    data: params
  });
};

const severance = (params, id) => {
  return request({
    url: `/calculate/tro-cap-thoi-viec/${id}`,
    method: 'post',
    data: params
  });
};

const lostmyjob = (params, id) => {
  return request({
    url: `/calculate/tro-cap-mat-viec/${id}`,
    method: 'post',
    data: params
  });
};

const temporary = (params, id) => {
  return request({
    url: `/calculate/nghi-viec-tam-thoi/${id}`,
    method: 'post',
    data: params
  });
};

export { unemployed, severance, lostmyjob, temporary };
