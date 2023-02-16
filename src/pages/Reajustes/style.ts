import styled from "styled-components";

export const ContainerRegister = styled.main`
    width: 1180px;
    margin: 0 auto;
    font-size: 10px;
    padding: 0px 10px 0px 20px;
    height: 100vh;
    

    header{
        display: flex;
        width: 1100px;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        padding: 10px;

        h1{
            font-size: 1rem;
        }
        img{
            width: 40px;
        }

        .logoEncibra{
            width: 200px;
        }
    }
`


export const TableRegister = styled.table`
    padding: 0px 0px;
    border-collapse: collapse;
    border: 1px solid black;
    text-align: center;
    margin: 0 auto;
    thead{
        margin-top: 10px;
        background: ${(props) => props.theme["green"]};
        border: 1px solid black;
        th{
       
            min-width: 90px;
            border: 1px solid black;
            padding: 5px;
            color: ${(props) => props.theme["whithe"]};
            font-weight: 400;
        }
    }

    tbody{
        width: 100%;
        margin-bottom: 60px;
        border: 1px solid black;
            tr{
                background: ${(props) => props.theme["whithe"]};
                border-bottom: 1px solid red;
            td{
                border: 1px solid black;
                padding: 5px;
                min-width: 94px;
                max-width: 94px;
                height: 72px;
                font-size: 8px;

            }

        }   

    }


     & + table{
        position: relative;
        margin-top: 30px;
        margin-bottom: 60px;
        top: 30px;

    }

    .totais{
    }

    .ObjetoTd{
        width: 100px;
        padding: 2px;
    }

    .fistTd{
            min-width: 20px;
            max-width: 40px;
            font-weight: bold;
    }

    .contract_id{
        min-width: 40px;
    }
`