import { FaGithub, FaGitlab, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import styles from './Menu.module.scss';

const Menu = () => {
    return (
        <>
            <section className={styles.menu__container}>
                <div className={styles.menu__item}>
                    <ul className={styles.menu__icons}>
                        <li className={styles.icons__link}>
                            <a href="">
                                <FaLinkedin />
                            </a>
                        </li>
                        <li className={styles.icons__link}>
                            <a href="">
                                <FaGithub />
                            </a>
                        </li>
                        <li className={styles.icons__link}>
                            <a href="">
                                <FaGitlab />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.menu__item}>
                    <h3>Logo</h3>
                </div>
                <div className={styles.menu__item}>
                    <div>
                        <FaWhatsapp />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Menu