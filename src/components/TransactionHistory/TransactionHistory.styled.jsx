import styled from "@emotion/styled";

export const Container = styled.div`
    max-width: 350px;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
`;

export const Table =styled.table`
 width: 100%;
	margin-bottom: 20px;
	border: 1px solid #dddddd;
	border-collapse: collapse;
`;

export const TitleTable = styled.thead`
   th {
	font-weight: bold;
	padding: 5px;
	background: #efefef;
	border: 1px solid #dddddd
   } 

`;

export const DataTable = styled.tbody`
   td {
	border: 1px solid #dddddd;
	padding: 5px;
}


`;