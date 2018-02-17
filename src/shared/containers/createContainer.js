import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions/chromeExtension';

const mapStateToProps = state => ({ state });

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps);
