import type { FC } from "react"
import styles from "./styles.module.css"

export const stackGridLinks = () => [{ rel: "stylesheet", href: styles }]

interface StackGridProps {
  stacks: {
    name: string
    description: string
    tags: string[]
    url: string
  }[]
}

export const StackGrid: FC<StackGridProps> = ({ stacks = [] }) => (
  <div className={styles["stack-grid"]}>
    {stacks.map((stack, stackIndex) => (
      <figure
        key={`stack-${stackIndex}`}
        className={styles["stack-grid__item"]}
      >
        <figcaption className={styles["stack-grid__name"]}>
          {stack.name}
        </figcaption>

        <ul className={styles["stack-grid__tags"]}>
          {[
            stack.tags.map((tag, tagIndex) => (
              <li
                key={`stack-${stackIndex}-tag-${tagIndex}`}
                className={styles["stack-grid__tag"]}
              >
                {tag}
              </li>
            )),
          ]}
        </ul>

        <p className={styles["stack-grid__description"]}>{stack.description}</p>

        <a className={styles["stack-grid__link"]} href={stack.url}>
          {`View on GitHub`}
        </a>
      </figure>
    ))}
  </div>
)
