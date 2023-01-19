console.log('Hello World');
const a = 'Hello World110';
console.log(a);
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
//
// const x = document.getElementById('x');
// x.innerText = 'Hello World';

// in webpack use axios request data
import axios from 'axios'
axios.get('/api/user').then((res) => {
    console.log(res);
}, (err) => {
    console.log(err);
});

//in webpack use vue
import {createApp} from 'vue'
console.log(createApp);

//in webpack use react
import React from 'react'
console.log(React);

import './style.css'
import './a.css'
import './rest.css'