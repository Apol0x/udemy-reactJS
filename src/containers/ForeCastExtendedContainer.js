import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import ForeCastExtend from '../components/ForeCastExtend.js';

class ForeCastExtendedContainer extends Component {
    render() {
        return (
            this.props.city != null ? <div className="details">
                <ForeCastExtend city={this.props.city}></ForeCastExtend>
            </div> : null
        
        )
    }
};

ForeCastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
}
const mapStateToProps = ({ city }) => ({ city });
export default connect(mapStateToProps, null)(ForeCastExtendedContainer);