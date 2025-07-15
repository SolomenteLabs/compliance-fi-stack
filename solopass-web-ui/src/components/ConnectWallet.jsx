import { useState } from 'react';

export default function ConnectWallet({ onConnect }) {
  const [address, setAddress] = useState('');
  const [err, setErr] = useState('');

  async function connect(provider) {
    try {
      let addr;
      if (provider === 'keplr' && window.keplr) {
        await window.keplr.enable('coreum-testnet');
        const key = await window.keplr.getKey('coreum-testnet');
        addr = key.bech32Address;
      } else if (provider === 'leap' && window.leap) {
        await window.leap.enable('coreum-testnet');
        const key = await window.leap.getKey('coreum-testnet');
        addr = key.bech32Address;
      } else {
        throw new Error('Wallet not found');
      }
      setAddress(addr);
      onConnect(addr);
    } catch (e) {
      setErr(e.message);
    }
  }

  return (
    <div style={{ marginBottom: '1rem' }}>
      <button onClick={() => connect('keplr')}>🔗 Connect Keplr</button>{' '}
      <button onClick={() => connect('leap')}>🔗 Connect Leap</button>
      {address && <p>Connected: {address}</p>}
      {err && <p style={{ color: 'red' }}>{err}</p>}
    </div>
  );
}
