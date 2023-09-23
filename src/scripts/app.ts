console.log(`app.js loaded`)
import { now, logFunction, getElement } from "./helpers"
import { Config } from "./config"

/// Variables

/// Functions
/// Functions - Main
function main() {
  logFunction(`main`)

  renderCopyright()
}

/// Functions - All Pages
function renderCopyright() {
  logFunction(`renderCopyright`)

  // Format: The Beloved's Blog &copy; Davina Leong, 2022-2024
  const copyrightEl: HTMLElement | null = getElement(`copyright`)
  if (copyrightEl) {
    const yearHtml =
      Config.year === now.getFullYear()
        ? `${Config.year}`
        : `${Config.year} &ndash; ${now.getFullYear()}`

    copyrightEl.innerHTML = `
        ${Config.appName} &copy; ${Config.author}, ${yearHtml}
        `
  }
}

/// Execute
document.addEventListener(`DOMContentLoaded`, main)
