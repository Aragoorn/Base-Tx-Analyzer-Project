import { ethers } from "ethers";

// اتصال به شبکه بیس
const provider = new ethers.JsonRpcProvider("https://rpc.ankr.com/base");

async function main() {
  console.log("Analyzing latest block on Base...");
  const block = await provider.getBlock("latest");
  console.log("Latest Block Number:", block?.number);
}

main();