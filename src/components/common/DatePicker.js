import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export class SisDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <DatePicker
        placeholderText={'DD/MM/YYYY'}
        dropdownMode={'scroll'}
        scrollableYearDropdown={true}
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}
