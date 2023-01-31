import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@material-ui/core';

import { getIntervalCaption } from './dateUtils';

export const DoctorScedulerTime = ({ scheduler }) => {


    return (
        <>
            <Typography>Выберите время приема</Typography>
            <Box>
                {
                    scheduler.map((item, index) => (
                        <Box key={item.startTime}>
                            {getIntervalCaption(item.startTime, item.endTime)}
                        </Box>
                    ))
                }
            </Box>
        </>
    )
}