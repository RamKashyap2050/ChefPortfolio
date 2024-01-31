import React from "react";
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import vithuProfilePhoto from "../IMG.png";
import UserFooter from "./UserFooter";
import UserHeader from "./UserHeader";
const AboutPage = () => {
  return (
    <>
      <UserHeader />
      <br />
      <br />
      <br />
      <Container style={{ position: "relative" }}>
        <div
          style={{
            top: "-75px",
            right: "30%",
            position: "absolute",
          }}
        >
          <img
            src={vithuProfilePhoto}
            alt="Vithu's Profile"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              border: "4px solid #7CB9E8",
            }}
          />
        </div>
        <Card>
          <CardContent style={{ marginTop: "5rem" }}>
            <Typography variant="h4" gutterBottom>
              Vithurakan - Sous Chef
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Hello, I'm Vithurakan, and my culinary journey spans six years,
              marked by an unwavering passion for the kitchen and a dedication
              to exploring diverse cuisines. I began my adventure as a Chef de
              Partie at Dunns Kitchen, immersing myself in the vibrant world of
              American & Smoked Meat cuisine. Over five years, I became adept at
              operating flat tops and flame grills, specializing in crafting
              mouthwatering steaks and sandwiches.
              <br />
              <br />
              In the pursuit of my culinary ambitions, I took on a simultaneous
              role as a Sous Chef at Allo Mon Coco, where I delved into the art
              of Continental breakfast cuisine. Managing a bustling kitchen
              during the morning and evening shifts, I mastered the delicate
              balance of crafting 10 to 20 crepes or pancakes every ten minutes.
              This dual-role experience not only enhanced my culinary skills but
              also fine-tuned my abilities in inventory management and staff
              coordination. <br />
              <br />
              My culinary journey reflects a relentless commitment to my craft,
              fueled by a genuine love for the kitchen and a continuous
              exploration of the rich tapestry of global flavors.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="https://your-resume-url.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: 20 }}
            >
              My Resume
            </Button>
          </CardContent>
        </Card>
      </Container>
      <UserFooter />
    </>
  );
};

export default AboutPage;
