import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";
import SLideHome from "../components/homes/SlideHome";
import AlbumNew from "../components/homes/AlbumNew";
import SongNew from "../components/homes/SongNew";
import SidebarHome from "../components/homes/Sidebar";

const Home = () => {
  return (
    <>
      {/* <Hero className="illustration-section-01" /> */}
      <SLideHome />
      <Container>
        <Row>
          <Col md={8}>
            <AlbumNew></AlbumNew>
            <img src="/imgs/qc.png" alt="" className="w-100" />
            <SongNew></SongNew>
          </Col>
          <Col md={3}>
            <SidebarHome />
          </Col>
        </Row>
      </Container>
      <Container>
        <img src="/imgs/qc.png" alt="" className="w-100 mb-4" />
      </Container>
    </>
  );
};

export default Home;
