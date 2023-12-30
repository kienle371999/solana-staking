import { TextField, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";

export default function UnStack() {
  return (
    <Box textAlign="start">
      <Typography>FomoSOL</Typography>
      <TextField sx={{ width: 400 }} />
      <Button variant="contained" sx={{ display: "block" }}>
        Unstake SOL
      </Button>
    </Box>
  );
}
