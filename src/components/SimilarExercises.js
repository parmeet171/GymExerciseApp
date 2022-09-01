import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px", px: { lg: "35px", xs: "20px" } }}
        fontWeight={700}
        color="#000"
        mb="33px"
        backgroundColor="white"
      >
        Similar{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Target Muscle
        </span>{" "}
        exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        {targetMuscleExercises.length !== 0 ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Box mb= "50px">
        <Typography
          sx={{
            fontSize: { lg: "44px", xs: "25px" },
            ml: "20px",
            mt: { lg: "100px", xs: "60px" },
            px: { lg: "35px", xs: "20px" }
          }}
          fontWeight={700}
          color="#000"
          mb="33px"
          backgroundColor="white"
        >
          Similar{" "}
          <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
            Equipment
          </span>{" "}
          exercises
        </Typography>
        <Stack direction="row" sx={{ p: 2, position: "relative" }}>
          {equipmentExercises.length !== 0 ? (
            <HorizontalScrollbar data={equipmentExercises} />
          ) : (
            <Loader />
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default SimilarExercises;
