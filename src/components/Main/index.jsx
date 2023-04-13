import SectionMain from "../SectionMain";

const Main = () =>{
    return(<>
        <main className="main">
            <section className="main-content">
                <div className="principal">
                    <h2>BARBEARIA</h2>
                    <h1>BARBA & CABELO</h1>
                    <a target="_blank" rel='noreferrer' href="www.whatsapp.com" className="button-whats">RESERVE UM HORÁRIO</a>
                </div>
                <SectionMain/>
            </section>
        </main>
    </>)
}

export default Main;