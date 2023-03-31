import React from "react";
import { Rating } from "@mui/material";

<Rating
  name="hover-feedback"
  value={value}
  precision={0.5}
  getLabelText={getLabelText}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
  onChangeActive={(event, newHover) => {
    setHover(newHover);
  }}
  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
/>
{value !== null && (
  <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
)}