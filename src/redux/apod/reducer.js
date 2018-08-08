
import { moment } from 'moment';

import {
    DATA_SUCCESS, NEXT_MENU, PREV_MENU
} from './action';

// 초기 상태
const initialState = {
 data : [],
 index : 0
}

const apod = (state = initialState,action) => {
    // 래퍼런스 생성

    switch (action.type) {
        case DATA_SUCCESS:
            return {
                ...state,
                data: action.data
            }
        case NEXT_MENU:
            return {
                ...state,
                index : state.index +1,
            }
        case PREV_MENU:
            return {
                ...state,
                index : state.index -1
            }
        
        default:
           return state;
    }
}

export default apod