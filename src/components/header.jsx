import React from 'react';
import { Text, Div } from "atomize";


class Header extends React.Component {

    render() { 

        return (
            <Div>
                <Text 
                    textSize="display3" 
                    textWeight="800"
                    textAlign="center"
                    m={{ b: "10px" }}
                >
                Dumb Donuts
                </Text>
                <Text 
                    textSize="subheader"
                    textAlign="center"
                    textWeight="400"
                    m={{ b: "40px" }}
                    >
                    A Crazy Fool Collection</Text>
            </Div>
            )
    }
}
 
export default Header;