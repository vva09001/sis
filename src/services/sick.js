import request from 'utils/request';

const sickShortDay = (params, id) => {
  return request({
    url: `/calculate/om-dau-ngan-ngay/${id}`,
    method: 'post',
    data: params
  });
};

const sickLongDay = (params, id) => {
  return request({
    url: `/calculate/om-dau-dai-ngay/${id}`,
    method: 'post',
    data: params
  });
};

const recuperate = (params, id) => {
  return request({
    url: `/calculate/phuc-hoi-suc-khoe-sau-om/${id}`,
    method: 'post',
    data: params
  });
};

const sickchildren = (params, id) => {
  return request({
    url: `/calculate/con-om/${id}`,
    method: 'post',
    data: params
  });
};

export { sickShortDay, sickLongDay, recuperate, sickchildren };
