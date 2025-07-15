import { useState } from 'react';
import ConnectWallet from './components/ConnectWallet';
import MintPass from './components/MintPass';
import TokenStatusCard from './components/TokenStatusCard';

export default function App() {
  const [addr, setAddr] = useState('');
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🎉 SoloPass Dashboard</h1>
      <ConnectWallet onConnect={setAddr} />
      <MintPass address={addr} />
      <TokenStatusCard address={addr} />
    </div>
  );
}


