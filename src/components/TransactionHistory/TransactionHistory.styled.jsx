import styled from "@emotion/styled";

export const Container = styled.div`
    max-width: 350px;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
`;

export const Table =styled.table`
  	width: 100%;
	border: none;
	margin-bottom: 20px;  
`;

export const TitleTable = styled.thead`
   th {
    font-weight: bold;
	text-align: left;
	border: none;
	padding: 10px 15px;
	background: #d8d8d8;
	font-size: 14px;
   } 
   th:first-child {
	border-radius: 8px 0 0 8px;
}
th:last-child {
	border-radius: 0 8px 8px 0;
}
`;

export const DataTable = styled.tbody`
   td {
	text-align: left;
	border: none;
	padding: 10px 15px;
	font-size: 14px;
	vertical-align: top;
}

tr:nth-child(even){
	background: #f3f3f3;
}

td:first-child {
	border-radius: 8px 0 0 8px;
}
td:last-child {
	border-radius: 0 8px 8px 0;
}
`;