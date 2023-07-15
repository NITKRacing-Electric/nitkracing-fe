import React, { useRef } from "react";
import properties from "./threed.module.css";
import "./styles.css";
import Model from "../../../../components/model/index";
import { Section, SectionWithHue } from "../../../../components/Section";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Title } from "../../../../components/Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { ANIMATIONS, ICONS } from "../../../../assets/data";
import useGsap from "../../../../hooks/useGsap";
import gsap from "gsap";

const ThreeD = (props) => {
  const app = useRef(null);
  useGsap(app, () => {
    ANIMATIONS.heading(gsap, "#sponsors");
    ANIMATIONS.appearStagger(gsap, "#sponsors", ".appear");
    ANIMATIONS.flicker(gsap, "#sponsors", ".flicker");
  });

  return (
    <Box ref={app}>
      <Section id="threeD" position="relative" pageHeight>
        <Box pt={5} />
        <Title subtitle="models">Subsystem</Title>
        <Grid container spacing={5}>
          <Grid item md={5}>
            <Box
              height="100%"
              sx={{
                backgroundImage: `url(${ICONS.wheel})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "80% 80%",
                backgroundPosition: "center",
              }}
            />
          </Grid>
          <Grid item md={7}>
            <Typography variant="subtitle2" letterSpacing="2px" color="primary">
              Lorem
            </Typography>
            <Typography gutterBottom variant="h5" color="textPrimary">
              Ipsum
            </Typography>
            <Box
              sx={{
                width: {
                  md: "50%",
                  xs: "100%",
                },
              }}
            >
              <Typography variant="body2" color="textSecondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                ante mi, imperdiet nec arcu at, tempor pretium est. In ac
                sollicitudin massa, at imperdiet sapien
              </Typography>
              <Typography
                textAlign="right"
                variant="subtitle2"
                color="textSecondary"
                paragraph
              >
                -SunZu
              </Typography>
            </Box>
            <Splide
              options={{
                perPage: 3,
                width: "100%",
                gap: "30px",
                arrows: false,
                pagination: false,
                breakpoints: {
                  720: {
                    perPage: 1,
                    padding: "20px",
                    fixedWidth: "90%",
                  },
                },
              }}
            >
              <SplideSlide>
                <Subsystem />
              </SplideSlide>
              <SplideSlide>
                <Subsystem />
              </SplideSlide>
              <SplideSlide>
                <Subsystem />
              </SplideSlide>
            </Splide>
          </Grid>
        </Grid>
        <Box pb={5} />
      </Section>
    </Box>
  );
};

const Subsystem = () => {
  return (
    <Box>
      <Box
        sx={{
          borderRadius: "5px",
          backgroundImage:
            "linear-gradient(135deg, hsla(0, 0%, 27%, 1) 0%, hsla(0, 0%, 18%, 1) 3%, hsla(0, 0%, 7%, 1) 22%, hsla(0, 0%, 0%, 1) 100%)",
        }}
        height="200px"
      >
        <Box
          height="100%"
          className="appear"
          sx={{
            backgroundImage: `url(${ICONS.wheel})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "80% 80%",
            backgroundPosition: "center",
          }}
        />
      </Box>
      <Stack direction="row" justifyContent="space-between">
        <Box>
          <Typography variant="subtitle2" letterSpacing="2px" color="primary">
            Lorem
          </Typography>
          <Typography gutterBottom variant="body1" color="textPrimary">
            Ipsum
          </Typography>
        </Box>
        <Box className="flicker" position="absolute" right={0} bottom={0}>
          <Typography
            color="red"
            fontWeight="bold"
            lineHeight="36px"
            variant="h3"
          >
            32
          </Typography>
          <Typography variant="h6">KMPH</Typography>
        </Box>
      </Stack>
    </Box>
  );
};

// <Grid container>
//     <Grid item md={4} xs={12}>
//         <Model />
//     </Grid>
//     <Grid item md={4} xs={12}>
//         <Model />
//     </Grid>
//     <Grid item md={4} xs={12}>
//         <Model />
//     </Grid>
// </Grid>
export default ThreeD;
