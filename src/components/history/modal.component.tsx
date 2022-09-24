import { Box, Modal, Typography } from '@mui/material';
import React from 'react';
import { PairHistory } from './pair-history.component';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "100%",
    maxWidth: 760,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface IHistoryModal {
    isOpen: boolean,
    handleClose: () => void,
    provider: string,
    pair: string
}

export const HistoryModal = ({ isOpen, provider, handleClose, pair }: IHistoryModal) => {
    return (
        <div>
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Order History for { pair } from {provider}
                    </Typography>
                    <PairHistory pair={pair} provider={provider}/>
                </Box>
            </Modal>
        </div>
    )
}