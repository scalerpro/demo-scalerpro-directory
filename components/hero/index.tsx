import type { ChangeEventHandler, FC } from "react"
import { Search, searchLinks } from "~/components/search"
import styles from "./styles.module.css"

export const heroLinks = () => [
  { rel: "stylesheet", href: styles },
  ...searchLinks(),
]

interface HeroProps {
  onSearchTermChange: ChangeEventHandler
}

export const Hero: FC<HeroProps> = ({ onSearchTermChange }) => (
  <article className={styles.hero}>
    <h1 className={styles.hero__heading}>
      {`Find the React components you need`}
      {` that works for you. Or `}
      <a href="https://github.com/scalerpro/demo-scalerpro-directory">
        add your own
      </a>
      {`.`}
    </h1>

    <Search
      placeholder="Search Demos"
      onSearchTermChange={onSearchTermChange}
    />
  </article>
)
