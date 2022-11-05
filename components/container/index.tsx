import type { FC } from "react"
import styles from "./styles.module.css"

export const containerLinks = () => [{ rel: "stylesheet", href: styles }]

export const Container: FC = ({ children }) => (
  <div className={styles.container}>{children}</div>
)
