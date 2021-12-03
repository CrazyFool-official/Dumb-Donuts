import React from 'react';
import { Text } from "atomize";


class Welcome extends React.Component {

    render() { 

        return (
            <Text 
                textSize="display2" 
                textWeight="600"
                textAlign="center"
                m={{ b: "1rem" }}
            >
            Welcome to Dumb Donuts
            </Text>
            )
    }
}
 
export default Welcome;
