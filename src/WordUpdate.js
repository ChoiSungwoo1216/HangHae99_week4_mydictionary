import React from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteWordFB, updateWordFB } from "./redux/modules/word";


const WordUpdate = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const word_index = params.index;
  const word_list = useSelector((state) => state.word.list);

  const wordRef = React.useRef(null);
  const explanationRef = React.useRef(null);
  const exampleRef = React.useRef(null);

  const UpdateWordList = () => {
    dispatch(updateWordFB({
      word: wordRef.current.value,
      explanation: explanationRef.current.value,
      example: exampleRef.current.value,
    }, word_list[word_index].id))
    window.alert("수정 완료")
    history.push("/")
  }

  return (
    <WordDivD>
      <SubtitleD>단어 추가하기</SubtitleD>
      <CardStyleD style={{ backgroundColor: "white" }}>
        <h5 style={{ textDecoration: "underline", margin: "0px auto" }}>단어</h5>
        <InputD>
          <input type="text" ref={wordRef} defaultValue={word_list[word_index].word} style={{ width: "300px" }}/>
        </InputD>
        <h5 style={{ textDecoration: "underline", margin: "0px auto" }}>설명</h5>
        <InputD>
          <input type="text" ref={explanationRef} defaultValue={word_list[word_index].explanation } style={{ width: "300px" }} />
        </InputD>
        <h5 style={{ textDecoration: "underline", margin: "0px auto" }}>예시</h5>
        <InputD>
          <input type="text" ref={exampleRef} defaultValue={word_list[word_index].example} style={{color: "blue", width: "300px"}}/>
        </InputD>
        <button onClick={UpdateWordList}>수정하기</button>
        <button
          onClick={() => {
            dispatch(deleteWordFB(word_list[word_index].id));
            window.alert("삭제 완료")
            history.push("/");
          }}
          style={{float: "right"}}
        >
          삭제하기
        </button>
      </CardStyleD>
    </WordDivD>
  );
};


const WordDivD = styled.div`
max-width: 450px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 auto;
`;

const SubtitleD = styled.div`
    width: 325px;
    height: 50px;
    font-size: 25px;
    font-weight: 600;
    text-align: center;
    margin-top: 25px;
    color: darkviolet;
    text-decoration: underline blueviolet;
`;

const CardStyleD = styled.div`
margin: 10px;
padding: 10px;
border: 20px solid lightskyblue;
border-radius: 10px;
`;

const InputD = styled.div`
  width: 300px;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 16px auto;
  display: flex;
  & input{
    border: 1px solid #888;
    width: 70%;
  }
  
  & input:focus {
    outline: none;
    border: 3px solid #888;
  }
`;

export default WordUpdate;