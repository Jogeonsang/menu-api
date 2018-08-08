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
} from './action';


export function* loadData(action) {
    const { nameMenu,imageUrlMenu } = action;
    
    try {
        const response = yield call(service.getAPOD,{nameMenu,imageUrlMenu} )
        console.log(response)
        yield put (dataSuccess(response.data.result[7]))
        console.log(dataSuccess(response.data.result[7]))
    }
    catch (error) {
        console.log(error);
    }
}

export function* watchData() {
    yield takeEvery(DATA_REQUEST, loadData)
    console.log(DATA_REQUEST)
}