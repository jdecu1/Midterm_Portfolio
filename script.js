const c = 299792458
const massEl = document.getElementById('mass')
const energyEl = document.getElementById('energy')
const resultEl = document.getElementById('result')
const calcBtn = document.getElementById('calcBtn')
const clearBtn = document.getElementById('clearBtn')
function formatNum(n) {
  if (!isFinite(n)) return ''
  if (Math.abs(n) >= 1e6 || Math.abs(n) < 1e-3) return n.toExponential(6)
  return n.toLocaleString(undefined, { maximumFractionDigits: 6 })
}
calcBtn.addEventListener('click', () => {
  const m = parseFloat(massEl.value)
  const e = parseFloat(energyEl.value)
  const c2 = c * c
  if (!isNaN(m) && isNaN(e)) {
    const energy = m * c2
    energyEl.value = energy
    resultEl.textContent = 'Energy: ' + formatNum(energy) + ' J'
  } else if (isNaN(m) && !isNaN(e)) {
    const mass = e / c2
    massEl.value = mass
    resultEl.textContent = 'Mass: ' + formatNum(mass) + ' kg'
  } else if (!isNaN(m) && !isNaN(e)) {
    resultEl.textContent = 'Clear fields and try again'
  } else {
    resultEl.textContent = 'Enter a mass or an energy'
  }
})
clearBtn.addEventListener('click', () => {
  massEl.value = ''
  energyEl.value = ''
  resultEl.textContent = ''
})
