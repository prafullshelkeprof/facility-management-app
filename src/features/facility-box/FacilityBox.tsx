import { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { FacilityCard, Facility } from '../facility-card/FacilityCard';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getFacilities } from '../../store/facility-slice/facilityThunks';
import { facilities } from '../../store/facility-slice/facilitySelectors';

export function FacilityBox() {
  const cards: Facility[] = useAppSelector(facilities);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFacilities());
  }, [dispatch])

  const cardsFrag = (
    <>
      {
        cards.map((data) => {
          return <FacilityCard
            key={data.id}
            id={data.id}
            name={data.name}
            address={data.address}
            type={data.type}
          />
        })
      }
    </>
  )


  return (
    <div>
      <Typography>
        Facility List
      </Typography>
      <Grid container spacing={2}>
        {cardsFrag}
      </Grid>
    </div >
  );
}
