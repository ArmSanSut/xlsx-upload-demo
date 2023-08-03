import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

const XLSXReader = () => {
  
  //   const [data, setData] = useState([]);
  //   const [category, setCategory] = useState([]);

  //   useEffect(() => {
  //     const fetchAndReadXLSX = async () => {
  
  //       try {
  //         const response = await fetch('/assets/ProductCatalogue.xlsx');
  //         const data = await response.arrayBuffer();
  //         const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });

  //         const sheetName = workbook.SheetNames[0];
  //         const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
         
  //         setData(sheetData);
  //         setCategory(workbook.Sheets)
  //       } catch (error) {
  //         console.error('Error reading XLSX file:', error.message);
  //       }
  //     };


  
  //     fetchAndReadXLSX();


  //   }, []);

  // const keys = Object.keys(category)

  // console.log('keys', keys)

  // console.log('category', category)
  // console.log('data', data)


  return (
    <div>
      TEST
    </div>
    
    // <div>
    //   <div>
    //     <ul>
    //       {keys.map((val, index) => (
    //         <li key={index}>{val}</li>
    //       ))}
    //     </ul>
    //     <ul>
    //       {data.map((row, index) => (           
    //         <div key={index}>
    //           {JSON.stringify(row.ชื่อสินค้า)}
    //         </div>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
  );
};

export default XLSXReader;
