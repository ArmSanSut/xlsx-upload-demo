import Reat, {useState, useEffect} from 'react';
import axios from 'axios';
import XLSX from 'xlsx';
import XLSXReader from '../src/components/XLSXReader';


export default function Home() {

  return (
    <div>
      <h2>Table of Contents</h2>
      <XLSXReader/>
    </div>
  )
}
