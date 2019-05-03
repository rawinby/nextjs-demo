import React from 'react';
import { connect } from 'react-redux'

let Laoading = ({ loading }) => (

  loading ?
    <div style={{ textAlign: 'center' }}>
      <img src={require('../assets/images/loading_spinner.gif')} alt='loading' />
      <h2>LOADING</h2>
    </div> : null
);

const mapStateToProps = (state) => ({
  loading: state.loading
})

Laoading = connect(
  mapStateToProps,
  null
)(Laoading)


export default Laoading;