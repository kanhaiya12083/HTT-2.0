import React from "react";
import { Stack, Box, Grid } from "@mui/material";
import ComitteeCard from "./CommitteeCard";
import { motion } from "framer-motion";

const ComitteeSection = () => {
  const comittees = [
    [
      "Live Class Service",
      "🧵Enroll in a live class & gain access to both the live session and its recording, along with lifetime access to our app. ✂",
    ],

    [
      "Ask You Queries",
      "📚Ask your queries and get them resolved by our experts. 🧵",
    ],
    [
      "Get Certified",
      "🎓Get certified by us and showcase your skills to the world. 🌍",
    ],
    [
      "Community Support",
      "👩‍🤝‍👩Join our community and get support from fellow learners. 🧵",
    ],
    ["Exclusive Content", "🎁Get access to exclusive content and offers. 🎉"],
    ["24/7 Support", "🕒Get 24/7 support from our team. 🧵"],
    [
      "Personalized Learning",
      "📈Get personalized learning recommendations. 🧵",
    ],
    ["Feedback & Review", "📝Get feedback and review on your work. 🧵"],
    ["Skill Development", "🎯Get access to skill development resources. 🧵"],
    ["Career Guidance", "🚀Get career guidance from our experts. 🧵"],
  ];
  return (
    <Stack>
      <Box
        sx={{
          fontFamily: "DM Sans",
          fontSize: "4rem",
          px: 8,
        }}
      >
        From Beginner to Expert, We've Got You Covered"
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ px: 8, py: 6 }}
      >
        {comittees.map((title, index) => {
          return (
            <Grid item xs={6} lg={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: (index + 1) * 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <ComitteeCard title={title[0]} description={title[1]} />
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default ComitteeSection;
