import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {useRouter} from 'next/router';
import { selectExcelData } from '../selectors/excelSelectors'; // Import your selector function

function ProductPage() {

  const router = useRouter()
  const [catalogName,setCatalogName]= useState();

  const excelData = useSelector(selectExcelData);

  useEffect(() => {
    // // tranform data
    setCatalogName(router.query.catname)
    console.log(router.query.catname);  
}, [ router.query.catname])
  return (
    <>
      <div>This is Product Page for {catalogName}</div>
    </>
  )
}

export default ProductPage;