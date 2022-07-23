import axios from 'axios';

const getWelbexRecords = () =>{
    const data = axios.get('http://localhost:3001')
    .then(response => response.data)
    .catch(e => {
        console.log(e);
        console.log("Проверьте API и подключение к СУБД");
    });
    return data;
}

export default getWelbexRecords;