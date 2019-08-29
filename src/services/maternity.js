import request from 'utils/request';

const antenatalExamination = (params, id) => {
  return request({
    url: '/calculate/kham-thai/' + id,
    method: 'post',
    data: params
  });
};

export { antenatalExamination };
