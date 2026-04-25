import React, { useState, useEffect, useRef } from 'react';
import './Kalkulator.css';

const Kalkulator: React.FC = () => {
  const [x, setX] = useState<string>('');
  const [y, setY] = useState<string>('');
  const [result, setResult] = useState<{ pusat: string; r: string; keliling: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (x === '' || y === '') {
      setResult(null);
      setShowResult(false);
      setIsLoading(false);
      return;
    }

    // Set loading state
    setIsLoading(true);
    setShowResult(false);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Simulate calculation time for loading animation
    timeoutRef.current = window.setTimeout(() => {
      const xNum = parseFloat(x);
      const yNum = parseFloat(y);

      const pusat = `(${xNum}, ${yNum})`;
      const r = Math.sqrt(xNum * xNum + yNum * yNum);
      const keliling = 2 * Math.PI * r;

      setResult({
        pusat,
        r: r.toFixed(2),
        keliling: keliling.toFixed(2),
      });
      setIsLoading(false);
      setShowResult(true);
    }, 800);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [x, y]);

  return (
    <div className="app-wrapper">
      <div className="card">
        <div className="card-header">
          <div className="icon-circle">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="1" />
              <line x1="12" y1="2" x2="12" y2="5" />
              <line x1="12" y1="19" x2="12" y2="22" />
              <line x1="2" y1="12" x2="5" y2="12" />
              <line x1="19" y1="12" x2="22" y2="12" />
            </svg>
          </div>
          <h1>Kalkulator Lingkaran</h1>
          <p className="subtitle">Ketik koordinat untuk melihat hasil</p>
        </div>

        <div className="input-group">
          <div className="input-field">
            <label htmlFor="inputX">Koordinat X</label>
            <input
              id="inputX"
              type="number"
              placeholder="0"
              value={x}
              onChange={(e) => setX(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="input-field">
            <label htmlFor="inputY">Koordinat Y</label>
            <input
              id="inputY"
              type="number"
              placeholder="0"
              value={y}
              onChange={(e) => setY(e.target.value)}
              autoComplete="off"
            />
          </div>
        </div>

        {/* Loading Indicator */}
        <div className={`loading-container ${isLoading ? 'show' : ''}`}>
          <div className="dot-wave">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <span className="loading-text">Menghitung...</span>
        </div>

        {/* Result Card */}
        <div className={`result-card ${showResult && !isLoading ? 'show' : ''}`}>
          {result && (
            <>
              <div className="result-item">
                <span className="result-label">Titik Pusat</span>
                <span className="result-value">{result.pusat}</span>
              </div>
              <div className="divider"></div>
              <div className="result-item">
                <span className="result-label">Jari-jari (r)</span>
                <span className="result-value">{result.r}</span>
              </div>
              <div className="divider"></div>
              <div className="result-item">
                <span className="result-label">Keliling</span>
                <span className="result-value highlight">{result.keliling}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Kalkulator;
