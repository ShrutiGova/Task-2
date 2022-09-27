import * as React from "react";
import Box from "@mui/material/Box";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import Typography from "@mui/material/Typography";

export default function Menu() {
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" sx={{ minWidth: 100 }}>
          Invoices
        </Typography>
        <Typography sx={{ minWidth: 100 }}>
          <CardGiftcardIcon color="success" />
          What's new
        </Typography>
      </Box>
    </React.Fragment>
  );
}
