console.log(`app.js loaded`)

/// Variables

/// Functions
function main() {
  logFunction(`main`)
}

function logFunction(name: string, params: any = {}): void {
  console.log(`fn: ${name}:(${JSON.stringify(params)})`)
}

/// Execute
document.addEventListener(`DOMContentLoaded`, main)
