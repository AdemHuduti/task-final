import _ from 'lodash';
import React from 'react'
import { connect } from 'react-redux';
import { fetchDataBBI } from '../actions';
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';

class DataInfoKSI extends React.Component {
  componentDidMount() {
    this.props.fetchDataBBI();
  }

  showDataBBI() {
    const { myDataBBI } = this.props;
    return _.map(myDataBBI, (item) => {
      return <p key={item.id}>{item.info}</p>
    });
  };

  render() {
    return (
      <div>
        <InfoBox>
          <div>
            <div className="dataElements text-light bg-primary">
              {this.showDataBBI()}
            </div>
          </div>
        </InfoBox>
      </div>
    ); 
  };
};

function mapStateToProps({ myDataBBI }) {
  return { myDataBBI }
}

export default connect(mapStateToProps, { fetchDataBBI })(DataInfoKSI);