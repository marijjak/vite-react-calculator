import { useState } from 'react'
import './App.css'

type Operation = '+' | '-' | '×' | '÷' | null

export default function App() {
  const [a, setA] = useState<string>('')
  const [b, setB] = useState<string>('')
  const [op, setOp] = useState<Operation>(null)
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const calculate = (operation: Operation) => {
    const numA = parseFloat(a)
    const numB = parseFloat(b)
    setError(null)

    if (isNaN(numA) || isNaN(numB)) {
      setError('Unesi validne brojeve')
      setResult(null)
      return
    }

    setOp(operation)
    let res: number

    switch (operation) {
      case '+': res = numA + numB; break
      case '-': res = numA - numB; break
      case '×': res = numA * numB; break
      case '÷':
        if (numB === 0) { setError('Dijeljenje s nulom nije moguće'); setResult(null); return }
        res = numA / numB; break
      default: return
    }

    setResult(parseFloat(res.toFixed(10)).toString())
  }

  return (
    <div className="shell">
      <header className="header">
        <span className="header-tag">CALC_SYS</span>
        <span className="header-title">v2.1.0</span>
      </header>

      <main className="calc">
        <div className="display">
          {result !== null && op ? (
            <>
              <span className="display-expr">{a} {op} {b}</span>
              <span className="display-result">{result}</span>
            </>
          ) : error ? (
            <span className="display-error">{error}</span>
          ) : (
            <span className="display-idle">_ _ _</span>
          )}
        </div>

        <div className="inputs">
          <div className="input-group">
            <label className="input-label">A</label>
            <input
              className="input-field"
              type="number"
              value={a}
              onChange={e => setA(e.target.value)}
              placeholder="0"
            />
          </div>
          <div className="input-group">
            <label className="input-label">B</label>
            <input
              className="input-field"
              type="number"
              value={b}
              onChange={e => setB(e.target.value)}
              placeholder="0"
            />
          </div>
        </div>

        <div className="ops">
          {(['+', '-', '×', '÷'] as Operation[]).map(o => (
            <button
              key={o}
              className={`op-btn ${op === o && result ? 'op-btn--active' : ''}`}
              onClick={() => calculate(o)}
            >
              {o}
            </button>
          ))}
        </div>

        <button className="reset-btn" onClick={() => { setA(''); setB(''); setOp(null); setResult(null); setError(null) }}>
          RESET
        </button>
      </main>

      <footer className="footer">
        <span>DISTRIBUTED SYSTEMS — MONITORING &amp; CONTROL</span>
      </footer>
    </div>
  )
}