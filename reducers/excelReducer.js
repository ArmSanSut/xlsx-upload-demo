const initialState = {
    catalogues: [],
};

const excelReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_EXCEL_DATA':
            return {
                ...state,
                catalogues: action.payload,
            };
        default:
            return state;
    }
};

export default excelReducer