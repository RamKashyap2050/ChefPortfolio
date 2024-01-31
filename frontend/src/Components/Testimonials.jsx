import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const Testimonials = () => {
  return (
    <>
      <h3 style={{ textAlign: "center", margin: "auto" }}>Testimonials</h3>
      <div className="crd">
        {/* Testimonial Card 1 */}
        <Card style={{ width: "400px", height: "280px", marginRight:"1rem", marginBottom:"1rem" }}>
          <CardContent>
            <img
              src="https://example-aws-bucket-trial-for-farmerplace.s3.us-east-2.amazonaws.com/images/profile.jpg"
              alt="Testimonial 1"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
              }}
            />
            <Typography variant="h6" gutterBottom>
              Ram Kashyap
            </Typography>
            <Typography variant="body1" color="textSecondary">
              ⭐⭐⭐⭐⭐ 4.5
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Vithurakan has been an Incredible colleague and senior to work
              with, he helped me guide through challenges and teach me
              everything that should be taught to a commis chef.
            </Typography>
          </CardContent>
        </Card>

        {/* Testimonial Card 2 (Bigger) */}
        <Card style={{ width: "400px", height: "280px", marginRight:"1rem", marginBottom:"1rem" }}>
          <CardContent>
            <img
              src="https://example-aws-bucket-trial-for-farmerplace.s3.us-east-2.amazonaws.com/FarmerPlace/praneel.jpg"
              alt="Testimonial 2"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
              }}
            />
            <Typography variant="h6" gutterBottom>
              Praneel Reddy
            </Typography>
            <Typography variant="body1" color="textSecondary">
              ⭐⭐⭐⭐⭐⭐ 4.5
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Vithurakan has been an Incredible colleague and senior to work
              with, he helped me guide through challenges and teach me
              everything that should be taught to a commis chef.
            </Typography>
          </CardContent>
        </Card>

        {/* Testimonial Card 3 */}
        <Card style={{ width: "400px", height: "280px" }}>
          <CardContent>
            <img
              src="https://image.tmdb.org/t/p/original/1Zn3M4dk1aQYwL0qmUiBznwKwA1.jpg"
              alt="Testimonial 3"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
              }}
            />
            <Typography variant="h6" gutterBottom>
              Jay Fernando
            </Typography>
            <Typography variant="body1" color="textSecondary">
              ⭐⭐⭐⭐ 4
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Vithurakan has been an great value to the kitchen as Sous Chef he
              was master in culinary skills, but that's just tip of ice berg,
              he's wonderful at communication and leadership, his skills to
              manage Inventory and other skills are impeacable as well
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Testimonials;
