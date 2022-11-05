import styles from "./styles.module.css"

export const headerLinks = () => [{ rel: "stylesheet", href: styles }]

export const Header = () => (
  <header className={styles.header}>
    {/* <Link to="/" className="header__logo">{`Remix Directory`}</Link> */}

    <ul className={styles.header__items}>
      <li className={styles.header__item}>
        <a
          className={styles.header__link}
          href="https://github.com/nshki/remix-directory"
        >
          GitHub
        </a>
      </li>
    </ul>
  </header>
)
