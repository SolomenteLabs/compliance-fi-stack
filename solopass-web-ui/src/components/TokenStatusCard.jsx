import { useEffect, useState } from 'react';
import { check } from '@solopass/sdk';


export default function TokenStatusCard({ address }) {
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (!address) return;
    const fetchStatus = async () => {
      try {
        const res = await check(address);
        setStatus(res.result ? '✅ Valid SoloPass' : '❌ No valid SoloPass');
      } catch (e) {
        setStatus('⚠️ Error');
      }
    };
    fetchStatus();
    const id = setInterval(fetchStatus, 15000); // 15s refresh
    return () => clearInterval(id);
  }, [address]);

  if (!address) return null;
  return <p>{status}</p>;
}

