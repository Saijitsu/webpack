// var _ = require('lodash');
import _ from 'lodash';
import './styles.css';
import afficherMoi from './afficher';
import { User } from './user.ts';

function component() {
    var el = document.createElement('div');
    el.innerHTML = _.join(['Hello', 'webpack!'], ' ');
    var button = document.createElement('button');
    var ADOLPH = new User('Adolph', 'adolph@mail.com', 601020102);
    var text = document.createElement('p');
    button.innerHTML = ("Click on me, look at the console.log!");
    el.appendChild(text);
    text.innerHTML = ADOLPH.textMe();
    button.innerHTML = ("Click on me, look at the console.log!");
    button.onclick = afficherMoi;
    el.classList.add('element');
    el.appendChild(button);
    return el;
}

document.body.appendChild(component());

if (module.hot) {
    module.hot.accept('./afficher.js', function () {
        // Do something with the updated afficher module...
        console.log("C'est hot!");
        document.removeChild(el);
        el = component();
        document.body.appendChild(component());
    });
}