import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import styles from './facility-box.module.css';

export function FacilityCard() {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          FacilitY Name
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Type of facility
        </Typography>
        <address>
          facility address
        </address>
      </CardContent>
    </React.Fragment>
  );
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </Grid>
  );
}
