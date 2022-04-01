import { fetchData } from './utils/data.service.js'
import './main.css';

const containerList = document.querySelectorAll('.container-cards');
const toggleButton = document.getElementById('check');
const json = fetchData();

const reset = (list, data) => {
    toggleButton.addEventListener('click', (event) => {
        list.forEach(element => {
            let month = toggleButton.checked;
            element.classList.remove('focus')
            render(list, data, month)
        });
    })
}

const styleCards = (list, data) => {

    for( let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', () => {
            list[i].classList.toggle('focus');
            list.forEach(element => {
                if( element != list[i]) {
                    element.classList.remove('focus');
                }
            });
        });
    }
    render(list, data, false)
}

const render = (list, data, month) => {
    if( month ) {
        for( let i = 0; i < list.length; i++) {
            list[i].innerHTML = `
            <h4>${data[i].title}</h4>
            <h2><span>&dollar;</span>${data[i].mount.month}</h2>
            <div class='info'>
                <p>${data[i].storage} Storage</p>
                <p>${data[i].users} Users Allowed</p>
                <p>Send up to ${data[i].send}</p>
            </div>
            <button>learn more</button>
            `;
        }
    }
    else {
        for( let i = 0; i < list.length; i++) {
            list[i].innerHTML = `
            <h4>${data[i].title}</h4>
            <h2><span>&dollar;</span>${data[i].mount.year}</h2>
            <div class='info'>
                <p>${data[i].storage} Storage</p>
                <p>${data[i].users} Users Allowed</p>
                <p>Send up to ${data[i].send}</p>
            </div>
            <button>learn more</button>
        `;
        }
    }
}

reset(containerList,json.data);
styleCards(containerList, json.data);