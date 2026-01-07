
import {
  AppBar, Toolbar, IconButton, Typography, Button, Container, Box, Stack,
  Grid, Paper, Link as MuiLink, useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NightlightRoundOutlined from '@mui/icons-material/NightlightRoundOutlined';
import WbSunnyOutlined from '@mui/icons-material/WbSunnyOutlined';
import ArrowForwardIosOutlined from '@mui/icons-material/ArrowForwardIosOutlined';
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline';

export default function LandingPage({ dark, onToggleTheme }) {
  const theme = useTheme();

  return (
    <>
      {/* Navbar */}
      <AppBar position="sticky" elevation={0} color="transparent"
        sx={{
          backdropFilter: 'saturate(180%) blur(8px)',
          borderBottom: '1px solid',
          borderColor: 'divider'
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            COGNIZANT
          </Typography>

          <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button component="a" href="#features" color="inherit">Features</Button>
            <Button component="a" href="#docs" color="inherit">Docs</Button>
            <Button component="a" href="#pricing" color="inherit">Pricing</Button>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center" ml={2}>
            <IconButton aria-label="Toggle theme" onClick={onToggleTheme}>
              {dark ? <WbSunnyOutlined /> : <NightlightRoundOutlined />}
            </IconButton>
            <Button component="a" href="#get-started" variant="contained" color="primary">Get Started</Button>
          </Stack>

          {/* Mobile menu icon (hook up drawer later if needed) */}
          <IconButton sx={{ ml: 1, display: { xs: 'flex', md: 'none' } }} aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Hero */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography variant="h2" component="h1">
                Build faster, ship smarter
              </Typography>
              <Typography variant="h6" color="text.secondary">
                A production‑ready React template with a beautiful UI, accessible components,
                and zero‑config theming.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mt={2}>
                <Button size="large" variant="contained" endIcon={<ArrowForwardIosOutlined />}>
                  Try the Demo
                </Button>
                <Button size="large" variant="outlined">View Docs</Button>
              </Stack>
              <Stack spacing={1} mt={3}>
                <FeatureItem text="JavaScript-first, TypeScript-ready" />
                <FeatureItem text="Responsive out of the box" />
                <FeatureItem text="Dark mode & accessibility" />
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            {/* Replace with your product screenshot/illustration */}
            <Paper
              elevation={3}
              sx={{
                height: 360,
                borderRadius: 4,
                bgcolor: theme.palette.mode === 'dark'
                  ? 'rgba(122,183,255,0.10)'
                  : 'rgba(0,87,217,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                border: '1px solid',
                borderColor: 'divider',
              }}
              aria-label="Product preview"
              role="img"
            >
              <Typography color="text.secondary">Product Screenshot / Illustration</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Features section */}
      <Container id="features" maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography variant="h4" textAlign="center" mb={4}>Why React26</Typography>
        <Grid container spacing={3}>
          {features.map((f) => (
            <Grid item xs={12} sm={6} md={4} key={f.title}>
              <Paper variant="outlined" sx={{ p: 3, borderRadius: 3, height: '100%' }}>
                <Typography variant="h6" mb={1}>{f.title}</Typography>
                <Typography color="text.secondary">{f.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA band */}
      <Box
        id="get-started"
        sx={{
          py: { xs: 6, md: 8 },
          textAlign: 'center',
          background:
            theme.palette.mode === 'dark'
              ? 'linear-gradient(180deg, rgba(122,183,255,0.12), rgba(102,223,201,0.10))'
              : 'linear-gradient(180deg, rgba(0,87,217,0.05), rgba(0,194,168,0.05))',
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={2} alignItems="center">
            <Typography variant="h5" fontWeight={700}>
              Ready to level up your landing page?
            </Typography>
            <Typography color="text.secondary">
              Start with our starter template and customize in minutes.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mt={1}>
              <Button variant="contained">Get Started</Button>
              <Button variant="outlined">Contact Sales</Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Docs & Pricing placeholders */}
      <Container id="docs" maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" mb={2}>Docs</Typography>
        <Typography color="text.secondary">
          Hook up your real documentation or link to your wiki.
        </Typography>
      </Container>

      <Container id="pricing" maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" mb={2}>Pricing</Typography>
        <Typography color="text.secondary">
          Add pricing cards and FAQs here.
        </Typography>
      </Container>

      {/* Footer */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">React26</Typography>
            <Typography color="text.secondary" mt={1}>
              A modern starter that helps you build delightful products faster.
            </Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="subtitle1" fontWeight={600}>Links</Typography>
            <Stack spacing={1} mt={1}>
              <MuiLink href="#docs" color="inherit" underline="hover">Docs</MuiLink>
              <MuiLink href="#changelog" color="inherit" underline="hover">Changelog</MuiLink>
              <MuiLink href="#community" color="inherit" underline="hover">Community</MuiLink>
            </Stack>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="subtitle1" fontWeight={600}>Legal</Typography>
            <Stack spacing={1} mt={1}>
              <MuiLink href="#privacy" color="inherit" underline="hover">Privacy</MuiLink>
              <MuiLink href="#terms" color="inherit" underline="hover">Terms</MuiLink>
            </Stack>
          </Grid>
        </Grid>
        <Typography variant="caption" color="text.secondary" display="block" mt={3}>
          © {new Date().getFullYear()} React26. All rights reserved.
        </Typography>
      </Container>
    </>
  );
}

function FeatureItem({ text }) {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <CheckCircleOutline color="primary" fontSize="small" />
      <Typography variant="body1">{text}</Typography>
    </Stack>
  );
}

const features = [
  { title: 'Performance-first', desc: 'Lazy-loading, code splitting, optimized assets.' },
  { title: 'Accessible by default', desc: 'Semantic components with sensible aria attributes.' },
  { title: 'Developer-friendly', desc: 'ESLint/Prettier-ready and simple structure.' },
  { title: 'Beautiful UI', desc: 'Material UI theme with easy brand customization.' },
  { title: 'Production-ready', desc: 'Env management, error boundaries, sensible defaults.' },
  { title: 'Scalable', desc: 'Modular structure for features, pages, and services.' },
];
