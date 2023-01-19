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

//引入图片
// import logo from './ac.jpeg'
// console.log(logo);'

document.querySelector('#btn').addEventListener('click', () => {
    //按需加载
    import('./ac.jpeg').then((res) => {
        //创建img标签
        const img = document.createElement('img');
        //设置img的src属性
        img.src = res.default;
       document.body.append(img);
    })
})