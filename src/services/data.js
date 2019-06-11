import request from 'utils/request';
import qs from 'qs';

const GetBrands = () => {
  return request({
    url: '/GetBrands',
    method: 'get'
  });
};
const GetPackageData = data => {
  return request({
    url: '/GetPackageData',
    method: 'post',
    data: qs.stringify(data)
  });
};
export { GetBrands, GetPackageData };
