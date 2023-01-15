import styled from "@emotion/styled";

const colorRandom= () => Math.floor(Math.random() * 16777215).toString(16);

export const Container =styled.section`
      width: 350px;
        margin: 50px auto;
        text-align: center;
`;
export const StatList = styled.ul`
      display: flex;
    justify-content: center;
`;
export const StatListItem = styled.li`
      display: flex;
    flex-direction: column  ;
   width: 100%;
    background-color: #${colorRandom};
`;