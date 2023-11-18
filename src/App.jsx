//import Swiper core and required modules
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "/styles.css";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
import MeoreExperience from "./components/MeoreExperience";
import { CameraControls } from "@react-three/drei";

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  return (
    <>
      <Canvas
        className="webgl"
        camera={{
          position: [-4, 3, 10],
        }}
      >
        {/* <Experience section={activeSection} /> */}
        <MeoreExperience section={activeSection} />
      </Canvas>

      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Mousewheel]}
        className="mySwiper"
        onSlideChange={(s) => {
          setActiveSection(s.activeIndex);
        }}
      >
        <SwiperSlide>
          <div className="container mt-md-5 pt-md-5">
            <div className="row">
              <div className="col-md-4 pt-md-5 wheat-color">
                <h3>
                  You can also explore this pyramid in Augmented Reality with
                  your mobile device.
                </h3>
                <p>
                  {" "}
                  Scan the QR code with a supported device to launch the AR
                  experience.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container  mt-md-5 pt-md-5">
            <div className="row">
              <div className="col-md-4  pt-md-5 wheat-color">
                <h1>
                  THE <br />
                  UNIQUE <br />
                  DESIGN{" "}
                </h1>
                <p>
                  The pyramids of Meroë range in height from 6 to 30 meters,
                  rising from fairly narrow footprints, which creates the
                  distinctive steep slopes to these structures.
                </p>
                <p style={{ fontSize: "x-small" }}>
                  This belongs to King Arkamani the First, one of the more
                  intact pyramids.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="container  mt-md-5 pt-md-5">
            <div className="row">
              <div className="col-md-4  pt-md-5 wheat-color">
                <h1>STEEP BY DESIGN</h1>
                <p>
                  These steep slopes are due to building by shaduf – a simple
                  people-powered wooden crane. It was anchored in the middle of
                  the plot, as the pyramid was built up around it.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container  mt-md-5 pt-md-5">
            <div className="row">
              <div className="col-md-4  pt-md-5 wheat-color">
                <h1>WHO BUILT THEM?</h1>
                <p>
                  Like ancient Egyptians, the occupants would design and build
                  their own pyramids in life so there would be no delay in their
                  journey to the afterlife. Construction could take over a year
                  for the larger pyramids.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container  mt-md-5 pt-md-5">
            <div className="row">
              <div className="col-md-4  pt-md-5 wheat-color">
                <h1>WHAT’S INSIDE?</h1>
                <p>
                  Unlike the Giza pyramids in Egypt, Nubian pyramids have no
                  burial chambers inside. The outer layers of sandstone blocks
                  encase an internal filling of rubble and dirt (and in one
                  recorded case, the remains of a shaduf).
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container  mt-md-5 pt-md-5">
            <div className="row">
              <div className="col-md-4  pt-md-5 wheat-color black-overlay">
                <h1> THE OFFERING CHAPEL </h1>
                <p>
                  Here early explorers found offerings of bows, horse harnesses,
                  wooden boxes, pottery, and imported goods from Meroë’s
                  far-reaching trade with Egypt, Rome, Greece, India and China.
                  The offering chapel of the 12th pyramid in the north cemetery,
                  dedicated to an unknown king.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container  mt-md-5 pt-md-5">
            <div className="row">
              <div className="col-md-4  pt-md-5 wheat-color black-overlay">
                <h1> THE UNDERGROUND TOMB</h1>
                <p>
                  A buried staircase descends beneath the pyramid, landing in
                  front of the entrance to a tomb. Beyond were typically one or
                  two intricately decorated chambers, whose purpose was to help
                  preserve the occupant’s spirit in the afterlife. <br />
                  This is an illustrative example, based on real archaeological
                  data from Meroë.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        {/* <SwiperSlide>Slide 3</SwiperSlide> */}
        {/* <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
