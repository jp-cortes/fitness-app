import React from 'react';
import { Stack } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';

export function Loader() {
  return (
    <Stack direction="row" justyfycontent="center" alignItems="center" width="100%">
        <InfinitySpin color="gray"/>
        </Stack>
  )
}
