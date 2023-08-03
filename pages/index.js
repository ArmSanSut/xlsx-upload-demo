import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../actions/excelActions'
import { useSelector } from 'react-redux';
import { selectExcelData } from '../selectors/excelSelectors'; // Import your selector function


export default function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const excelData = useSelector(selectExcelData);
  console.log('excelData : ', excelData)

  return (
    <div>
    </div>
  )
}