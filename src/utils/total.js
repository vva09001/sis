import { currency } from './currency';

const formart = data => {
  //   console.log(data);
  let total = 0;
  for (let index = 0; index < data.length; index++) {
    if (data[index][5].indexOf(',') >= 0) {
      data[index][5] = data[index][5].replace(/,/g, '');
    }
    if (data[index][5] === ' ') {
      data[index][5] = 0;
    }
    const num = parseFloat(data[index][5]);
    total = total + num;
  }
  return currency(total);
};

export default formart;
