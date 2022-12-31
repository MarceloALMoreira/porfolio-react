import React from 'react'
import styles from './Botao.module.scss'


// vou criar uma props para botão
class Botao extends React.Component<any,any>{
    render() {
        return (
            <button className={styles.botao}>
                {this.props.children}
            </button>
        )
    }
}
export default Botao