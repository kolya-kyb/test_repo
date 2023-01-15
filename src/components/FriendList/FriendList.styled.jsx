import styled from "@emotion/styled";

export const Container = styled.div`
  width: 350px;
  margin-right: auto;
  margin-left: auto;
`;

export const Friends= styled.ul`

    
`;
export const Friend = styled.li`
  display: flex ;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;

img{
    width: 50px;
}
`;



export const Status = styled.span`
   width: 16px ;
   height: 16px;
   border-radius: 50%;
   background-color:${
    props =>(props.stat? 'green' : 'red')
    };
`;

export const Name = styled.p`
 min-width: 50px;
`;