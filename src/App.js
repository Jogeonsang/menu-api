import React, { Component } from 'react';
import ViewerTemplate from './components/ViewerTemplate';
import MenuNavigator from './components/MenuNavigator';
import moment from 'moment';
import Viewer from './components/Viewer/Viewer';

import * as getAPOD from './api/apod';
import { connect } from 'react-redux';
import { dataRequest, dataSuccess} from '../src/redux/apod/action';
import { request } from 'https';

class App extends Component {
  state = {
    id : '22',
    nameMenu : null,
    imageUrlMenu : null,
  }

  /* getAPOD = async (date) => {
    if (this.state.loading) return; // 이미 요청중이라면 무시

    // 로딩 상태 시작
    this.setState({
      loading : true
    });

    try {
      const response = await api.getAPOD(date);
      // 비구조화 활당 + 새로운 이름
      const { date: retrievedDate, url, media_type: mediaType} = response.data;

      if(!this.state.maxDate) {
        // 만약에 maxDate가 없으면 지금 받은 date로 지정
        this.setState({
          maxDate: retrievedDate
        })
      }

      //전달받을 데이터 넣어주기
     /* this.setState({
        date: retrievedDate,
        mediaType,
        url 
      }); 
    }
    catch (e) {
      console.log(e);
    }
    
    this.setState({
      loading:false
    });
  } */
    
    handlePrev = () => {
    const { date } = this.state;
    const prevDate = moment(date).subtract(1, 'days').format('YYYY-MM-DD');
    console.log(prevDate);
    this.getAPOD(prevDate);
  }

    handleNext = () => {
      const { date, maxDate } = this.state;
      if(date === maxDate) return;

      const nextDate = moment(date).add(1, 'days').format('YYYY-MM-DD');
      console.log(nextDate);
      this.getAPOD(nextDate);
      
    }
  
  componentDidMount() {
    this.props.onData(dataSuccess);
  }
  render() {
    const { data } = this.props;
    const { handlePrev, handleNext} = this;
    return (
      <ViewerTemplate
      
        menuNavigator={<MenuNavigator onPrev={handlePrev} onNext={handleNext} />}
        viewer = {(
          <Viewer
            imageUrlMenu={data.imageUrlMenu}
            mediaType={'image'}
            nameMenu={data.nameMenu}
           />
        )}
      />
    );
  }
}
const mapStateToProps = (state) => ({
  data : state.apod
});

const mapDispatchToProps = (dispatch) => ({
  onData: (imageUrlMenu,nameMenu) => dispatch(dataRequest(imageUrlMenu,nameMenu)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);