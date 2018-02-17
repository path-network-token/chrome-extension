// @flow
import * as React from 'react';

import InfoBox from '../components/InfoBox';

type State = {
  jobs: number,
  tokens: number,
  status: string
};

export default class Info extends React.Component<Props, State> {
  state = {
    jobs: 0,
    tokens: 0,
    status: 'Idle'
  };

  render() {
    const { jobs, tokens, status } = this.state;

    return (
      <footer>
        <div className="left">
          <InfoBox prefix="Jobs completed: " data={jobs} />
          <InfoBox
            prefix="Path mined: "
            data={tokens}
            style={{ marginLeft: '10px' }}
          />
        </div>
        <div className="right">
          <InfoBox prefix="Status: " data={status} />
        </div>
      </footer>
    );
  }
}
