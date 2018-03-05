// @flow
import React from 'react';

type Props = {
  prefix: string,
  data: number | string,
  style: Object
};

const InfoBox = ({ prefix, data, style }): Props => (
  <div className="info-box" style={style}>{`${prefix}${data}`}</div>
);

export default InfoBox;
