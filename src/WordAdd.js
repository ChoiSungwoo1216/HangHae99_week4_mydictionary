import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";

import { addWordFB } from "./redux/modules/word";

const WordAdd = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const word = React.useRef(null);
    const explanation = React.useRef(null);
    const example = React.useRef(null);


    const addWordList = () => {
        dispatch(addWordFB({ word: word.current.value, explanation: explanation.current.value, example: example.current.value, completed: false }));
    };

    const addGoBack = () => {
        window.alert("추가 완료");
        history.push("/");
        dispatch(addWordList());
    }


    return (
        <WordDiv>
            <Subtitle>단어 추가하기</Subtitle>
            <CardStyle style={{ backgroundColor: "white" }}>
                <h5 style={{ textDecoration: "underline", margin: "0px auto" }}>단어</h5>
                <Input>
                    <input type="text" ref={word} style={{ width: "300px" }} />
                </Input>
                <h5 style={{ textDecoration: "underline", margin: "0px auto" }}>설명</h5>
                <Input>
                    <input type="text" ref={explanation} style={{ width: "300px" }} />
                </Input>
                <h5 style={{ textDecoration: "underline", margin: "0px auto" }}>예시</h5>
                <Input>
                    <input type="text" ref={example} style={{ width: "300px" }} />
                </Input>
                <AddWordBtn onClick={addGoBack}>추가하기</AddWordBtn>
            </CardStyle>
        </WordDiv>
    );
};

const WordDiv = styled.div`
max-width: 450px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 auto;
`;

const Subtitle = styled.div`
    width: 325px;
    height: 50px;
    font-size: 25px;
    font-weight: 600;
    text-align: center;
    margin-top: 25px;
    color: darkviolet;
    text-decoration: underline blueviolet;
`;

const CardStyle = styled.div`
margin: 10px;
padding: 10px;
border: 20px solid lightskyblue;
border-radius: 10px;
`;

const Input = styled.div`
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

const AddWordBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
    margin-bottom: 20px;
    width: 100%;
    height: 50px;
    background-color: #673ab7;
    color: white;
    font-size: 20px;
    font-weight: bold;

`;
export default WordAdd;