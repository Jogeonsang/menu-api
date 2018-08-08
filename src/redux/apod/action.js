
export const DATA_REQUEST = 'DATA_REQUEST';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const NEXT_MENU = 'NEXT_MENU';
export const PREV_MENU = 'PREV_MENU';
export const NON_DATA = 'NON_DATA';
// 액션 생성 함수


export const dataRequest = () => ({
    type : DATA_REQUEST
})

export const dataSuccess = (data) => ({
    type : DATA_SUCCESS,
    data
})

export const nextMenu = () => ({
    type : NEXT_MENU
})

export const prevMenu = () => ({
    type : PREV_MENU
})

export const nonData = () => ({
    type : NON_DATA
})