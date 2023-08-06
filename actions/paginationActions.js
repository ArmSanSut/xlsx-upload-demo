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

export const setItemsPerPage = (itemsPerPage) => ({
    type: 'SET_ITEMS_PER_PAGE',
    payload: itemsPerPage,
});