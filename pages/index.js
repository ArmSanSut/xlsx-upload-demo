import Reat, {useState, useEffect} from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';


export default function Home() {

  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
      const fetchAndReadXLSX = async () => {
  
        try {
          const response = await fetch('/assets/ProductCatalogue.xlsx');
          const data = await response.arrayBuffer();
          const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });

          console.log('workbook', workbook)

          const sheetName = workbook.SheetNames[0];
          const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
         
          setData(sheetData);
          setCategory(workbook.Sheets)
        } catch (error) {
          console.error('Error reading XLSX file:', error.message);
        }
      };
  
      fetchAndReadXLSX();
  }, []);
  console.log('data',data)

  return (
    <div>
    </div>
  )
}
