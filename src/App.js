import React, { Component } from 'react';
import ViewerTemplate from './components/ViewerTemplate';
import MenuNavigator from './components/MenuNavigator';
import moment from 'moment';
import Viewer from './components/Viewer/Viewer';

import * as getAPOD from './api/apod';
import { connect } from 'react-redux';
import { dataRequest, dataSuccess, prevMenu, nextMenu, nonData} from '../src/redux/apod/action';
import { request } from 'https';

class App extends Component {
  state = {
    id : '22',
    nameMenu : null,
    imageUrlMenu : null,
  }

  
    handleNext = () => {
      if(this.props.index < this.props.data.length -1){
        this.props.onNext()
      }
    }
    
    handlePrev = () => {
      if(this.props.index !== 0 ){
        this.props.onPrev()
      }
    }
  componentDidMount() {
    this.props.onData(dataSuccess);
  }
  render() {
    const { data,index } = this.props;
    console.log(this.props.index)
    const { handlePrev, handleNext} = this;
    return (
      <ViewerTemplate
      
        menuNavigator={<MenuNavigator onPrev={handlePrev} onNext={handleNext} />}
        viewer = {data.length!==0 &&(
          <Viewer
            imageUrlMenu={data[index].imageUrlMenu}
            mediaType={'image'}
            nameMenu={data[index].nameMenu}
            story={data[index].story}
           />
        )}
      /> 
    );
  }
}
const mapStateToProps = (state) => ({
  data : state.apod.data,
  index: state.apod.index
});

const mapDispatchToProps = (dispatch) => ({
  onData: () => dispatch(dataRequest()),
  onNext: () => dispatch(nextMenu()),
  onPrev: () => dispatch(prevMenu())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);