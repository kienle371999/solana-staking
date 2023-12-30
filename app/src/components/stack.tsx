import { InputAdornment, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Stack() {
  return (
    <Box sx={{ textAlign: "start" }}>
      <Typography>You are stacking</Typography>
      <TextField
        sx={{ width: 400 }}
        InputProps={{
          startAdornment: <InputAdornment position="start">SOL</InputAdornment>,
        }}
      />
      <Typography>To receive</Typography>
      <TextField
        sx={{ width: 400 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">FomoSOL</InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
