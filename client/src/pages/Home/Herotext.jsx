import { Box, Button, Stack } from "@mui/material";
import React from "react";

export default function HeroText() {
  return (
    <Box sx={{ flexBasis: "60%" }}>
      <h1
        style={{
          fontSize: "3rem",
          fontFamily: "Poppins",
          fontWeight: "500",
        }}
      >
        Seamlessly Crafted Dreams:{" "}
        <span style={{ fontWeight: "800" }}>
          <br />
          Stitch Your Passion with Raja Rani Tailoring Coaching{" "}
        </span>
      </h1>
      <p
        style={{ fontFamily: "DM Sans", fontSize: "1.2rem", fontWeight: "400" }}
      >
        Welcome to Raja Rani Tailoring Coaching, where stitches create stories
        and creativity knows no bounds. Join us to master the art of tailoring,
        unleash your imagination, and sew the fabric of your dreams. Discover
        the joy of creation and the power of self-expression with expert
        guidance and a vibrant community of fellow enthusiasts. Your journey to
        sewing success starts here.
      </p>
      <Stack direction="row" gap={1} sx={{ pt: 2 }}>
        <Button
          variant="contained"
          style={{
            borderRadius: 0,
            textTransform: "none",
            height: "40px",
            width: "150px",

            backgroundColor: "black",
            fontSize: "1.1rem",
            fontFamily: "DM Sans",
          }}
          disableElevation
        >
          KNOW MORE
        </Button>
        <Button
          variant="outlined"
          style={{
            borderRadius: 0,
            textTransform: "none",
            height: "40px",
            color: "black",
            width: "150px",
            border: "2px black solid",
            fontSize: "1.1rem",
            fontFamily: "DM Sans",
          }}
          disableElevation
        >
          JOIN
        </Button>
      </Stack>
    </Box>
  );
}
