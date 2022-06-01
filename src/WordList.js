import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const WordList = (props) => {
  const history = useHistory();
  const my_lists = useSelector((state) => state.word.list);

  return (
    <ListStyle>
      {my_lists.map((list, index) => {
        return (
          <CardStyle  key={index} onClick={() => {
            history.push("/update/" + index);
          }}>
            <h5 style={{ textDecoration: "underline", marginBottom: "5px" }}>단어</h5>
            <ItemStyle>
              {list.word}
            </ItemStyle>
            <h5 style={{ textDecoration: "underline", marginBottom: "5px" }}>설명</h5>
            <ItemStyle>
              {list.explanation}
            </ItemStyle>
            <h5 style={{ textDecoration: "underline", marginBottom: "5px" }}>예시</h5>
            <ExampleStyle>
              {list.example}
            </ExampleStyle>
          </CardStyle>
        );
      })}
      <AddBtn onClick={() => {
        history.push("/add/");
      }}
      >+</AddBtn>
    </ListStyle>
  );
};



const ListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  padding: 30px 0;
  overflow-x: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

`;

const CardStyle = styled.div`
position: relative;
width: calc((100% - (20px*3 + 90px*2)) / 4);
max-width: 100%;
background-color: rgba(255,255,255,0.5);
padding: 20px;
border: 2px solid blueviolet;
border-radius: 10px;

transition: box-shadow 300ms ease-in-out;
&:hover {
  background-color: rgba(255,255,255,0.8);
  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px 0px;
}
`;

const ItemStyle = styled.div`
  font-size: x-large;
`;

const ExampleStyle = styled.div`
  color: blue;
  font-size: x-large;
  margin-bottom: 20px;
`;

const AddBtn = styled.div`

position: fixed;
bottom: 5vh;
right: 5vw;

width: 50px;
height: 50px;
border-radius: 50px;
background-color: #673ab7;
padding: 25px, 25px;
color: white;
line-height: 55%;
text-align: center;
font-size: 65px;
font-weight: bold;

transition: transform 300ms ease-in-out;
&:hover {
  transform: rotate(90deg);
}
`;

export default WordList;