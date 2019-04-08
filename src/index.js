// var _ = require('lodash');
import _ from 'lodash';
import './styles.css';
import afficherMoi from './afficher';

function component(){
    var el = document.createElement('div');
   el.innerHTML = _.join(['Hello', 'webpack!'], ' ');
   var button= document.createElement('button');
   button.innerHTML = ("Click on me, look at the console.log!");
   button.onclick = afficherMoi;
   el.classList.add('element');
   el.appendChild(button);
    return el; 
}

document.body.appendChild(component());