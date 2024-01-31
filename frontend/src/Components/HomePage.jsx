import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";
import UserFooter from "./UserFooter";
import UserHeader from "./UserHeader";

const HomePage = () => {
  return (
    <>
      <UserHeader />
      <Container style={{ paddingTop: 40 }}>
        <Paper
          style={{
            display: "flex",
            alignItems: "center",
            padding: "20px",
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
            <div className="home-page-query">
            <img
            src="https://dunnesfarmhousefoods.com/wp-content/uploads/2017/02/steak_and_chips_with_lemonparsley_butter-1-1400x787.jpg" // Replace with the URL of your chef-related image
            alt="Chef in action"
      
            className="home-page-image"
          />
          <div>
            <Typography variant="h4" gutterBottom>
              Welcome to Vithurakan's Culinary World
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Crafting Exquisite Flavors with Passion and Precision. Explore a
              journey of culinary excellence with me as I bring forth a symphony
              of tastes and textures to delight your palate. Let every dish tell
              a unique story, carefully curated and passionately crafted.
            </Typography>
          </div>
            </div>
        </Paper>
      </Container>
      <UserFooter />
    </>
  );
};

export default HomePage;
