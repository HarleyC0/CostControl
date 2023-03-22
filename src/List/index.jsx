import React from "react";
import { Item } from "../Item";

function List () {

    const [list, setList] = React.useState([
        {
            value: 10000,
            description: 'Abono',
        },
        {
            value: 100000,
            description: 'Semana',
        },
        {
            value: -20000,
            description: 'Deuda',
        },
    ]);

    return (
        <ul>
            {list.map((item, index) => {
                    return(
                        <Item 
                            key={index}
                            value={item.value} 
                            description={item.description} 
                        />
                    )
                }
            )}
        </ul>
    );
}

export { List };