import { useContext } from "react";
import { GlobalContext } from "../../providers/global";

const Servicos = () => {

    const { catalogo } =useContext(GlobalContext);

    return(<>
        <section className='section-servicos'>
            <h2>Serviços</h2>
            <ul className='servicos-container'>
            {catalogo.map((servico, index) => (
                <li key={index} className="servico-card">
                    <span>{servico.icon}</span>
                    <div className="servico_content">
                        <h3>{servico.nome}</h3>
                        <span>{servico.descri}</span>
                    </div>
                </li>))
            }
            </ul>
        </section>
    </>)
}
export default Servicos;