import type { ChangeEventHandler, FC } from "react"
import { SearchSvg } from "~/components/svgs/search"
import styles from "./styles.module.css"

export const searchLinks = () => [{ rel: "stylesheet", href: styles }]

interface SearchProps {
  placeholder: string
  onSearchTermChange: ChangeEventHandler
}

export const Search: FC<SearchProps> = ({
  placeholder = "Search",
  onSearchTermChange,
}) => (
  <div className={styles.search}>
    <div className={styles.search__icon}>
      <SearchSvg />
    </div>

    <input
      className={styles.search__input}
      type="text"
      placeholder={placeholder}
      onChange={onSearchTermChange}
    />
  </div>
)
