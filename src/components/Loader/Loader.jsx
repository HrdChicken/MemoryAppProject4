import { Grid, Loader } from 'semantic-ui-react'

export default function Loading() {
  return (
    <Grid centered style={{backgroundColor: 'black', color: 'white' }}>
        <Loader size="large" active>
          Loading
        </Loader>
    </Grid>
  );
}