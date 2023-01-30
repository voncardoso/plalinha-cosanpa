import {useNavigate} from "react-router-dom"
import { 
    HomeContainer, 
    HomeHeader, 
    HomeHeaderSection, 
    HomeSection, 
    HomeTableSection, 
    HomeTableTbody, 
    HomeTableThead, 
    HomeTableTheadTotal, 
    HomeTitleTable 
} from "./style";

export function Home(){
    const navigate = useNavigate()
    return(
        <HomeContainer>
            <HomeHeader>
                <h4>Contratos</h4>
            </HomeHeader>

            <HomeSection>
                <HomeHeaderSection>
                    <h2>Cosanpa</h2>
                    <p>CONTRATOS DE REPASSE POR FONTE DE FINANCIAMENTO EXTERNO</p>
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
                            <td colSpan={6} align="center">
                                <strong>CEF I</strong>
                                <p>R$ 0.00</p>
                            </td>
                        </tr>
                        <tr className="dados" onClick={() =>{
                                console.log("teste")
                               navigate("/obra")
                            }}>
                            <td >
                                <p>156.320,48</p>
                                <div>
                                    <p>CONTRATO: 42-2017 - R$0,00</p>
                                    <span>CASTANHAL</span> 
                                </div>  
                            </td>
                            <td>
                                <p style={{marginBottom: "2px"}}>R$0,00</p>
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
                                <p>156.320,48</p>
                                <div>
                                    <p>CONTRATO: 42-2017 - R$0,00</p>
                                    <span>CASTANHAL</span> 
                                </div>  
                            </td>
                            <td>
                                <p style={{marginBottom: "2px"}}>R$0,00</p>
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
                                <p>156.320,48</p>
                                <div>
                                    <p>CONTRATO: 42-2017 - R$0,00</p>
                                    <span>CASTANHAL</span> 
                                </div>  
                            </td>
                            <td>
                                <p style={{marginBottom: "2px"}}>R$0,00</p>
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
                            <td colSpan={6} align="center">
                                <strong>CEF I</strong>
                                <p>R$ 0.00</p>
                            </td>
                        </tr>
                        <tr className="dados">
                            <td >
                                <p>156.320,48</p>
                                <div>
                                    <p>CONTRATO: 42-2017 - R$0,00</p>
                                    <span>CASTANHAL</span> 
                                </div>  
                            </td>
                            <td>
                                <p style={{marginBottom: "2px"}}>R$0,00</p>
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
                                <p>156.320,48</p>
                                <div>
                                    <p>CONTRATO: 42-2017 - R$0,00</p>
                                    <span>CASTANHAL</span> 
                                </div>  
                            </td>
                            <td>
                                <p style={{marginBottom: "2px"}}>R$0,00</p>
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
                                <p>156.320,48</p>
                                <div>
                                    <p>CONTRATO: 42-2017 - R$0,00</p>
                                    <span>CASTANHAL</span> 
                                </div>  
                            </td>
                            <td>
                                <p style={{marginBottom: "2px"}}>R$0,00</p>
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
                            <td colSpan={6} align="center">
                                <strong>CEF I</strong>
                                <p>R$ 0.00</p>
                            </td>
                        </tr>
                        <tr className="dados">
                            <td >
                                <p>156.320,48</p>
                                <div>
                                    <p>CONTRATO: 42-2017 - R$0,00</p>
                                    <span>CASTANHAL</span> 
                                </div>  
                            </td>
                            <td>
                                <p style={{marginBottom: "2px"}}>R$0,00</p>
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
                                <p>156.320,48</p>
                                <div>
                                    <p>CONTRATO: 42-2017 - R$0,00</p>
                                    <span>CASTANHAL</span> 
                                </div>  
                            </td>
                            <td>
                                <p style={{marginBottom: "2px"}}>R$0,00</p>
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
                                <p>156.320,48</p>
                                <div>
                                    <p>CONTRATO: 42-2017 - R$0,00</p>
                                    <span>CASTANHAL</span> 
                                </div>  
                            </td>
                            <td>
                                <p style={{marginBottom: "2px"}}>R$0,00</p>
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
                            <td colSpan={6} align="center">
                                <strong>CEF I</strong>
                                <p>R$ 0.00</p>
                            </td>
                        </tr>
                        <tr className="dados">
                            <td >
                                <p>156.320,48</p>
                                <div>
                                    <p>CONTRATO: 42-2017 - R$0,00</p>
                                    <span>CASTANHAL</span> 
                                </div>  
                            </td>
                            <td>
                                <p style={{marginBottom: "2px"}}>R$0,00</p>
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
                                <p>156.320,48</p>
                                <div>
                                    <p>CONTRATO: 42-2017 - R$0,00</p>
                                    <span>CASTANHAL</span> 
                                </div>  
                            </td>
                            <td>
                                <p style={{marginBottom: "2px"}}>R$0,00</p>
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
                                <p>156.320,48</p>
                                <div>
                                    <p>CONTRATO: 42-2017 - R$0,00</p>
                                    <span>CASTANHAL</span> 
                                </div>  
                            </td>
                            <td>
                                <p style={{marginBottom: "2px"}}>R$0,00</p>
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