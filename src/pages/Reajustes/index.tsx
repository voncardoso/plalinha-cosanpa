import { ContainerRegister, TableRegister } from "./style";
import relatorioJson from "../../objetos/relatorio01.json"
import { useState } from "react";
import LogoCosampa from "../../assets/logo-cosanpa.png"
import LogoEncibra from "../../assets/logo-encibra.png"

export function Reajustes(){
    const [teste, setTeste] = useState([])


    
    console.log(teste)
    function SplitArraySixty(){
        var resultado: any = [];
        var grupo = 0; 


        if (relatorioJson) {
            for (let i = 0; i < relatorioJson.length; i++) {
              if (resultado[grupo] === undefined) {
                resultado[grupo] = [];
              }
      
              resultado[grupo].push(relatorioJson[i]);
      
              if ((i + 1) % 10 === 0) {
                grupo = grupo + 1;
              }
            }
          }
          let totalPaginasPhoto = relatorioJson.length / 4;
          console.log(resultado)
          return resultado;
    }
    

    return(
        <ContainerRegister>
        <header>
            <img  src={LogoEncibra} alt="" />
            <h1>Gestão De Reajuste</h1>
            <img src={LogoCosampa} alt="" />
        </header>
        <div>
        {SplitArraySixty().map((item1: any) =>{
            return(
                <TableRegister>
                <thead>
                        <th className="fistTd"></th>
                        <th className="contract_id">Nº</th>
                        <th>Objeto</th>
                        <th>Contrato</th>
                        <th>Aditivo</th>
                        <th>Total Contratado</th>
                        <th>Reequilibrio</th>
                        <th>Total II</th>
                        <th>Reaguste Pago</th>
                        <th>Reajuste Projetado</th>
                        <th>Custo Total</th>
                        <th>Meidido</th>
                        <th>Saldo a medir</th>
                </thead>

                <tbody>
                    {item1.map((item: any, index: number) =>{
                       return(
                                <>

                                <tr>
                                    <td className="fistTd">{index}</td>
                                    <td className="contract_id">{item.contract_id}</td>
                                    <td className="ObjetoTd">
                                       {item.contract_object}
                                    </td>
                                    <td>{561651651}</td>
                                    <td>{item.contract_value}</td>
                                    <td>{item.additive_value}</td>
                                    <td>{15156165}</td>
                                    <td>0561560165651</td>
                                    <td>{365165165165}</td>
                                    <td>{item.readjustment}</td>
                                    <td>{554464646846464}</td>
                                    <td>{1561651}</td>
                                    <td>{item.payment}</td>
                                </tr>
                            </>
                       )
                    })}
                </tbody>
                </TableRegister> 
                )
        })}
        </div>
        
        </ContainerRegister> 

    )
}