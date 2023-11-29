import PropTypes from "prop-types";
import NextLink from "next/link";
import { Box, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import { Logo } from "src/components/logo";
import Image from "next/image";

// TODO: Change subtitle text

export const Layout = (props) => {
  const { children } = props;

  return (
    <Box
      component="main"
      position={"relative"}
      sx={{
        display: "flex",
        flex: "1 1 auto",
      }}
    >
      <Grid container sx={{ flex: "1 1 auto" }}>
        <Grid
          xs={12}
          lg={6}
          sx={{
            alignItems: "start",
            background: "background.paper",
            color: "white",
            display: "flex",
            justifyContent: "start",
            mt: {
              xs: 10,
              sm: 10,
              md: 15,
            },

            "& img": {
              maxWidth: "100%",
            },
          }}
        >
          <Box sx={{ p: 3 }}>
            <Typography
              align="start"
              color="#8F1A21"
              variant="h4"
              sx={{
                fontWeight: "bold",
                lineHeight: "32px",
                mb: {
                  xs: 1,
                  sm: 1,
                  md: 3,
                },
              }}
            >
              Land{" "}
              <Box component="a" target="_blank">
                ID Card
              </Box>
            </Typography>
            <Typography
              color={"#000"}
              align="start"
              sx={{
                mb: 3,
                fontSize: {
                  xs: "18px",
                  sm: "18px",
                },
              }}
              variant="subtitle2"
            >
              Il Tuo Immobile a Portata Di Click.
            </Typography>
          </Box>
        </Grid>
        <Grid
          xs={12}
          lg={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            backgroundOpacity: 0.5,
          }}
          zIndex={10002}
        >
          <Box
            component="header"
            sx={{
              left: 12,
              p: 3,
              position: "fixed",
              top: 0,
              width: "100%",
            }}
          >
            <Box component={NextLink} href="/">
              <Image
                src="/assets/logo.svg"
                alt="logo"
                width={50}
                height={50}
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Box>
          {children}
        </Grid>
      </Grid>
      <Box
        position={"absolute"}
        bottom={-1}
        sx={{
          width: "100vw",
          height: {
            xs: 400,
            sm: 600,
            md: 600,
            lg: 800,
          },
        }}
        zIndex={1000}
      >
        <Image
          src="/assets/auth_svg.svg"
          alt="bg"
          fill
          cover
          style={{ objectFit: "cover", layout: "fill" }}
        />
      </Box>
    </Box>
  );
};

Layout.prototypes = {
  children: PropTypes.node,
};
