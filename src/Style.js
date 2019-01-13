import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    .post-list {
        list-style-type: none;
        display: flex;
        
    }
    body {
        font-family: 'Courier New'
    }
    form {
        text-align: center;
        max-width: 1200px;
        margin: 0 auto;
    }
    h1 {
      text-align: center
    }
    span {
        font-size: 12px;
        margin-left: 50px
    }
    
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const P = styled.p`
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
`;

export const H2 = styled.h2`
  font-size: 18px;
`;

export const LI = styled.li`
  margin: 10px;
  border: 1px solid black;
  text-align: center;
  border-radius: 10px;
`;
