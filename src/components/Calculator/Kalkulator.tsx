import { useState } from 'react';
import type { Operacija, RezultatKalkulacije } from '../../types/Kalkulator';
import { izracunaj } from './kalkulatorLogika';
import '../../App.css';

export default function Kalkulator() {
  const [a, setA] = useState<string>('');
  const [b, setB] = useState<string>('');
  const [rezultat, setRezultat] = useState<RezultatKalkulacije | null>(null);
  const [aktivnaOp, setAktivnaOp] = useState<Operacija | null>(null);

  const operacije: { simbol: Operacija; naziv: string }[] = [
    { simbol: '+', naziv: 'Saberi' },
    { simbol: '-', naziv: 'Oduzmi' },
    { simbol: '×', naziv: 'Pomnoži' },
    { simbol: '÷', naziv: 'Podijeli' },
  ];

  const handleIzracunaj = (operacija: Operacija) => {
    const n1 = parseFloat(a);
    const n2 = parseFloat(b);
    if (isNaN(n1) || isNaN(n2)) {
      setRezultat({ vrednost: null, greska: 'Unesi validne brojeve u oba polja.' });
      setAktivnaOp(operacija);
      return;
    }
    setAktivnaOp(operacija);
    setRezultat(izracunaj(n1, n2, operacija));
  };

  const handleReset = () => {
    setA('');
    setB('');
    setRezultat(null);
    setAktivnaOp(null);
  };

  const formatRezultat = (vrednost: number): string => {
    if (Number.isInteger(vrednost)) return vrednost.toString();
    return parseFloat(vrednost.toFixed(10)).toString();
  };

  return (
    <div className="shell">
      <header className="header">
        <span className="header-tag">CALC_SYS</span>
        <span className="header-title">v2.1.0</span>
      </header>

      <main className="calc">
        <div className="display">
          {rezultat !== null && aktivnaOp ? (
            rezultat.greska ? (
              <span className="display-error">{rezultat.greska}</span>
            ) : (
              <>
                <span className="display-expr">{a} {aktivnaOp} {b}</span>
                <span className="display-result">{formatRezultat(rezultat.vrednost!)}</span>
              </>
            )
          ) : (
            <span className="display-idle">_ _ _</span>
          )}
        </div>

        <div className="inputs">
          <div className="input-group">
            <label className="input-label">A</label>
            <input className="input-field" type="number" value={a} onChange={e => setA(e.target.value)} placeholder="0" />
          </div>
          <div className="input-group">
            <label className="input-label">B</label>
            <input className="input-field" type="number" value={b} onChange={e => setB(e.target.value)} placeholder="0" />
          </div>
        </div>

        <div className="ops">
          {operacije.map(o => (
            <button
              key={o.simbol}
              className={`op-btn ${aktivnaOp === o.simbol && rezultat ? 'op-btn--active' : ''}`}
              onClick={() => handleIzracunaj(o.simbol)}
            >
              <span className="op-simbol">{o.simbol}</span>
              <span className="op-naziv">{o.naziv}</span>
            </button>
          ))}
        </div>

        <button className="reset-btn" onClick={handleReset}>RESET</button>
      </main>

      <footer className="footer">
        <span>DISTRIBUTED SYSTEMS — MONITORING &amp; CONTROL</span>
      </footer>
    </div>
  );
}