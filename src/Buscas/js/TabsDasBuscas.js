import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';

const TabsDasBuscas = (props) => (
    <Tabs >
        {props.conteudo.map((info, id) => {
            return(
                <Tab key={id} eventKey={props.title[id]} title={props.title[id]} >
                    {info}
                </Tab>
            )
        })}
    </Tabs>
);


export default TabsDasBuscas;