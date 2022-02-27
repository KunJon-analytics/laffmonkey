import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { CONST, rpc, wallet } from "@cityofzion/neon-core";
import PunkList from "./components/PunkList";

function App() {
  const inputs = {
    fromAccount: new wallet.Account(
      "L1QqQJnpBwbsPGAuutuzPTac8piqvbR1HRjrY5qHup48TBCBFe4g"
    ),
    toAccount: new wallet.Account(
      "L2QTooFoDFyRFTxmtiVHt5CfsXfVnexdbENGDkkrrgTTryiLsPMG"
    ),
    tokenScriptHash: "0xaa4fb927b3fe004e689a278d188689c9f050a8b2",
    amountToTransfer: 1,
    systemFee: 0,
    networkFee: 0,
    networkMagic: CONST.MAGIC_NUMBER.TestNet,
    nodeUrl: "https://mainnet5.neo.coz.io:443",
  };

  const [punkListData, setPunkListData] = useState([]);
  useEffect(() => {
    const rpcClient = new rpc.RPCClient(inputs.nodeUrl);

    const getNFTProperties = async (id) => {
      let propertyResponse;
      propertyResponse = await rpcClient.execute(
        rpc.Query.getNep11Properties(inputs.tokenScriptHash, id)
      );
      return propertyResponse;
    };
    let balanceResponse;
    const checkBalance = async () => {
      balanceResponse = await rpcClient.execute(
        rpc.Query.getNep11Balances("NYuAskreYpm4qE3uSbpqdmgkFNcfwmLktV")
      );
      const balances = balanceResponse.balance.filter((bal) =>
        bal.assethash.includes(inputs.tokenScriptHash)
      );
      const ttmBalance = balances[0].tokens;
      let ttmPropertiesList = [];
      for (var i = 0; i < ttmBalance.length; ++i) {
        let tokenProperty = await getNFTProperties(ttmBalance[i].tokenid);
        ttmPropertiesList.push(tokenProperty);
      }
      setPunkListData(ttmPropertiesList);
      console.log(ttmPropertiesList);
    };
    return checkBalance();
  }, [inputs.tokenScriptHash, inputs.nodeUrl]);

  return (
    <div className="app">
      <Header />
      <PunkList punkListData={punkListData} />
    </div>
  );
}

export default App;
