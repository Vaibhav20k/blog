import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const PortfolioButton: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <a
      href="https://vaibhavos.indevs.in"
      target="_blank"
      rel="noopener noreferrer"
      class={classNames(displayClass, "portfolio-button")}
      aria-label="Back to Portfolio"
      title="Navigate to Portfolio (vaibhavos.indevs.in)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        class="portfolio-icon"
      >
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      </svg>
      <span class="portfolio-text">Portfolio</span>
    </a>
  )
}

PortfolioButton.css = `
.portfolio-button {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: var(--tint);
  border: 1px solid var(--edge);
  border-radius: 6px;
  padding: 0.35rem 0.65rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--darkgray) !important;
  text-decoration: none !important;
  transition: all 0.2s ease;
  line-height: 1;
}

.portfolio-button:hover {
  background: var(--tint-strong);
  border-color: var(--secondary);
  color: var(--secondary) !important;
  transform: translateY(-1px);
}

.portfolio-button .portfolio-icon {
  width: 14px;
  height: 14px;
  stroke: currentColor;
}
`

export default (() => PortfolioButton) satisfies QuartzComponentConstructor
