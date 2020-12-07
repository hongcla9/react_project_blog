import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
//데이터바인딩이 쉽다! -> {}를넣으면 데이터가 넣어짐!
//이미지 넣고싶을땐 임포트하고 중괄호넣으면 가능
function App() {

  let [글제목,글제목변경] = useState(['남자코트추천','강남 우동맛집','파이선독학']);
  let [따봉,따봉변경] = useState([0,0,0]);
  let [modal,modal변경] =useState(true);
  let [누른제목,누른제목변경] = useState(0);
  let [입력값 , 입력값변경] = useState('');

function 좋아요(i) {
  var newArray=[...따봉];
  newArray[i]=newArray[i]+1;
  따봉변경(newArray);
}


  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
  
    

 {
   글제목.map(function(글,i) {
     return (
       <div className="list">
         <h3 onClick={ () => {누른제목변경(i)} }> {글} 
         <span onClick= { ()=>{ 좋아요(i) }}>👍</span>{따봉[i]} </h3>
         <p>9월19일</p>
         <hr/>
         </div>
     )
   })
 }

<div className="publish">
  <input onChange={(e)=>{입력값변경(e.target.value) }}/>
  <button onClick={ ()=>{
    var  arrayCopy = [...글제목];
    arrayCopy.unshift(입력값);
    글제목변경(arrayCopy);
  } }>저장</button>
</div>

  <button onClick= {()=>modal변경(!modal)}>열고닫기</button>

 {
modal === true
  ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
  : null
}
</div>
);
}

function Modal(props){
return (
<div className='modal'>
<h2>{ props.글제목[props.누른제목] } </h2>
<p>날짜</p>
<p>상세내용</p>
</div>
)
}

export default App;