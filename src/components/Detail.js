import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
      
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack backgroundColor="white" sx={{ gap: { lg: "35px", xs: "20px" }, p: { lg: "35px", xs: "20px" } }}>
        <Typography textTransform='capitalize' variant="h3">{name}</Typography>
        <Typography variant="h6">
          Exercises keep you strong. <strong style={{ textTransform:'capitalize'}}>{name}</strong> is one of the best
          exercises to target your <strong style={{ textTransform:'capitalize'}}>{target}</strong> . It will help you
          inprove your mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button>
              <img src={item.icon} />
            </Button>
            <Typography textTransform='capitalize' variant="h6">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
