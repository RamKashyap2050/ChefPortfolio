import React from "react";
import { Container, Card, CardContent, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserFooter from "./UserFooter";
import UserHeader from "./UserHeader";
import Testimonials from "./Testimonials";
import Certifications from "./Certifications";

const CulinaryPortfolio = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <UserHeader />
      <Container style={{ paddingTop: 40, marginBottom: "5rem" }}>
        <Typography
          variant="h4"
          gutterBottom
          style={{ margin: "auto", textAlign: "center" }}
        >
          Culinary Portfolio
        </Typography>
        <div className="crd">
          {/* Card 1: Sandwiches */}
          <Card
            style={{
              width: "350px",
              marginRight: "1rem",
              marginBottom: "1rem",
            }}
          >
            <CardContent>
              <Slider {...settings}>
                <img
                  src="https://media-cdn.tripadvisor.com/media/photo-m/1280/15/81/28/24/club-sandwich.jpg"
                  alt="Sandwiches 1"
                  className="card-img-top image"
                />
                <img
                  src="https://media-cdn.tripadvisor.com/media/photo-s/1b/09/1b/45/montreal-smoked-meat.jpg"
                  alt="Sandwiches 2"
                  className="card-img-top image"
                />
                <img
                  src="https://media-cdn.tripadvisor.com/media/photo-s/15/81/28/43/grill-cheese-dejeuner.jpg"
                  alt="Sandwiches 3"
                  className="card-img-top image"
                />
              </Slider>
              <Typography variant="h5" gutterBottom>
                Sandwiches
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Explore a delightful assortment of sandwiches, crafted with the
                finest ingredients and unique flavor combinations.
              </Typography>
            </CardContent>
          </Card>

          {/* Card 2: Steaks */}
          <Card
            style={{
              width: "350px",
              marginRight: "1rem",
              marginBottom: "1rem",
            }}
          >
            <CardContent>
              <Slider {...settings}>
                <img
                  src="https://media-cdn.tripadvisor.com/media/photo-s/16/76/43/49/photo1jpg.jpg"
                  alt="Steaks 1"
                  className="card-img-top image"
                />
                <img
                  src="https://media-cdn.tripadvisor.com/media/photo-s/0a/67/21/0d/allo-mon-coco.jpg"
                  alt="Steaks 2"
                  className="card-img-top image"
                />
              </Slider>
              <Typography variant="h5" gutterBottom>
                Steaks
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Explore Several Kinds of Steaks cooked according to Clients
                wish, Whether it's Blue or Medium or Well done I got it all
                covered, cooked with dedication and passion to fulfill client
                wish
              </Typography>
            </CardContent>
          </Card>

          {/* Card 3: Breakfast */}
          <Card style={{ width: "350px" }}>
            <CardContent>
              <Slider {...settings}>
                <img
                  src="https://s3-media0.fl.yelpcdn.com/bphoto/JiaLtH9Ica53F4XwHm0YIQ/o.jpg"
                  alt="Breakfast 1"
                  className="card-img-top image"
                />
                <img
                  src="https://media-cdn.tripadvisor.com/media/photo-s/1a/3f/c6/10/fried-chicken-eggs-benedict.jpg"
                  alt="Breakfast 2"
                  className="card-img-top image"
                />
                <img
                  src="https://cms-images.groupemach.com/convert?extend=white&key=mDCrU%2BvMgyHVg61WaVrX5C2BQk7xaSZvP3brZ8xJtrFBxxzYK%2F0HwHw%2Bq0oIGg2K&nocrop=true&quality=90&stripmeta=true&type=jpeg&url=https:%2F%2Fcms-assets.groupemach.com%2Fgroupemach-website-api-production-assets%2Fcms%2FiGwG0vc8F4TKR4FhUxbfPA.jpg"
                  alt="Breakfast 3"
                  className="card-img-top image"
                />
              </Slider>

              <Typography variant="h5" gutterBottom>
                Breakfast
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Witness the delight of Pancakes, Waffles and Potatoes and much
                more in the breakfast delicacies, crafted through care and
                dedication.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Container>
      <Testimonials />
      <Certifications />
      <UserFooter />
    </>
  );
};

export default CulinaryPortfolio;
