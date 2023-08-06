import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../actions/excelActions'
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectExcelData } from '../selectors/excelSelectors'; // Import your selector function
import { selectpagination } from '../selectors/paginationSelectors';
import { setSelectedCategory, setProductTotal, setTotalItems } from '../actions/paginationActions';
import Router from 'next/router';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const excelData = useSelector(selectExcelData);
  const { selectedCategory, productTotal, currentPage, itemsPerPage } = useSelector(selectpagination);
  console.log('excelData : ', excelData)
  console.log('selectedCategory : ', selectedCategory)
  console.log('productTotal : ', productTotal)
  console.log('currentPage : ', currentPage)
  console.log('itemsPerPage : ', itemsPerPage)

  const data = excelData.catalogues.map((catalog) => {
    console.log('catalog', catalog)
  })

  const handleState = (item) => {
    //handle state here while clicking the category

    Router.push({
      pathname: "/product",
      query: { catname: item.name }
    })
    
    const categoryName = item.name
    const allProducts = item.products.length
    dispatch(setSelectedCategory(categoryName));
    dispatch(setProductTotal(Math.ceil(allProducts / 9)));
    dispatch(setTotalItems(allProducts))
  };
  const postUrl = `/product/${selectedCategory}`;

  return (
    <div>
      <h1>Category Page</h1>
      {excelData.catalogues.length != 0 ?
        <div>
          {excelData.catalogues.map((item) => (
            <button key={item.name} onClick={() => handleState(item)}>
              {item.name}
            </button>
          ))}
        </div> : null}
    </div>
  )
}


