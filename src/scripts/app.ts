console.log(`app.js loaded`)

import { Config } from "./config"

/// Variables
const DATA_ELEMENT_ATTR = `data-element`
const DATA_ACTIVE_ATTR = `data-active`

/// Functions
/// Functions - Main
function main() {
  logFunction(`main`)

  renderCopyright()
}

function logFunction(name: string, params?: any): void {
  console.log(`fn: ${name}:(${JSON.stringify(params)})`)
}

function getElement(name: string, parent?: HTMLElement): HTMLElement | null {
  logFunction(`getElement`, { name, parent })

  if (parent) {
    return parent.querySelector(`[${DATA_ELEMENT_ATTR}="${name}"]`)
  }

  return document.querySelector(`[${DATA_ELEMENT_ATTR}="${name}"]`)
}

function getAllElements(
  name: string,
  parent?: HTMLElement
): NodeListOf<Element> {
  logFunction(`getElement`, { name, parent })

  if (parent) {
    return parent.querySelectorAll(`[${DATA_ELEMENT_ATTR}="${name}"]`)
  }

  return document.querySelectorAll(`[${DATA_ELEMENT_ATTR}="${name}"]`)
}

function toggleAttribute(
  element: HTMLElement,
  toggle: boolean = false,
  attr: string = DATA_ACTIVE_ATTR
): void {
  logFunction(`toggleAttribute`, { element, toggle, attr })

  if (toggle) {
    element.setAttribute(attr, String(toggle))
  } else {
    element.removeAttribute(attr)
  }
}

/// Functions - All Pages
function renderCopyright() {
  logFunction(`renderCopyright`)

  // Format: The Beloved's Blog &copy; Davina Leong, 2022-2024
  const copyrightEl: HTMLElement | null = getElement(`copyright`)
  if (copyrightEl) {
    const now = new Date()
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
