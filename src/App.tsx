import "./App.css";
import { useSDK } from "@metamask/sdk-react";
function App() {
  const { sdk, account } = useSDK();

  const connect = async () => {
    try {
      sdk?.terminate()
      await sdk?.connect()
      // run some async logic...
    }catch(error: unknown) {
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
      <button onClick={connect}>Connect</button>
    </>
  );
}

export default App;
