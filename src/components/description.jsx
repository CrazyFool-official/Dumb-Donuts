import React from 'react';
import { Text, Div} from "atomize";


class Description extends React.Component {

    render() { 

        return (
            <Div
                m={{ b: "40px" }}
                w="800px"
            >
                    <Text m={{ l: "7px" }}>
                    Dumb Donuts is a collection of NFTs (unique digital collectibles) based on the works of CryptoPunks and Weird Whales. 10,000 donuts have been generated from a buffet of combinations, each with unique traits.<br></br><br></br>
                    For rarity table, click <Anchor href="https://docs.google.com/spreadsheets/d/1iKwPru5wzh3CkW5wyeAPBFzvzdQffY8RPdvbAKFHyp8/edit?usp=sharing" target="_blank" d="inline-block">here</Anchor>.<br></br><br></br>
                    Treat yourself to a dumb donut today at only 10 MATIC each!
                    </Text>
            </Div>
            )
    }
}
 
export default Description;