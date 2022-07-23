import React from "react";
import './style.scss';



const PrimeTable  = ({welbexItems}) => {
    const formatDate = (strDate) => {
        const date = new Date(strDate).getDay() + '.'
        + new Date(strDate).getMonth() + '.'
        + new Date(strDate).getFullYear();
        return date;
    }

    return(
        <table className="prime-table">
            <thead className="prime-table__head">
                <tr className="prime-table__row">
                    <th className="prime-table__column">Дата</th>
                    <th className="prime-table__column">Название</th>
                    <th className="prime-table__column">Количество</th>
                    <th className="prime-table__column">Расстояние</th>
                </tr>
            </thead>
            <tbody className="prime-table__body">
                {
                welbexItems && welbexItems.length > 0 ? [...welbexItems].map((item,index) => 
                    <tr key={index} className="prime-table__row">
                        <td className="prime-table__column">{formatDate(item.tw_date)}</td>
                        <td className="prime-table__column">{item.tw_name}</td>
                        <td className="prime-table__column">{item.tw_count}</td>
                        <td className="prime-table__column">{item.tw_distance}</td>
                    </tr>
                ) :
                <tr>
                    <td>Таблица пуста ...</td>
                </tr>
                }
            </tbody>
        </table>
    )
}

export default PrimeTable;