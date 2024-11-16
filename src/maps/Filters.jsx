import {
  Stack,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
} from "@mui/material";
export default function Filter({ minMag, setminmag, timespan, setTimespan }) {
  return (
    <Stack direction="row" spacing={2}>
      <Stack>
        <Typography variant="caption" id="magnitude">
          <b>Select Magnitude</b>
        </Typography>
        <ToggleButtonGroup
          color="primary"
          value={minMag}
          exclusive
          onChange={(e) => setminmag(e.target.value)}
          aria-label="Platform"
        >
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="1.0">M1.0+</ToggleButton>
          <ToggleButton value="2.5">M2.5+</ToggleButton>
          <ToggleButton value="4.5">M4.5+</ToggleButton>
          <ToggleButton value="significant">Significant</ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Stack>
        <Typography variant="caption" id="magnitude">
          <b>Select Time Period</b>
        </Typography>
        <ToggleButtonGroup
          color="primary"
          value={timespan}
          exclusive
          onChange={(e) => setTimespan(e.target.value)}
          aria-label="Platform"
        >
          <ToggleButton value="hour">Last Hour</ToggleButton>
          <ToggleButton value="day">Last Day</ToggleButton>
          <ToggleButton value="week">Last 7 Days</ToggleButton>
          <ToggleButton value="month">Last 30 Days</ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}
