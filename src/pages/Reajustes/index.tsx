import { useState } from "react";
import { priceFormatter } from "../../utils/formatter";
import {
  ContainerRegister,
  TableRegister,
  TableRegisterTotais,
  TrTotais,
} from "./style";
import LogoCosampa from "../../assets/logo-cosanpa.png";
import LogoEncibra from "../../assets/logo-encibra.png";

import relatorioJson from "../../objetos/relatorio01.json";

export function Reajustes() {
  const [teste, setTeste] = useState([]);

  let countItem = 0;

  const total = relatorioJson.reduce(
    (acc, value) => {
      acc.totalContrato += value.contract_value;
      acc.totalAditivo += value.additive_value;
      acc.totalRequilibrio += value.rebalancing;
      acc.totalReajuste += value.readjustment;

      acc.total2 +=
        value.contract_value + value.additive_value + value.rebalancing;

      acc.totalContratado += value.contract_value + value.additive_value;
      acc.totalRerajusteProjetado += value.project_value;

      acc.totalCusto +=
        value.contract_value + value.additive_value + value.rebalancing;
      +value.readjustment + value.project_value;

      acc.totalMedido += value.payment;
      return acc;
    },
    {
      totalContrato: 0,
      totalAditivo: 0,
      totalRequilibrio: 0,
      totalReajuste: 0,
      total2: 0,
      totalContratado: 0,
      totalRerajusteProjetado: 0,
      totalCusto: 0,
      totalMedido: 0,
    }
  );

  function SplitArraySixty() {
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
    console.log(resultado);
    return resultado;
  }

  return (
    <ContainerRegister>
      <header>
        <img src={LogoEncibra} alt="" />
        <h1>Gestão De Reajuste</h1>
        <img src={LogoCosampa} alt="" />
      </header>
      <div>
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
          {SplitArraySixty().map((item1: any) => {
            return (
              <tbody>
                {item1.map((item: any, index: number) => {
                  let contratado = item.contract_value + item.additive_value;
                  countItem++;
                  return (
                    <>
                      <tr>
                        <td className="fistTd">{countItem}</td>
                        <td className="contract_id">{item.contract_id}</td>
                        <td className="ObjetoTd">{item.contract_object}</td>
                        <td>{priceFormatter.format(item.contract_value)}</td>
                        <td>{priceFormatter.format(item.additive_value)}</td>
                        <td>
                          {priceFormatter.format(
                            item.contract_value + item.additive_value
                          )}
                        </td>
                        <td>{priceFormatter.format(item.rebalancing)}</td>
                        <td>
                          {priceFormatter.format(
                            item.contract_value +
                              item.additive_value +
                              item.rebalancing
                          )}
                        </td>
                        <td style={{ color: "#F26B66" }}>
                          {priceFormatter.format(item.readjustment)}
                        </td>
                        <td style={{ color: "#64C1F5" }}>
                          {priceFormatter.format(item.project_value)}
                        </td>
                        <td>
                          {priceFormatter.format(
                            item.contract_value +
                              item.additive_value +
                              item.rebalancing +
                              item.readjustment +
                              item.project_value
                          )}
                        </td>
                        <td>{priceFormatter.format(item.payment)}</td>
                        <td>
                          {priceFormatter.format(contratado - item.payment)}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            );
          })}
          <TrTotais>
            <td colSpan={3}>Total</td>
            <td>{priceFormatter.format(total.totalContrato)}</td>
            <td>{priceFormatter.format(total.totalAditivo)}</td>
            <td>{priceFormatter.format(total.totalContratado)}</td>
            <td>{priceFormatter.format(total.totalRequilibrio)}</td>
            <td>{priceFormatter.format(total.total2)}</td>
            <td>{priceFormatter.format(total.totalReajuste)}</td>
            <td>{priceFormatter.format(total.totalRerajusteProjetado)}</td>
            <td>{priceFormatter.format(total.totalCusto)}</td>
            <td>{priceFormatter.format(total.totalMedido)}</td>
            <td>
              {priceFormatter.format(total.totalContratado - total.totalMedido)}
            </td>
          </TrTotais>
        </TableRegister>
      </div>
    </ContainerRegister>
  );
}
