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


export function* loadData(action) {
    const { nameMenu,imageUrlMenu,story } = action;
    
    try {
        const response = yield call(service.getAPOD,{nameMenu,imageUrlMenu,story} )
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