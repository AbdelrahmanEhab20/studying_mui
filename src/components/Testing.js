import React from "react";
import { Button, Typography } from "@mui/material";
// import { styled } from "@mui/material/styles";

export const Testing = () => {
  // doesn't use the custom theme values
  // const myCustomButton = styled(Button)({
  //   padding:20
  // });
  // doesn't use the custom theme values
  // const myCustomButton = styled(Button)(({ theme }) => ({
  //   padding: theme.spacing(2),
  // }));
  return (
    <>
      <Typography variant="newVariant" align="center">
        First Test typography text
      </Typography>
      <Typography
        variant="h4"
        sx={{ color: "customColor.main" }}
        align="center"
      >
        Typography text
      </Typography>
      <Typography variant="customVariant" align="center">
        Second text
      </Typography>
      <Typography variant="h6" align="center">
        Third text
      </Typography>
      <Button sx={{ p: 10, m: 10 }} variant="contained">
        Testing MUI
      </Button>
    </>
  );
};
