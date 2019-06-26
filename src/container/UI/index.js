import React from 'react';
import SisButton from '../../components/common/Button';

export class UIComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SisButton type="primary" number={1}>
          Primary
        </SisButton>
        <SisButton type="danger" number={2}>
          Danger
        </SisButton>
      </React.Fragment>
    );
  }
}
