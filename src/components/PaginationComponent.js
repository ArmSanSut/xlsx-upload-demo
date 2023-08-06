// PaginationComponent.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectExcelData } from '../../selectors/excelSelectors'; // Import your selector function
import { selectpagination } from '../../selectors/paginationSelectors'; // Import your selector function
import { setCurrentPage } from '../../actions/paginationActions';
import ReactPaginate from 'react-paginate';


const PaginationComponent = () => {
    const dispatch = useDispatch();

    const [displayData, setDisplayData] = useState([]);

    const { selectedCategory, productTotal, currentPage, pageSize, totalItems } = useSelector(selectpagination);
    let jsonData = useSelector(selectExcelData);

    jsonData = jsonData.catalogues.filter(item => item.name === selectedCategory)
    jsonData = jsonData[0].products
    console.log("jsonData : ", jsonData)



    useEffect(() => {
        // Set initial data for the first page
        setDisplayData(jsonData.slice(0, pageSize));
    }, [jsonData, pageSize]);

    const handlePageChange = (selectedPage) => {
        const offset = selectedPage * pageSize;
        setDisplayData(jsonData.slice(offset, offset + pageSize));
        dispatch(setCurrentPage(selectedPage));
    };


    return (
        <div>
            {/* Render paginated JSON data here */}
            <ul>
                {displayData.map((item, index) => (
                    <li key={index}>{JSON.stringify(item)}</li>
                ))}
            </ul>

            {/* Pagination UI using react-paginate */}
            <ReactPaginate
                previousLabel={<i className="fas fa-chevron-left"></i>} 
                nextLabel={<i className="fas fa-chevron-right"></i>}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={productTotal}
                onPageChange={(selected) => handlePageChange(selected.selected)}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
        </div>
    );
};

export default PaginationComponent;
