import React from 'react';
import { connect } from 'react-redux'

let Laoading = ({ loading }) => (

  loading ?
    <div style={{ textAlign: 'center' }}>
      <img src={require('./loading_spinner.gif')} alt='loading' />
      <h1>LOADING</h1>
    </div> :
    null
);

const mapStateToProps = (state) => ({
  loading: state.loading
})

Laoading = connect(
  mapStateToProps,
  null
)(Laoading)


export default Laoading;