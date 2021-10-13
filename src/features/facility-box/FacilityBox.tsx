import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { FacilityCard } from '../facility-card/FacilityCard';
import Grid from '@mui/material/Grid';
import styles from './facility-box.module.css';

export function FacilityBox() {
  let cards = [];
  for (let i = 0; i < 12; i++) {
    cards.push(<FacilityCard key={i} />)
  }

  return (
    <div>
      <h3 className="faciltiy-box__header">
        <p>
          Facility List
        </p>
      </h3>
      <Grid container spacing={2}>
        {cards}
      </Grid>
    </div >
  );
}
