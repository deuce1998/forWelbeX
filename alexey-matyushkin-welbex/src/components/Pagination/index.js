import React, {useState, useEffect} from "react";
import "./style.scss"

const Pagination = ({arrayLenght, paginateCallback = null, countPrintRows}) => {
    const [countBtns, setCountBtns] = useState(null);
    function renderPugination(){
        const list = [];
        for(let i = 0; i < Math.ceil(arrayLenght / countPrintRows); i++){
            list.push(<li key={i} className="pagination__item">
                <button type="button" className="pagination__btn"
                onClick={() => {paginateCallback(i);}}>
                   {i+1} 
                </button>
            </li>)
        }
        setCountBtns(list);
    }
    useEffect(() => {
        renderPugination();
    },[arrayLenght]);

    return(
        <ul className="pagination">
            {countBtns && arrayLenght > 1 && countBtns}
        </ul>
    )
}

export default Pagination;