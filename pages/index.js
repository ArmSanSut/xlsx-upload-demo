import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../actions/excelActions'
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectExcelData } from '../selectors/excelSelectors'; // Import your selector function


export default function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const excelData = useSelector(selectExcelData);
  console.log('excelData : ', excelData)

  const data = excelData.catalogues.map((catalog) => {
    console.log('catalog', catalog)
  })

  const handleState = () => {
    //handle state here while clicking the category
  };

  return (
    <div>
      <h1>Category Page</h1>
      {excelData.catalogues.length != 0 ? 
       <div>
        {excelData.catalogues.map((item) => (
          <Link href='/product'>
            <button key={item.name} onClick={handleState}>
              {item.name}
            </button>
          </Link>
        ))}
       </div>: null}
    </div>
  )
}


