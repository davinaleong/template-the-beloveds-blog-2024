console.log(`app.js loaded`)
import "../styles/app.scss"
import { logFunction } from "./helpers"
import { renderCopyright } from "./elements"

async function main() {
  logFunction(`main`)

  renderCopyright()
}

document.addEventListener(`DOMContentLoaded`, main)
