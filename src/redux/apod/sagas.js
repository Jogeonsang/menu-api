import { takeEvery, put, call, all, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import * as service from '../../api/apod';
import {
    PREV,
    NEXT,
    DATA_REQUEST,
    DATA_SUCCESS,
    data,
    dataSuccess,
    prevMenu,
    dataRequest,
    nonData
} from './action';
import { now } from '../../../node_modules/moment';


export function* loadData(action) {
    const { nameMenu,imageUrlMenu } = action;
    
    try {
        const response = yield call(service.getAPOD,{nameMenu,imageUrlMenu} )
        console.log(response)
        yield put (dataSuccess(response.data.result))
        console.log(response.data.result)
    }

    catch (error) {
        console.log(error);
    }
}   
export function* watchData() {
    yield takeEvery(DATA_REQUEST, loadData)
}