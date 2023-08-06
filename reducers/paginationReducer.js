const initialState = {
    selectedCategory: '',
    productTotal: 0,
    currentPage: 1,
    pageSize: 9,
    totalItems: 0,
};


const paginationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SELECTED_CATOGORY':
            return { ...state, selectedCategory: action.payload };
        case 'SET_PRODUCT_TOTAL':
            return { ...state, productTotal: action.payload };
        case 'SET_CURRENT_PAGE':
            return { ...state, currentPage: action.payload };
        case 'SET_PAGE_SIZE':
            return { ...state, pageSize: action.payload };
        case 'SET_TOTAL_ITEMS':
            return { ...state, totalItems: action.payload };
        default:
            return state;
    }
};

export default paginationReducer;