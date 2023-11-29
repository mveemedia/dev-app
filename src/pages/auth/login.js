import { useCallback, useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Alert,
  Box,
  Button,
  FormHelperText,
  Link,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { useAuth } from "src/hooks/use-auth";
import { Layout as AuthLayout } from "src/layouts/auth/layout";

const Page = () => {
  const router = useRouter();
  const auth = useAuth();
  const [method, setMethod] = useState("email");
  const formik = useFormik({
    initialValues: {
      email: "devs@mveemedia.io",
      password: "Password123!",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Inserisci una email valida")
        .max(255)
        .required("Inserisci la tua email"),
      password: Yup.string().max(255).required("Inserisci la tua password"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        await auth.signIn(values.email, values.password);
        router.push("/");
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  const handleMethodChange = useCallback((event, value) => {
    setMethod(value);
  }, []);

  const handleSkip = useCallback(() => {
    auth.skip();
    router.push("/");
  }, [auth, router]);

  return (
    <>
      <Head>
        <title>Login | Land ID App</title>
      </Head>
      <Box
        sx={{
          width: {
            sm: "100%",
            lg: "85%",
          },
          ml: "auto",
          backgroundColor: "rgba(143, 26, 33, 0.90)",
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          borderRadius: "20px 0px 0px 20px",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: "100px",
            width: "100%",
            color: "white",
          }}
        >
          <div>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography variant="h4">Login</Typography>
              <Typography variant="body2" color="rgba(245, 245, 245, 0.8)">
                Non hai un account? &nbsp;
                <Link
                  component={NextLink}
                  href="/auth/register"
                  sx={{
                    color: "white",
                  }}
                  variant="subtitle2"
                >
                  Registrati
                </Link>
              </Typography>
            </Stack>
            <Tabs onChange={handleMethodChange} textColor="inherit" sx={{ mb: 3 }} value={method}>
              <Tab label="Email" value="email" />
              <Tab label="SMS" value="phoneNumber" />
            </Tabs>
            {method === "email" && (
              <form noValidate onSubmit={formik.handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    error={!!(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    label="Indirizzo Email"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                    value={formik.values.email}
                    InputProps={{
                      style: {
                        backgroundColor: "white",
                      },
                    }}
                  />
                  <TextField
                    error={!!(formik.touched.password && formik.errors.password)}
                    fullWidth
                    helperText={formik.touched.password && formik.errors.password}
                    label="Password"
                    name="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="password"
                    value={formik.values.password}
                    InputProps={{
                      style: {
                        backgroundColor: "white",
                      },
                    }}
                  />
                </Stack>
                <FormHelperText sx={{ mt: 1, color: "rgba(245, 245, 245, 0.8)" }}>
                  # Notes.
                </FormHelperText>
                {formik.errors.submit && (
                  <Typography color="error" sx={{ mt: 3 }} variant="body2">
                    {formik.errors.submit}
                  </Typography>
                )}
                <Button
                  fullWidth
                  size="large"
                  sx={{
                    mt: 3,
                    color: "#8f1a2a",
                    backgroundColor: "white",
                    "&:hover": {
                      backgroundColor: "#8f1a2a",
                      color: "white",
                    },
                  }}
                  type="submit"
                  variant="contained"
                >
                  Continua
                </Button>
                <Button fullWidth size="large" sx={{ mt: 3, color: "white" }} onClick={handleSkip}>
                  Skip
                </Button>
                <Alert color="primary" severity="info" sx={{ mt: 3 }}>
                  <div>
                    Utilizza <b>devs@mveemedia.io</b> and password <b>Password123!</b> per accedere
                  </div>
                </Alert>
              </form>
            )}
            {method === "phoneNumber" && (
              <div>
                <Typography sx={{ mb: 1 }} variant="h6">
                  Not available currently
                </Typography>
                <Typography>
                  To prevent unnecessary costs we disabled this feature in the demo.
                </Typography>
              </div>
            )}
          </div>
        </Box>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default Page;
