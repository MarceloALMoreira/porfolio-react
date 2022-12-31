import Botao from "../../components/Botao"
import Menu from "../../components/Manu"
import Navs from "../../components/Nav_menu"

   
const Home = () => {
    return (
        <>
            <section>
                <Menu />
                <Navs />
                {/* Component Botão por children, eu posso usar por atributo tambem! */}
                <Botao onClick={ teste}>
                    Dominó
                </Botao>
            </section>
        </>
    )
}

export default Home