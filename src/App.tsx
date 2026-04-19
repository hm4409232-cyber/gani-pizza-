/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';

export default function App() {
  const [isStarted, setIsStarted] = useState(false);

  if (!isStarted) {
    return (
      <div className="min-h-screen bg-[var(--color-bg-dark)] text-[var(--color-accent-red)] flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-8 text-[var(--color-text-primary)] text-center">Bismillah ir Rahman ir Rahim</h1>
        <button 
          onClick={() => setIsStarted(true)}
          className="bg-[var(--color-accent-red)] text-white px-8 py-4 rounded-lg text-2xl font-semibold hover:bg-[var(--color-accent-red-hover)] transition"
        >
          Start System
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg-dark)] text-[var(--color-text-primary)]">
      <header className="h-[60px] px-6 bg-[var(--color-bg-card)] flex justify-between items-center border-b border-[var(--color-border)]">
        <div className="font-bold text-[var(--color-accent-red)] tracking-wider">GHANI PIZZA POS</div>
        <div className="italic text-[var(--color-text-secondary)] text-sm">Bismillah ir Rahman ir Rahim</div>
      </header>
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-[var(--color-accent-red)]">Dashboard</h1>
        <p className="text-[var(--color-text-secondary)]">System dashboard content will appear here.</p>
      </main>
    </div>
  );
}
