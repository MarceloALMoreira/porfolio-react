import { Link } from 'react-router-dom';
import styles from './Navs.module.scss';

const Navs = () => {
    return (
        <>
            <section className={styles.navs__container}>
                <div className={styles.navs__item}>
                    <ul className={styles.navs__list}>
                        <li className={styles.nav_links}>
                            <a href="">Home</a>
                        </li>
                        <li className={styles.nav_links}>
                            <a href="">sobre</a>
                        </li>
                        <li className={styles.nav_links}>
                            <a href="">projetos</a>
                        </li>
                    </ul>
                </div>

                <div className={styles.navs__item}>
                    <ul>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Home</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.navs__item}>
                    <ul>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Home</a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}
export default Navs