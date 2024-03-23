import { Grid, Stack, Box, Divider, Button } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <Grid
      container
      sx={{
        bgcolor: "#F2FCFF",
        color: "black",
        py: 10,
        px: 8,

        overflow: "hidden",
      }}
      alignItems={"center"}
    >
      <Grid item lg={6}>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
        >
          <img
            style={{ width: "70%", borderRadius: 4 }}
            src="../public/1.jpg"
          ></img>
        </motion.div>
      </Grid>
      <Grid item lg={6} sx={12}>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        >
          <Stack gap={4}>
            <Box
              sx={{
                fontFamily: "Poppins",
                fontWeight: "100",
                fontSize: "2rem",
              }}
            >
              Journey of Passion & Excellence
              <Box
                sx={{ fontFamily: "Nothing You Could Do", fontSize: "4rem" }}
              >
                EMPOWER YOUR SUCCESS WITH US
              </Box>
            </Box>
            <Divider
              flexItem
              sx={{ bgcolor: "rgba(255,255,255,0.3)", width: "65%" }}
            />

            <Box sx={{ fontFamily: "DM Sans", fontSize: "1.5rem" }}>
              "Elevate Your Stitching Game with Unique & Trendy Styles"
            </Box>
          </Stack>
          <Button variant="contained">START SEWING NOW...</Button>
        </motion.div>
      </Grid>

      <Grid item lg={6} sx={12}>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        >
          <Stack gap={4}>
            <Box
              sx={{
                fontFamily: "Poppins",
                fontWeight: "100",
                fontSize: "2rem",
              }}
            >
              Sew Your Way of Success with Our Expertise
              <Box
                sx={{ fontFamily: "Nothing You Could Do", fontSize: "4rem" }}
              >
                PERFECT COURSES FOR YOUR SKILLS
              </Box>
            </Box>
            <Divider
              flexItem
              sx={{ bgcolor: "rgba(255,255,255,0.3)", width: "65%" }}
            />

            <Box sx={{ fontFamily: "DM Sans", fontSize: "1.5rem" }}>
              "Unlock your creative potential through stitching"
            </Box>
          </Stack>
          <Button variant="contained">JOIN OUR CLASSES...</Button>
        </motion.div>
      </Grid>
      <Grid item lg={6} sx={12}>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
        >
          <img
            style={{ width: "70%", borderRadius: 4 }}
            src="../public/3.jpg"
          ></img>
        </motion.div>
      </Grid>
      {/* <Grid item lg={6} sx={12}>
        <Stack gap={4}>
          <Box sx={{ fontFamily: "Nothing You Could Do", fontSize: "4rem" }}>
            Our History
          </Box>

          <Box sx={{ fontFamily: "DM Sans", fontSize: "1.5rem" }}>
            TNSS Unit SVNIT started its journey in 2018 as a Self Financing Unit
            (SFU). Our volunteers worked dedicatedly for the betterment of the
            society. And our work was recognised by the Ministry of Youth
            Affairs and Sports by upgrading us to a Government Financed Unit. We
            received our first funding from the government in September 2022. As
            of the same date, NSS Unit SVNIT had over 200 volunteers who
            continue to work tirelessly for social growth and environmental
            wellness. NSS Unit SVNIT organises various on-campus and off-campus
            activities aimed at the integration of the community and generating
            widespread awareness about prevailing social issues.We live by our
            motto ‘Not Me But You.’ Our volunteers regulary visit nearby
            villages to educate people
          </Box>
        </Stack>
      </Grid> */}
      {/* <Grid item lg={6} sx={12}>
        <NssTimeline />
      </Grid> */}
    </Grid>
  );
}
