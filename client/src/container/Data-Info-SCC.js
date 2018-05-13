import _ from 'lodash';
import React from 'react'
import { connect } from 'react-redux';
import { fetchDataSCC } from '../actions';
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';

class DataInfoSCC extends React.Component {
  componentDidMount() {
    this.props.fetchDataSCC();
  }
  showDataMo() {
    const { myDataSCC } = this.props;
    return _.map(myDataSCC, (item) => {
      return <p key={item.id}>{item.about}</p>
    });
  };
  
  render() {
    return (
      <div>
        <InfoBox>
          <div>
            <div className="dataElements text-light bg-dark">
              {this.showDataMo()}
            </div>
          </div>
        </InfoBox>
      </div>
    );
  };
};

function mapStateToProps({ myDataSCC }) {
  return { myDataSCC }
}

export default connect(mapStateToProps, { fetchDataSCC })(DataInfoSCC);