import { useEffect } from "react";
import { HomeContainer, HomeHeader, HomeHeaderSection, HomeSection, HomeTableSection, HomeTableTbody, HomeTableThead, HomeTableTheadTotal, HomeTitleTable } from "./style";



export function Obra(){
    return(
        <HomeContainer>
        <HomeHeader>
            <h4>Contratos</h4>
        </HomeHeader>

        <HomeSection>
            <HomeHeaderSection>
                <h2>Cosanpa</h2>
                <p>OBRAS POR CONTRATO</p>
            </HomeHeaderSection>
            <HomeTableSection>
                <HomeTableThead>
                    <tr>
                        <th>FONTE/CONTRATOS DE REPASSE</th>
                        <th>FINACIAMNETO</th>
                        <th>ADITIVOS</th>
                        <th>VALOR ATUAL</th>
                        <th>MEDIDO</th>
                        <th>SALDO</th>
                    </tr>
                </HomeTableThead>
                <HomeTableTbody>
                    <tr>
                        <td colSpan={6} align="justify">
                            <strong>ANANINDEU</strong>
                        </td>
                    </tr>
                    <tr className="dados">
                        <td >
                            <p>156.320,48</p>
                            <div>
                                <p>CONSORCIO ANANINDEU 31/01/2018 31/01/2024</p>
                            </div>  
                        </td>
                        <td>
                            <span>0.000%</span>    
                        </td>
                        <td>
                            <p>R$0,00</p>  
                        </td>
                        <td>
                            <p>R$0,00</p>   
                        </td>
                        <td>
                            <p>R$0,00</p>   
                        </td>
                        <td>
                            <p>R$0,00</p>   
                        </td>
                    </tr>
                    <tr className="dados">
                        <td >
                            <div>
                                <p>Nome da obra</p>
                                <span>PAC II - CONTROLE DE REPASSE</span> 
                            </div>  
                        </td>
                        <td>
                            <span>0.000%</span>    
                        </td>
                        <td>
                            <p>R$0,00</p>  
                        </td>
                        <td>
                            <p>R$0,00</p>   
                        </td>
                        <td>
                            <p>R$0,00</p>   
                        </td>
                        <td>
                            <p>R$0,00</p>   
                        </td>
                    </tr>

                    <tr>
                        <td colSpan={6} align="justify">
                            <strong>ANANINDEU</strong>
                        </td>
                    </tr>
                    <tr className="dados">
                        <td >
                            <p>156.320,48</p>
                            <div>
                                <p>CONSORCIO ANANINDEU 31/01/2018 31/01/2024</p>
                            </div>  
                        </td>
                        <td>
                            <span>0.000%</span>    
                        </td>
                        <td>
                            <p>R$0,00</p>  
                        </td>
                        <td>
                            <p>R$0,00</p>   
                        </td>
                        <td>
                            <p>R$0,00</p>   
                        </td>
                        <td>
                            <p>R$0,00</p>   
                        </td>
                    </tr>
                    <tr className="dados">
                        <td >
                            <div>
                                <p>Nome da obra</p>
                                <span>PAC II - CONTROLE DE REPASSE</span> 
                            </div>  
                        </td>
                        <td>
                            <span>0.000%</span>    
                        </td>
                        <td>
                            <p>R$0,00</p>  
                        </td>
                        <td>
                            <p>R$0,00</p>   
                        </td>
                        <td>
                            <p>R$0,00</p>   
                        </td>
                        <td>
                            <p>R$0,00</p>   
                        </td>
                    </tr>


                    <tr>
                        <td colSpan={6} align="justify">
                            <strong>ANANINDEU</strong>
                        </td>
                    </tr>
                    <tr className="dados">
                        <td >
                            <p>156.320,48</p>
                            <div>
                                <p>CONSORCIO ANANINDEU 31/01/2018 31/01/2024</p>
                            </div>  
                        </td>
                        <td>
                            <span>0.000%</span>    
                        </td>
                        <td>
                            <p>R$0,00</p>  
                        </td>
                        <td>
                            <p>R$0,00</p>   
                        </td>
                        <td>
                            <p>R$0,00</p>   
                        </td>
                        <td>
                            <p>R$0,00</p>   
                        </td>
                    </tr>
                    <tr className="dados">
                        <td >
                            <div>
                                <p>Nome da obra</p>
                                <span>PAC II - CONTROLE DE REPASSE</span> 
                            </div>  
                        </td>
                        <td>
                            <span>0.000%</span>    
                        </td>
                        <td>
                            <p>R$0,00</p>  
                        </td>
                        <td>
                            <p>R$0,00</p>   
                        </td>
                        <td>
                            <p>R$0,00</p>   
                        </td>
                        <td>
                            <p>R$0,00</p>   
                        </td>
                    </tr>

                 
                </HomeTableTbody >
                <HomeTableTheadTotal>
                    <tr>
                        <th>TOTAL</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>0.00</th>
                    </tr>
                </HomeTableTheadTotal>
            </HomeTableSection>
        </HomeSection>
    </HomeContainer>
    )
}