import React, {useState, useEffect} from 'react';
import getWelbexRecords from '../../services/getWelbexRecords';
import PrimeTable from '../PrimeTable';
import Pagination from '../Pagination';

import './reset.scss';
import './style.scss';

function App() {
  const [welbexRecords, setWelbexRecords] = useState(null);
  const [welbexRecordsStorage, setRecordsStorage] = useState([]);
  const [column, setColumn] = useState("tw_date");
  const [filterOption, setFilterOption] = useState("=");
  const [filterValue, setFilterValue] = useState("");
  const countPrintRows = 5;
  const [firstRows, setfirstRows] = useState(0);
  function changeColumn(col){
    let records = welbexRecords &&
      [...welbexRecords].sort(function(a, b) {   
      if (a[col] > b[col]) {
        return 1;
      }
      if (a[col] < b[col]) {
        return -1;
      }
      return 0; 
    })
    records && setWelbexRecords([...records]);
  }
  function filterRecords(){
    setfirstRows(0);
    setWelbexRecords(welbexRecordsStorage);
    let arr = [];
    if (welbexRecordsStorage && filterValue.length > 0){
      switch(filterOption){
        case "=":
          arr = [...welbexRecordsStorage].filter((value) => {
            return value[column] + "" === filterValue;
          });
          return arr;
        case ">":
          arr = [...welbexRecordsStorage].filter((value) => {
            return value[column] > filterValue;
          });
          return arr; 
        case "<":
          arr = [...welbexRecordsStorage].filter((value) => {
            return value[column] < filterValue;
          });
          return arr;  
        case "like":
          arr = [...welbexRecordsStorage].filter((value) => {
            return (value[column] + "").includes(filterValue);
          });
          return arr;
        default:
          return welbexRecordsStorage;
      }
    }
    else{
      return welbexRecordsStorage;
    }
    
  }
  useEffect(() => {
    const getDate = async () => {
      const data = await getWelbexRecords();
      data && setWelbexRecords([...data]);
      data && setRecordsStorage([...data]);
      changeColumn("tw_name");
    } 
    getDate();
  }, []);
  useEffect(() => {
    let arr = [];
    arr = filterRecords();
    setWelbexRecords([...arr]);
  }, [filterOption, filterValue, column]);

  return (
    <div className="app">
      <header></header>
      <div className="container">
        <div className="opertations">
          <div className="opertations__sort">
          <p>Выберите поле для сортировки:</p>
          <label>
            <select name="select-column" id="select-column" defaultValue="tw_name" onChange={event => changeColumn(event.target.value)}>
              <option value="tw_name">Название</option>
              <option value="tw_count">Количество</option>
              <option value="tw_distance">Расстояние</option>
            </select>          
          </label>

          </div>
          <div className="opertations__filter">
            <p>Поля для фильтрации:</p>
            <div className="opertations__filter-item-wrapper">
              <label className="opertations__filter-item">
                <select name="select-column-filter" id="select-column-filter" defaultValue="tw_date" onChange={event => setColumn(event.target.value)}>
                  <option value="tw_date">Дата</option>
                  <option value="tw_name">Название</option>
                  <option value="tw_count">Количество</option>
                  <option value="tw_distance">Расстояние</option>
                </select>          
              </label>              
            </div>
            <div className="opertations__filter-item-wrapper">
              <label className="opertations__filter-item">
                <select name="select-option-filter" id="select-option-filter" defaultValue="=" onChange={event => setFilterOption(event.target.value)}>
                  <option value="=">Равно</option>
                  <option value="like">Содержит</option>
                  <option value=">">Больше</option>
                  <option value="<">Меньше</option>
                </select>            
              </label>              
            </div>

            <div className="opertations__filter-item-wrapper">
              <input type="text" name="input-filter"  className="opertations__filter-item" id="input-filter" value={filterValue} onChange={event => setFilterValue(event.target.value)}/>  
            </div>
              
          </div>
        </div>
        {welbexRecords &&
          <div className='flex-container'>
            <div className="table-wrapper">
              <PrimeTable welbexItems={[...welbexRecords].slice(firstRows * countPrintRows, firstRows * countPrintRows + 5)}/>
            </div>
            <div className='pagination-wrapper'>
              <Pagination arrayLenght={welbexRecords.length} paginateCallback={setfirstRows} countPrintRows={countPrintRows}/>
            </div>        
          </div>
        }
      </div>

    </div>
  );
}

export default App;
