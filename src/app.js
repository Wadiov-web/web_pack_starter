import { sayHello, title, button } from './hello';
import './style.css';

console.log('wooow');


const getData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    return data.json();
}

button.addEventListener('click', () => console.log('clicked yess'))

console.log(getData());

sayHello();