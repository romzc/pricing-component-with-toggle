import { fetchData } from './utils/data.service.js'
import './main.css';

const root = document.getElementById('root');

const showData = async () => {
    let value = await fetchData('src/data/data.json');
    console.log(value)
};




showData();