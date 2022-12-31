import styles from './ListaProjetos.module.scss'

const ListaProjetos = () => {

    const projetos = [{
        nome: 'Lange Page Netflix',
        description: 'Esse projeto foi criado usando as tech, HTML,CSS, JavaScript',
        link: 'http://google.com.br/'
    },
        {
        nome: 'Clone Youtube',
        description: 'Esse projeto foi criado usando as tech, HTML,CSS, JavaScript',
        link: 'http://youtubeclone.com.br/'
        },
        {
        nome: 'Clone Youtube',
        description: 'Esse projeto foi criado usando as tech, HTML,CSS, JavaScript',
        link: 'http://youtubeclone.com.br/'
    }
    ]

    return (
        <aside className={styles.projeto__lista}>
            <ul className={styles.projeto__lists}>
                {projetos.map((projetos, index) => (
                    <li key={index}>
                        <h3>{projetos.nome}</h3>
                        <span>{projetos.description}</span> <br />
                        <a href={projetos.link}>Link</a>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default ListaProjetos