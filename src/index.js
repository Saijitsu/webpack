// var _ = require('lodash');
import _ from 'lodash';
import './styles.css';

function component(){
    var el = document.createElement('div');
   el.innerHTML = _.join(['Hello', 'webpack!'], ' ');
   el.classList.add('element');
    return el; 
}

document.body.appendChild(component());