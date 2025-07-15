import { mint } from '../../smartagent/src/agent';
// or
import { check } from '../../smartagent/src/agent';


import { useState } from 'react';
import { mint } from '@solopass/sdk';

export default function MintPass({ address }) {
  const [days, setDays] = useState(30);
  const [tx, setTx] = useState('');

  async function handleMint() {
    if (!address) return alert('Connect wallet first');
    try {
      await mint(address, days);
      setTx('✅ Mint tx broadcasted');
    } catch (e) {
      setTx('❌ ' + e.message);
    }
  }

  return (
    <div style={{ marginBottom: '1rem' }}>
      <select value={days} onChange={e => setDays(Number(e.target.value))}>
        {[1, 7, 30, 365].map(d => (
          <option key={d} value={d}>{d} days</option>
        ))}
      </select>{' '}
      <button onClick={handleMint}>🪙 Mint SoloPass</button>
      {tx && <p>{tx}</p>}
    </div>
  );
}
