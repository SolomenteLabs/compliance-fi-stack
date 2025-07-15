// sdk/index.js
export { mint } from './mint.js';
export { check } from './check.js';



export async function mint(address, days) {
  console.log(`✅ Minting SoloPass for ${address} lasting ${days} days...`);
}

export async function check(address) {
  console.log(`✅ Checking SoloPass for ${address}...`);
  return { result: true }; // Simulate a valid token
}
