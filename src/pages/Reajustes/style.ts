import styled from "styled-components";

export const ContainerRegister = styled.main`
  width: 1180px;
  margin: 0 auto;
  font-size: 10px;
  padding: 0px 10px 0px 20px;
  header {
    display: flex;
    width: 1100px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 10px;

    h1 {
      font-size: 1rem;
    }
    img {
      width: 40px;
    }

    .logoEncibra {
      width: 200px;
    }
  }
`;

export const TableRegister = styled.table`
  border-collapse: collapse;
  border: 1px solid black;
  text-align: center;
  margin: 0 auto;
  position: relative;
  top: 10px;
  thead {
    background: ${(props) => props.theme["green"]};
    border: 1px solid black;
    th {
      min-width: 90px;
      border: 1px solid black;
      padding: 5px;
      color: ${(props) => props.theme["whithe"]};
      font-weight: 400;
    }
  }

  tbody {
    width: 100%;
    border: 1px solid black;
    page-break-inside: avoid;
    page-break-after: auto;
    tr {
      background: ${(props) => props.theme["whithe"]};
      border-bottom: 1px solid red;
      td {
        border: 1px solid black;
        padding: 5px;
        min-width: 94px;
        max-width: 94px;
        height: 72px;
        font-size: 8px;
      }
    }
  }

  & + table {
    position: relative;
    margin-top: 30px;
    margin-bottom: 60px;
    top: 30px;
  }

  &::last-child {
    color: red;
  }

  .totais {
  }

  .ObjetoTd {
    width: 100px;
    padding: 2px;
  }

  .fistTd {
    min-width: 20px;
    max-width: 40px;
    font-weight: bold;
  }

  .contract_id {
    min-width: 40px;
  }

  .tdHeigth {
    height: 700px;
    margin-bottom: 20px;
  }
`;

export const TableRegisterTotais = styled.div`
  width: 100%;
  margin-bottom: 60px;
  table {
    width: 1100px;
    padding: 0px 0px;
    border-collapse: collapse;
    border: 1px solid black;
    text-align: center;
    margin: 0 auto;

    .fistTd {
      max-width: 20px;
      font-weight: bold;
    }
  }
`;

export const TrTotais = styled.tr`
  td {
    border: 1px solid black;
    background: ${(props) => props.theme["green-200"]};
    color: ${(props) => props.theme["whithe"]};
    font-size: 8px;
    padding: 5px;
    font-weight: bold;
    letter-spacing: 0.2px;
  }
`;
