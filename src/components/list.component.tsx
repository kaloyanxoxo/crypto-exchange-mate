import React, { useCallback, useEffect, useState } from 'react';
import { List, ListItem, ListSubheader, Typography } from '@mui/material';

export const ListComp = ({ data, dataKey  }: { data: number[], dataKey: string }) => {
    const [order, setOrder] = useState<'asc' | 'desc'>('asc');
    const [sortedData,setSortedData] = useState<number[]>([]);

    const sortData = useCallback(() => {
        setOrder(order === 'asc' ? 'desc' : 'asc');
    }, [order]);

    useEffect(() => {
        const sortedItems: number[] = data.sort((a, b) => {
            return order === 'asc' ? a - b : b - a
        })
        setSortedData(sortedItems)
    }, [data, order]);

    return data.length > 0 ? (
            <List
                id="modal-modal-description"
                sx={{ mt: 2 }}
                style={{ width: '100%',overflow: 'auto',maxHeight: 350,padding: "0"}}>
                <ListSubheader style={{padding: 0,margin: 0}}>
                    <ListItem button onClick={sortData} style={{ padding: "0 20px" }}>
                        Sort
                    </ListItem>
                </ListSubheader>
            { sortedData.map((trade, index) => (
                <ListItem divider key={index} style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "30px, 0",
                        backgroundColor: `${dataKey.toString() ===  'buy'? "green" : "red"}`
                    }}
                >
                    <Typography variant="caption" fontSize=".8em" padding="0px">
                        {dataKey}
                    </Typography>
                    <Typography variant="overline" fontSize=".8em" padding="0px">
                        {trade}
                    </Typography>
                </ListItem>
                ))}
        </List>
    ) : (<div><h5>Loading...</h5></div>)
}