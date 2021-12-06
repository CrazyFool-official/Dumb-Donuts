import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Div, StyleReset, ThemeProvider, Button, Text, Icon, Anchor } from "atomize";
import Welcome from "./components/welcome";
import Header from "./components/header"
import GIF from "./components/gif"
import Description from "./components/description"



const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// Create a client engine instance
const engine = new Styletron();

const theme = {
  colors: {
    black900: "#1d1d1e"
  }
};

function App() {

  // counting
  const [count, setCount] = useState(0);

  // blockchain stuff
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [mintingNFT, setMintingNFT] = useState(false);
  const totalgasPrice = String(30000000000 * count);


  const mintNFTS = (_amount) => {
    setMintingNFT(true);
    blockchain.dumbDonuts.methods.mint(blockchain.account, _amount).send({
      gasPrice: String(totalgasPrice),
      from: blockchain.account,
      value: blockchain.web3.utils.toWei((10 * _amount).toString(), "ether"),
    })
    .once("error", (err) => {
      console.log(err);
      alert("Error. Please check if the transaction got stuck.");
      setMintingNFT(false);
    })
    .then((receipt) => {
      alert("Minted successfully!");
      setMintingNFT(false);
    });
  };

  useEffect(() => {
    if (blockchain.account !== "" && blockchain.dumbDonuts !== null) {
      dispatch(fetchData(blockchain.account));
    }
  }, [blockchain.dumbDonuts, dispatch]);

  
  

  return (

    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <ThemeProvider theme={theme}>
        <StyleReset />
        <Div>
          {blockchain.account === "" || blockchain.dumbDonuts === null ? (
            <Div 
            d="flex" 
            justify="center" 
            align="center" 
            minH="100vh" 
            w="100vw" 
            flexDir="column"
            >
              <Welcome />
              <Button
                  align="center"
                  top="1rem"
                  m={{ b: "40px" }}
                  hoverBg="gray800"
                  bg="black900"
                  shadow="3"
                  hoverShadow="4"
                  rounded="circle"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(connect());
                  }}
                >
              Connect
              </Button>
              {blockchain.errorMsg !== "" ? (<Text textAlign="center">{blockchain.errorMsg}</Text>) : null}
            </Div>
          ) : (
            <Div 
            d="flex" 
            justify="center" 
            align="center" 
            minH="120vh" 
            w="100vw" 
            flexDir="column"
            >
              <Header />
              <GIF />
              <Description />
              <Text textSize="title" textWeight="500" m={{ b: "40px" }}>{data.totalSupply}  /  10,000 minted</Text>
              <Div d="flex" align="center" justify="center" m={{ b: "40px" }}>
                    
                <Button 
                    h="2.5rem"
                    w="2.5rem"
                    hoverBg="gray800"
                    bg="black900"
                    rounded="circle"
                    m={{ r: "2rem" }}
                    shadow="3"
                    hoverShadow="4"
                    onClick={() => {count === 0 ? setCount(count) : setCount(count - 1)}}
                >
                    <Icon name="Minus" size="20px" color="white"/>
                </Button>

                <Text

                    w="40px"
                    m={{ l: "2rem", r: "2rem" }} 
                    textSize="title" 
                    textWeight="500" 
                    textAlign="center"
                >
                {count}
                </Text>

                <Button 
                    h="2.5rem"
                    w="2.5rem"
                    hoverBg="gray800"
                    bg="black900"
                    rounded="circle"
                    m={{ l: "2rem" }}
                    shadow="3"
                    hoverShadow="4"
                    onClick={() => {count === 5 ? setCount(count) : setCount(count + 1)}}
                >
                    <Icon name="Plus" size="20px" color="white"/>
                </Button>

              </Div>
              {data.totalSupply !== 10000 ?
              <Button
                  align="center"
                  hoverBg="gray800"
                  bg="black900"
                  shadow="3"
                  hoverShadow="4"
                  rounded="circle"
                  m={{ b: "40px" }}
                  disabled={mintingNFT ? 1 : 0}
                  onClick={(e) => {
                    e.preventDefault();
                    {count === 0 ? alert("Error. Amount to be minted cannot be 0.") : mintNFTS(count)};
                  }}
                >
                {mintingNFT ? "Minting" : "Mint"}
                </Button> : 
              <Anchor href="https://opensea.io/collection/dumb-donuts" target="_blank">
                <Button
                  align="center"
                  m={{ b: "40px" }}
                  hoverBg="info400"
                  bg="info600"
                  shadow="3"
                  hoverShadow="4"
                  rounded="circle"
                >
                View on OpenSea
                </Button>
              </Anchor>}
              <Div m={{ b: "40px" }} w="800px">
                <Text m={{ l: "7px" }}>**Please ensure that you are connected to the Polygon Mainnet and the correct address. Note that once you make the
              purchase, you cannot undo it. <br></br><br></br>
              **The gas price has been set to 30 GWEI to successfully mint an NFT. It is recommened not to lower the gas price as it may cause the transaction to get stuck. For current gas prices, click <Anchor href="https://polygonscan.com/gastracker" target="_blank" d="inline-block">here</Anchor>.
                </Text>
              </Div>
              <Div w="800px">
                <Text textSize="title" textWeight="500" m={{ l: "7px" }}>About Crazy Fool</Text>
                <Text m={{ l: "7px" }}>Crazy Fool was created with the sole purpose of giving back to society, helping those in need and raising awareness of various matters in the world.
                With that purpose in mind, **60% of all Crazy Fool collection inital sales** will be donated to various organisations such as orphanages, charities and etc. Let us do our part to make the world a better place!</Text>
              </Div>
            </Div>
          )
          }
        </Div>
      </ThemeProvider>
    </StyletronProvider>
  );
}
  
export default App;