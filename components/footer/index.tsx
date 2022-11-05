import styles from "./styles.module.css"

export const footerLinks = () => [{ rel: "stylesheet", href: styles }]

export const Footer = () => (
  <footer className={styles.footer}>
    <p>{`Made with ❤ by ScalerPro Team`}</p>
  </footer>
)
