import "./App.css";
import { useSDK } from "@metamask/sdk-react";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
function App() {
  const { sdk, account } = useSDK();
  const switchNetwork = async () => {
    if (sdk) {
      await sdk?.getProvider()?.request({method: "wallet_switchEthereumChain", params: [{chainId: "0x1"}]})
    
    }
  }
  const connect = async () => {
    try {
      sdk?.terminate()
      await sdk?.connect()
      // run some async logic...
      await sleep(2000)
      void sdk?.getProvider()?.request({method: "wallet_switchEthereumChain", params: [{chainId: "0x1"}]})
    }catch(error) {
      alert(JSON.stringify((error)))
      console.error(error)
    }
  }
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Account: {account || "Connecting..."}</p>
      <button onClick={switchNetwork}>Switch Network</button>
      <button onClick={connect}>connect</button>
    </>
  );
}

export default App;
