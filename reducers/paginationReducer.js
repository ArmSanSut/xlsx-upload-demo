const initialState = {
    selectedCategory: '',
    productTotal: '',
    currentPage: 1,
    itemsPerPage: 9,
};


const paginationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SELECTED_CATOGORY':
            return { ...state, selectedCategory: action.payload };
        case 'SET_PRODUCT_TOTAL':
            return { ...state, productTotal: action.payload };
        case 'SET_CURRENT_PAGE':
            return { ...state, currentPage: action.payload };
        case 'SET_ITEMS_PER_PAGE':
            return { ...state, itemsPerPage: action.payload };
        default:
            return state;
    }
};

export default paginationReducer;