import _ from 'lodash';
import React from 'react'
import { connect } from 'react-redux';
import { fetchDataSCC } from '../actions';
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';

class DataInfoHA extends React.Component {
  componentDidMount() {
    this.props.fetchDataSCC();
  }
  showDataMo() {
    const { myDataSCC } = this.props;
    return _.map(myDataSCC, (item) => {
      return <p key={item.id}>{item.info}</p>
    });
  };
  
  render() {
    return (
      <div>
        <InfoBox>
          <div>
            <div className="dataElements text-light bg-primary">
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

export default connect(mapStateToProps, { fetchDataSCC })(DataInfoHA);