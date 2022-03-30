import { fetchData } from './utils/data.service.js'
import './main.css';

const containerList = document.querySelectorAll('.container-cards');
const toggleButton = document.getElementById('check');
const json = fetchData();

const reRender = ( month ) => {
    toggleButton.addEventListener('click', (event) => {
        month = toggleButton.checked;
        styleCards(containerList, json.data, month)
    })
}

const styleCards = (list, data, month) => {

    for( let i = 0; i < list.length; i++) {

        list[i].addEventListener('click', () => {
            list[i].classList.toggle('focus');
            list[i].children[1].classList.toggle('bold');
            list[i].children[3].classList.toggle('change');
            list[i].children[3].classList.toggle('no-change');

            list.forEach(element => {
                if( element != list[i]) {
                    element.classList.remove('focus');
                    element.children[1].classList.add('bold');
                    element.children[3].classList.remove('change');
                    element.children[3].classList.add('no-change');
                }
            });
        });

        if( month ) {
            list[i].innerHTML = `
            <h4>${data[i].title}</h4>
            <h2 class="bold"><span>&dollar;</span>${data[i].mount.month}</h2>
            <div class='info'>
                <p>${data[i].storage} Storage</p>
                <p>${data[i].users} Users Allowed</p>
                <p>Send up to ${data[i].send}</p>
            </div>
            <button class="no-change">learn more</button>
        `;
        }
        else {
            list[i].innerHTML = `
            <h4>${data[i].title}</h4>
            <h2 class="bold"><span>&dollar;</span>${data[i].mount.year}</h2>
            <div class='info'>
                <p>${data[i].storage} Storage</p>
                <p>${data[i].users} Users Allowed</p>
                <p>Send up to ${data[i].send}</p>
            </div>
            <button class="no-change">learn more</button>
        `;
        }
    }
}

reRender();
styleCards(containerList, json.data, false);