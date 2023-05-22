// rafce
import React from 'react'
import './style.css';

const ClickEvent = () => {

    // const $btn1 = document.getElementById('btn1');
    // $btn1.onclick = e => {
    //     alert('클릭 잘했다!');
    // }
    const greeting = e => {
        alert('ㅎㅇㅎㅇ~~');
    };

    const changeBox = e => {
        const $box = document.querySelector('.box');
        $box.style.background = 'skyblue';
        $box.style.width = '500px';
        $box.style.height = '500px';
    };

  return (
    <>
        <button id='btn1' onClick={() => alert('클릭 잘했다!')}>클릭해봐~</button>
        <button id='btn2' onClick={greeting}>클릭2</button>
        <button id='btn3' onMouseOver={changeBox}>클릭3</button>

        <div className='box'></div>
    </>
  )
  
}

export default ClickEvent