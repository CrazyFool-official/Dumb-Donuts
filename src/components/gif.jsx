import React from 'react';
import { Div, Image,Col } from "atomize";
import gif1 from './gif/1.gif'
import gif2 from './gif/2.gif'
import gif3 from './gif/3.gif'
import gif4 from './gif/4.gif'
import gif5 from './gif/5.gif'
import gif6 from './gif/6.gif'


class GIF extends React.Component {

    render() { 

        return (
            <Div
                d="flex"
                m={{ b: "40px" }}
            >
                <Col d="flex" flexDir="row">
                    <Image src={gif1} rounded="xl" m={{ r: "40px" }} />
                    <Image src={gif2} rounded="xl" m={{ r: "40px" }} />
                    <Image src={gif3} rounded="xl" m={{ r: "40px" }} />
                    <Image src={gif4} rounded="xl" m={{ r: "40px" }} />
                    <Image src={gif5} rounded="xl" m={{ r: "40px" }} />
                    <Image src={gif6} rounded="xl" m={{ r: "40px" }} />
                </Col>
            </Div>
            )
    }
}
 
export default GIF;