import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectExcelData } from '../selectors/excelSelectors'; // Import your selector function

function ProductPage() {

  const excelData = useSelector(selectExcelData);
  return (
    <div>This is Product Page</div>
  )
}

export default ProductPage;