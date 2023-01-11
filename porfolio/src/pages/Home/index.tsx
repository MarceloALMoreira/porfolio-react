import Botao from "../../components/Botao"
import ListaProjetos from "../../components/ListaProjetos"
import Menu from "../../components/Manu"
import Navs from "../../components/Nav_menu"
import Footer from "../Footer"

   var banana = 'Doce'

console.log(banana)
   
const Home = () => {
    return (
        <>
            <section>
                <Menu />
                <Navs />
                {/* Component Botão por children, eu posso usar por atributo tambem! */}
                {/* <Botao>Bem vindo</Botao> */}
                <ListaProjetos />
                <Footer/>
            </section>
        </>
    )
}

export default Home