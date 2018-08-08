
export const DATA_REQUEST = 'DATA_REQUEST';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const NEXT_MENU = 'NEXT_MENU';
export const PREV_MENU = 'PREV_MENU';
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
