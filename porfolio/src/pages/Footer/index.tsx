import styles from './Footer.module.scss'
export default function Footer() {
    return (
        <div className={styles.footer}>
            <footer>
            <p>&copy @DateTime.Now.Year</p>
            </footer>
        </div>
    )
}