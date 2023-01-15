import styled from "@emotion/styled";

export const  Profil = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 50px;
        border-radius: 25px;
        background-color: darkgrey;
    }
`;

export const ProfileDeckription = styled.div`
     width: 350px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Name = styled.p`
        font-weight: 700;

`;
export const Tag = styled.p`
     font-weight: 400;
`;
export const Location = styled.p`
     font-weight: 400;
`
export const Statistic = styled.ul`
    display: flex;
    gap: 16px;
  
`;
export const StatisticItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80px;
    background-color: cornflowerblue;
    padding: 5px;
    border-radius: 5px;
`;

export const StatsInfo = styled.span`
    font-weight: 400;
`;