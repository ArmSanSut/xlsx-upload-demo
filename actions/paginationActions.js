export const setSelectedCategory = (selectedCategory) => ({
    type: 'SET_SELECTED_CATOGORY',
    payload: selectedCategory,
});

export const setProductTotal = (productTotal) => ({
    type: 'SET_PRODUCT_TOTAL',
    payload: productTotal,
});

export const setCurrentPage = (currentPage) => ({
    type: 'SET_CURRENT_PAGE',
    payload: currentPage,
});

export const setPageSize = (pageSize) => ({
    type: 'SET_PAGE_SIZE',
    payload: pageSize,
});

export const setTotalItems = (totalItems) => ({
    type: 'SET_TOTAL_ITEMS',
    payload: totalItems,
});