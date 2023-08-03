import * as XLSX from 'xlsx';

const setExcelData = (data) => ({
    type: 'SET_EXCEL_DATA',
    payload: data,
});

// Action creator for fetching data 
export const fetchData = () => async (dispatch) => {
    try {
        const response = await fetch('/assets/ProductCatalogue.xlsx');
        const data = await response.arrayBuffer();
        const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });

        const arrayData = [];
        workbook.SheetNames.forEach(sheetName => {
            const worksheet = workbook.Sheets[sheetName];
            const sheetData = XLSX.utils.sheet_to_json(worksheet);

            const jsonObject = { name: sheetName, products: sheetData };
            arrayData.push(jsonObject);
        });

        // Dispatch the action to save the JSON data in the store
        dispatch(setExcelData(arrayData));
    } catch (error) {
        // Dispatch an action in case of an error
        dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
    }
};
