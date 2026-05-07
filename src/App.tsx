import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  Link as MuiLink,
  Stack,
  ThemeProvider,
  Toolbar,
  Tooltip,
  Typography,
  createTheme,
} from '@mui/material';
import { Link as RouterLink, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CodeIcon from '@mui/icons-material/Code';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import LaunchIcon from '@mui/icons-material/Launch';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import StarBorderIcon from '@mui/icons-material/StarBorder';

type Project = {
  name: string;
  description: string;
  stack: string[];
  url?: string;
  highlight: string;
  homepage?: string;
  caseStudyPath?: string;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
  thumbnailSecondarySrc?: string;
};

type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  impact: string[];
};

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5b8cff',
      dark: '#2862e8',
    },
    secondary: {
      main: '#60e6ff',
    },
    background: {
      default: '#050816',
      paper: 'rgba(12, 18, 36, 0.82)',
    },
    text: {
      primary: '#f8fbff',
      secondary: '#aebbd2',
    },
  },
  typography: {
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: 0,
      lineHeight: 0.98,
    },
    h2: {
      fontWeight: 760,
      letterSpacing: 0,
    },
    h3: {
      fontWeight: 720,
      letterSpacing: 0,
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          minHeight: 44,
          boxShadow: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          borderColor: 'rgba(148, 163, 184, 0.18)',
          background:
            'linear-gradient(145deg, rgba(17, 25, 46, 0.88), rgba(8, 13, 29, 0.78))',
          boxShadow: '0 24px 90px rgba(0, 0, 0, 0.28)',
          backdropFilter: 'blur(18px)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 650,
        },
      },
    },
  },
});

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const programmingLanguages = ['C', 'C++', 'C#', 'Python', 'Java', 'JavaScript', 'TypeScript', 'Go', 'Dart'];

function calculateCompletedYears(startDate: string) {
  const start = new Date(startDate);
  const today = new Date();
  let years = today.getFullYear() - start.getFullYear();
  const hasNotReachedAnniversary =
    today.getMonth() < start.getMonth() ||
    (today.getMonth() === start.getMonth() && today.getDate() < start.getDate());

  if (hasNotReachedAnniversary) {
    years -= 1;
  }

  return Math.max(years, 0);
}

const experiences: Experience[] = [
  {
    company: 'EY Indonesia',
    role: 'Senior Technology Consultant',
    period: 'Jul 2024 - Present',
    location: 'Jakarta, Indonesia',
    summary:
      'Contributing to a large automotive transformation project with a unified back-office platform and mobile app ecosystem.',
    impact: [
      'Built React frontend experiences with PWA capabilities and role-based access control.',
      'Translated complex client operations into reliable product flows for service and back-office teams.',
      'Worked closely with multidisciplinary teams to keep feature delivery aligned with business goals.',
    ],
  },
  {
    company: 'Henan Asset Management',
    role: 'Software Engineer',
    period: 'Mar 2022 - Jul 2024',
    location: 'Jakarta, Indonesia',
    summary:
      'Building internal platforms, official company web pages, dashboards, and integrations for an Indonesian investment management company.',
    impact: [
      'Managed two part-time engineers while delivering multiple web projects.',
      'Developed back-office systems for customer and transaction management.',
      'Integrated OCR, payment gateway, email, and other third-party services using a MERN-oriented stack.',
    ],
  },
  {
    company: 'Virus Media',
    role: 'Fullstack Developer Intern',
    period: 'Jan 2022 - Apr 2022',
    location: 'Jakarta, Indonesia',
    summary:
      'Developed a KOL campaign dashboard for a digital creative agency in collaboration with UI/UX teammates.',
    impact: ['Delivered dashboard functionality using React.js, MERN stack, CoreUI, and Bootstrap.'],
  },
  {
    company: 'Edumatic International',
    role: 'Mobile Application Developer Intern',
    period: 'Jan 2021 - Feb 2021',
    location: 'Bandung, Indonesia',
    summary:
      'Led a mobile super-app internship team focused on ticketing and utility payment experiences.',
    impact: ['Coordinated four interns and shipped Flutter-based app features across mobile workflows.'],
  },
];

const projects: Project[] = [
  {
    name: 'Virus Media KOL Dashboard',
    description:
      'A campaign and KOL management dashboard built during an internship at Virus Media, covering administration, campaign setup, reporting, and influencer tracking.',
    stack: ['React.js', 'MERN Stack', 'CoreUI', 'Bootstrap'],
    highlight: 'Case study',
    caseStudyPath: '/virus-media',
    thumbnailSrc: asset('/virus-media/virus-media-25.png'),
    thumbnailAlt: 'Virus Media dashboard report screenshot',
  },
  {
    name: 'Robot Biru Super App',
    description:
      'A mobile super-app prototype delivered during an internship at Edumatic International, covering ticket booking, balance top-up, and utility payment flows.',
    stack: ['Flutter', 'Dart', 'Mobile UI', 'Product Prototype'],
    highlight: 'Case study',
    caseStudyPath: '/edumatic-robot-biru',
    thumbnailSrc: asset('/robot-biru/image 1.png'),
    thumbnailSecondarySrc: asset('/robot-biru/image 2.png'),
    thumbnailAlt: 'Robot Biru Super App menu screenshot',
  },
  {
    name: 'go-micro',
    description:
      'A Go-based microservices learning project that reflects backend architecture practice and service-oriented development.',
    stack: ['Go', 'Microservices', 'Backend'],
    url: 'https://github.com/qisashasanudin/go-micro',
    highlight: 'Recent backend focus',
  },
  {
    name: 'vdi-todo-app',
    description:
      'A TypeScript frontend project for a todo application, paired with a separate Go API service.',
    stack: ['TypeScript', 'Frontend', 'API Client'],
    url: 'https://github.com/qisashasanudin/vdi-todo-app',
    highlight: 'Typed frontend',
  },
  {
    name: 'vdi-todo-api',
    description:
      'A Go API project that complements the todo app and demonstrates service design beyond the browser.',
    stack: ['Go', 'REST API', 'Backend'],
    url: 'https://github.com/qisashasanudin/vdi-todo-api',
    highlight: 'API layer',
  },
  {
    name: 'react-movies',
    description:
      'A movie browsing web app that shows React fundamentals, data-driven UI, and deployed web experience.',
    stack: ['React', 'JavaScript', 'Vercel'],
    url: 'https://github.com/qisashasanudin/react-movies',
    homepage: 'https://sedih-mdb.vercel.app',
    highlight: 'Live web app',
  },
  {
    name: 'kurir_kopi',
    description:
      'A Dart mobile project shaped around delivery and ordering flows, showing comfort outside the web stack.',
    stack: ['Dart', 'Flutter', 'Mobile'],
    url: 'https://github.com/qisashasanudin/kurir_kopi',
    highlight: 'Mobile product',
  },
  {
    name: 'bangunin_id',
    description:
      'A Flutter project from an early product-building phase, focused on practical app workflows and mobile UI.',
    stack: ['Dart', 'Flutter', 'Product'],
    url: 'https://github.com/qisashasanudin/bangunin_id',
    highlight: 'Product prototype',
  },
];

const skillGroups = [
  {
    title: 'Programming',
    items: ['JavaScript', 'TypeScript', 'React.js', 'Node.js', 'Go', 'Python', 'Java', 'C', 'C++', 'C#', 'Flutter'],
  },
  {
    title: 'Backend & Data',
    items: ['Express.js', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Sequelize', 'Firebase', 'REST APIs'],
  },
  {
    title: 'Product & Delivery',
    items: ['Agile', 'Scrum', 'Jira', 'Confluence', 'Trello', 'Notion', 'Postman', 'Leadership'],
  },
  {
    title: 'Languages',
    items: ['English', 'Indonesian', 'Sundanese'],
  },
];

const contacts = [
  {
    label: 'Email',
    value: 'qisas.hasanudin@gmail.com',
    href: 'mailto:qisas.hasanudin@gmail.com',
    icon: <MailOutlineIcon />,
  },
  {
    label: 'Phone',
    value: '+62 878 1571 0719',
    href: 'tel:+6287815710719',
    icon: <PhoneIcon />,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/qisashasanudin',
    href: 'https://www.linkedin.com/in/qisashasanudin/',
    icon: <LinkedInIcon />,
  },
  {
    label: 'GitHub',
    value: 'github.com/qisashasanudin',
    href: 'https://github.com/qisashasanudin',
    icon: <GitHubIcon />,
  },
];

const virusMediaScreenshots = [
  {
    src: asset('/virus-media/virus-media-25.png'),
    title: 'Campaign detail',
    description: 'Campaign profile, platform requirements, KOL criteria, and influencer performance cards.',
  },
  {
    src: asset('/virus-media/virus-media-24.png'),
    title: 'Campaign report',
    description: 'Compact reporting card for cost per reach, reach, and impression performance.',
  },
  {
    src: asset('/virus-media/virus-media-20.png'),
    title: 'Campaign list',
    description: 'Campaign management table with filtering, pagination, and edit actions.',
  },
  {
    src: asset('/virus-media/virus-media-19.png'),
    title: 'Client database',
    description: 'Client records with brand identity, contact details, and access credentials.',
  },
  {
    src: asset('/virus-media/virus-media-28.png'),
    title: 'Administrator list',
    description: 'User administration with role, KOL creation totals, and account metadata.',
  },
  {
    src: asset('/virus-media/virus-media-12.png'),
    title: 'Login screen',
    description: 'Split-screen authentication page with Virus Media branding.',
  },
];

const robotBiruScreenshots = [
  {
    src: asset('/robot-biru/image 1.png'),
    title: 'Super app menu',
    description: 'Main navigation surface with quick access to ticketing, top-up, and utility features.',
  },
  {
    src: asset('/robot-biru/image 2.png'),
    title: 'Train ticket booking',
    description: 'Railway booking flow with route and travel date setup.',
  },
  {
    src: asset('/robot-biru/image 3.png'),
    title: 'Flight ticket booking',
    description: 'Airplane ticket purchase flow designed for rapid trip planning.',
  },
  {
    src: asset('/robot-biru/image 4.png'),
    title: 'Balance top-up',
    description: 'Robot Biru wallet balance top-up screen for account funding.',
  },
  {
    src: asset('/robot-biru/image 5.png'),
    title: 'Cellular and e-money top-up',
    description: 'Recharge flow for phone balance, data plans, and e-money products.',
  },
  {
    src: asset('/robot-biru/image 6.png'),
    title: 'Electricity token purchase',
    description: 'Electricity token top-up screen for prepaid utility use cases.',
  },
  {
    src: asset('/robot-biru/image 7.png'),
    title: 'Payment confirmation',
    description: 'Checkout and confirmation state in the purchase journey.',
  },
  {
    src: asset('/robot-biru/image 8.png'),
    title: 'Transaction completion',
    description: 'Success state communicating transaction completion and summary.',
  },
];

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <Stack spacing={1.5} sx={{ maxWidth: 760, mb: { xs: 4, md: 6 } }}>
      <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: 1.4 }}>
        {eyebrow}
      </Typography>
      <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 46 } }}>
        {title}
      </Typography>
      <Typography color="text.secondary" sx={{ fontSize: { xs: 16, md: 18 }, lineHeight: 1.75 }}>
        {copy}
      </Typography>
    </Stack>
  );
}

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.querySelector(location.hash);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [location.pathname, location.hash]);

  return null;
}

function VirusMediaPage() {
  return (
    <Box component="main" sx={{ position: 'relative', zIndex: 1 }}>
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Stack spacing={{ xs: 5, md: 7 }}>
          <Stack spacing={2.5} sx={{ maxWidth: 960 }}>
            <Button
              component={RouterLink}
              to="/#projects"
              startIcon={<ArrowBackIcon />}
              sx={{ alignSelf: 'flex-start' }}
            >
              Back to projects
            </Button>
            <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: 1.4 }}>
              Case Study
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: 44, sm: 68, md: 92 } }}>
              Virus Media KOL Dashboard
            </Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 820, fontSize: { xs: 17, md: 20 }, lineHeight: 1.8 }}>
              A campaign management dashboard for Virus Media Investara, built during Qisas's full-stack
              developer internship to help teams manage clients, campaigns, KOL data, quick entries, and
              campaign reporting workflows.
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
              {['React.js', 'MERN Stack', 'CoreUI', 'Bootstrap', 'Dashboard UI'].map((item) => (
                <Chip key={item} label={item} color="primary" variant="outlined" />
              ))}
            </Stack>
          </Stack>

          <Grid container spacing={2.5}>
            {[
              {
                title: 'Role',
                copy: 'Full-stack developer intern collaborating with UI/UX teammates.',
              },
              {
                title: 'Scope',
                copy: 'Authentication, database management screens, campaign setup, KOL data, and reporting views.',
              },
              {
                title: 'Focus',
                copy: 'Operational clarity for teams managing influencer marketing campaigns.',
              },
            ].map((item) => (
              <Grid size={{ xs: 12, md: 4 }} key={item.title}>
                <Card variant="outlined" sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h3" sx={{ fontSize: 22, mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {item.copy}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Card variant="outlined">
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Box
                component="img"
                src={virusMediaScreenshots[0].src}
                alt={virusMediaScreenshots[0].title}
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  bgcolor: 'rgba(255,255,255,0.04)',
                }}
              />
              <Stack spacing={1} sx={{ mt: 2 }}>
                <Typography variant="h3" sx={{ fontSize: 24 }}>
                  {virusMediaScreenshots[0].title}
                </Typography>
                <Typography color="text.secondary">{virusMediaScreenshots[0].description}</Typography>
              </Stack>
            </CardContent>
          </Card>

          <Box>
            <SectionHeading
              eyebrow="Screens"
              title="Dashboard flows and reporting views."
              copy="Selected screenshots from the Virus Media dashboard, showing the core product areas Qisas helped implement."
            />
            <Grid container spacing={2.5}>
              {virusMediaScreenshots.slice(1).map((shot) => (
                <Grid size={{ xs: 12, md: 6 }} key={shot.src}>
                  <Card variant="outlined" sx={{ height: '100%' }}>
                    <CardContent sx={{ p: 2.5 }}>
                      <Box
                        component="img"
                        src={shot.src}
                        alt={shot.title}
                        loading="lazy"
                        sx={{
                          width: '100%',
                          borderRadius: 2,
                          border: '1px solid rgba(148, 163, 184, 0.18)',
                        }}
                      />
                      <Typography variant="h3" sx={{ fontSize: 20, mt: 2 }}>
                        {shot.title}
                      </Typography>
                      <Typography color="text.secondary" sx={{ mt: 0.75, lineHeight: 1.65 }}>
                        {shot.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

function RobotBiruPage() {
  return (
    <Box component="main" sx={{ position: 'relative', zIndex: 1 }}>
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Stack spacing={{ xs: 5, md: 7 }}>
          <Stack spacing={2.5} sx={{ maxWidth: 960 }}>
            <Button
              component={RouterLink}
              to="/#projects"
              startIcon={<ArrowBackIcon />}
              sx={{ alignSelf: 'flex-start' }}
            >
              Back to projects
            </Button>
            <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: 1.4 }}>
              Case Study
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: 44, sm: 68, md: 92 } }}>
              Robot Biru Super App
            </Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 820, fontSize: { xs: 17, md: 20 }, lineHeight: 1.8 }}>
              A mobile super-app internship project at Edumatic International focused on practical consumer
              transaction flows such as ticket booking, wallet top-ups, cellular recharge, and electricity token
              purchases.
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
              {['Flutter', 'Dart', 'Mobile App', 'Ticketing', 'Top-up'].map((item) => (
                <Chip key={item} label={item} color="primary" variant="outlined" />
              ))}
            </Stack>
          </Stack>

          <Grid container spacing={2.5}>
            {[
              {
                title: 'Role',
                copy: 'Mobile application developer intern and team lead during the internship program.',
              },
              {
                title: 'Scope',
                copy: 'Train and flight ticketing flows, balance top-up, cellular/e-money recharge, and utility payments.',
              },
              {
                title: 'Focus',
                copy: 'Clear end-user transaction journeys with reliable form and checkout experiences.',
              },
            ].map((item) => (
              <Grid size={{ xs: 12, md: 4 }} key={item.title}>
                <Card variant="outlined" sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h3" sx={{ fontSize: 22, mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {item.copy}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Card variant="outlined">
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Box
                sx={{
                  p: { xs: 1.5, md: 2 },
                  borderRadius: 2,
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  bgcolor: 'rgba(255,255,255,0.03)',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    width: { xs: 220, sm: 260, md: 300 },
                    borderRadius: 2.5,
                    overflow: 'hidden',
                    border: '1px solid rgba(148, 163, 184, 0.3)',
                    bgcolor: 'rgba(10, 15, 30, 0.92)',
                  }}
                >
                  <Box
                    component="img"
                    src={robotBiruScreenshots[0].src}
                    alt={robotBiruScreenshots[0].title}
                    sx={{
                      width: '100%',
                      display: 'block',
                    }}
                  />
                </Box>
              </Box>
              <Stack spacing={1} sx={{ mt: 2 }}>
                <Typography variant="h3" sx={{ fontSize: 24 }}>
                  {robotBiruScreenshots[0].title}
                </Typography>
                <Typography color="text.secondary">{robotBiruScreenshots[0].description}</Typography>
              </Stack>
            </CardContent>
          </Card>

          <Box>
            <SectionHeading
              eyebrow="Screens"
              title="Core mobile transaction flows."
              copy="Selected screenshots from the Robot Biru Super App showing key booking, top-up, and utility interactions."
            />
            <Grid container spacing={2.5}>
              {robotBiruScreenshots.slice(1).map((shot) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={shot.src}>
                  <Card variant="outlined" sx={{ height: '100%' }}>
                    <CardContent sx={{ p: 2.5 }}>
                      <Box
                        sx={{
                          p: 1,
                          borderRadius: 2,
                          border: '1px solid rgba(148, 163, 184, 0.16)',
                          bgcolor: 'rgba(255,255,255,0.03)',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <Box
                          sx={{
                            width: '100%',
                            maxWidth: 220,
                            borderRadius: 2,
                            overflow: 'hidden',
                            border: '1px solid rgba(148, 163, 184, 0.28)',
                            bgcolor: 'rgba(10, 15, 30, 0.9)',
                          }}
                        >
                          <Box
                            component="img"
                            src={shot.src}
                            alt={shot.title}
                            loading="lazy"
                            sx={{
                              width: '100%',
                              display: 'block',
                            }}
                          />
                        </Box>
                      </Box>
                      <Typography variant="h3" sx={{ fontSize: 20, mt: 2 }}>
                        {shot.title}
                      </Typography>
                      <Typography color="text.secondary" sx={{ mt: 0.75, lineHeight: 1.65 }}>
                        {shot.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

function App() {
  const stats = [
    { label: 'Years of experience', value: `${calculateCompletedYears('2021-01-01')}+` },
    { label: 'Programming languages', value: String(programmingLanguages.length) },
    { label: 'Languages', value: '3' },
    { label: 'Repositories', value: '17' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToHash />
      <Box
        sx={{
          minHeight: '100vh',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <Box
          aria-hidden="true"
          sx={{
            position: 'fixed',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(circle at 18% 12%, rgba(37, 99, 235, 0.46) 0, rgba(37, 99, 235, 0) 30%), radial-gradient(circle at 82% 18%, rgba(34, 211, 238, 0.22) 0, rgba(34, 211, 238, 0) 28%), radial-gradient(circle at 52% 76%, rgba(79, 70, 229, 0.18) 0, rgba(79, 70, 229, 0) 34%), linear-gradient(180deg, #050816 0%, #081a38 48%, #050816 100%)',
          }}
        />
        <AppBar
          position="sticky"
          elevation={0}
          sx={{
            zIndex: 10,
            bgcolor: 'rgba(5, 8, 22, 0.62)',
            color: 'text.primary',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(148, 163, 184, 0.12)',
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ minHeight: 72, gap: 2 }}>
              <MuiLink component={RouterLink} to="/" underline="none" sx={{ fontWeight: 850, fontSize: 18 }}>
                QH
              </MuiLink>
              <Box sx={{ flexGrow: 1 }} />
              <Stack direction="row" spacing={1.5} sx={{ display: { xs: 'none', md: 'flex' } }}>
                {navItems.map((item) => (
                  <Button key={item.href} color="inherit" component={RouterLink} to={`/${item.href}`}>
                    {item.label}
                  </Button>
                ))}
              </Stack>
              <Tooltip title="GitHub">
                <IconButton
                  aria-label="GitHub profile"
                  href="https://github.com/qisashasanudin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
            </Toolbar>
          </Container>
        </AppBar>

        <Routes>
          <Route path="/virus-media" element={<VirusMediaPage />} />
          <Route path="/edumatic-robot-biru" element={<RobotBiruPage />} />
          <Route
            path="/"
            element={(
              <Box component="main" sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            component="section"
            sx={{
              pt: { xs: 8, md: 12 },
              pb: { xs: 8, md: 12 },
            }}
          >
            <Container maxWidth="lg">
              <Grid container spacing={{ xs: 5, md: 7 }} alignItems="center">
                <Grid size={{ xs: 12, md: 7 }}>
                  <Stack spacing={3}>
                    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                      <Chip icon={<LocationOnIcon />} label="Jakarta, Indonesia" variant="outlined" />
                    </Stack>
                    <Stack spacing={1.5} sx={{ maxWidth: 920 }}>
                      <Typography
                        component="p"
                        sx={{
                          color: '#ffffff',
                          fontSize: { xs: 58, sm: 84, md: 116 },
                          fontWeight: 900,
                          lineHeight: 0.9,
                          letterSpacing: 0,
                        }}
                      >
                        Qisas Hasanudin
                      </Typography>
                      <Typography
                        variant="h1"
                        sx={{
                          color: 'rgba(248, 251, 255, 0.86)',
                          fontSize: { xs: 34, sm: 48, md: 64 },
                          maxWidth: 850,
                        }}
                      >
                        Technology consultant and full-stack developer.
                      </Typography>
                    </Stack>
                    <Typography
                      color="text.secondary"
                      sx={{ maxWidth: 760, fontSize: { xs: 18, md: 21 }, lineHeight: 1.8 }}
                    >
                      A bilingual Computer Engineering graduate, senior technology consultant, and software
                      engineer focused on React frontends, robust back-office platforms, integrations, and
                      practical delivery for teams that need software to hold up in production.
                    </Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                      <Button
                        variant="contained"
                        size="large"
                        component={RouterLink}
                        to="/#projects"
                        endIcon={<ArrowForwardIcon />}
                      >
                        View projects
                      </Button>
                      <Button
                        variant="outlined"
                        size="large"
                        href={asset('/qisas-hasanudin-resume.pdf')}
                        startIcon={<DownloadIcon />}
                      >
                        Download CV
                      </Button>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid size={{ xs: 12, md: 5 }}>
                  <Box
                    sx={{
                      p: { xs: 2, md: 2.5 },
                      border: '1px solid rgba(13, 99, 255, 0.18)',
                      bgcolor: 'rgba(9, 15, 32, 0.74)',
                      borderRadius: 2,
                      background:
                        'linear-gradient(145deg, rgba(15, 23, 42, 0.9), rgba(10, 18, 38, 0.68))',
                      boxShadow: '0 28px 100px rgba(0, 0, 0, 0.35)',
                      backdropFilter: 'blur(18px)',
                    }}
                  >
                    <Stack spacing={3} alignItems="center">
                      <Avatar
                        src="https://avatars.githubusercontent.com/u/47523892?v=4"
                        alt="Qisas Hasanudin"
                        sx={{
                          width: { xs: 184, sm: 220, md: 260 },
                          height: { xs: 184, sm: 220, md: 260 },
                          border: '8px solid rgba(91, 140, 255, 0.16)',
                        }}
                      />
                      <Grid container spacing={1.5} sx={{ width: '100%' }}>
                        {stats.map((stat) => (
                          <Grid size={6} key={stat.label}>
                            <Box
                              sx={{
                                p: 2,
                                border: '1px solid rgba(148, 163, 184, 0.16)',
                                borderRadius: 2,
                                minHeight: 108,
                                bgcolor: 'rgba(255, 255, 255, 0.045)',
                              }}
                            >
                              <Typography variant="h4" sx={{ fontWeight: 850, color: '#ffffff' }}>
                                {stat.value}
                              </Typography>
                              <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                                {stat.label}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>

          <Container maxWidth="lg">
            <Box component="section" id="work" sx={{ py: { xs: 8, md: 11 } }}>
              <SectionHeading
                eyebrow="Work"
                title="Bridging business needs and production-ready software."
                copy="Qisas works across client-facing transformation projects, internal product engineering, and hands-on implementation, turning complex requirements into clear, reliable systems."
              />
              <Stack spacing={2}>
                {experiences.map((item) => (
                  <Card key={`${item.company}-${item.role}`} variant="outlined">
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                      <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 4 }}>
                          <Typography variant="h3" sx={{ fontSize: { xs: 22, md: 26 }, mb: 0.5 }}>
                            {item.company}
                          </Typography>
                          <Typography sx={{ fontWeight: 750 }}>{item.role}</Typography>
                          <Typography color="text.secondary" sx={{ mt: 1 }}>
                            {item.period}
                          </Typography>
                          <Typography color="text.secondary">{item.location}</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 8 }}>
                          <Typography sx={{ fontSize: 17, lineHeight: 1.7, mb: 2 }}>
                            {item.summary}
                          </Typography>
                          <Stack spacing={1.25}>
                            {item.impact.map((impact) => (
                              <Stack direction="row" spacing={1.25} key={impact} alignItems="flex-start">
                                <Box
                                  sx={{
                                    width: 7,
                                    height: 7,
                                    borderRadius: '50%',
                                    bgcolor: 'primary.main',
                                    mt: 1.1,
                                    flexShrink: 0,
                                  }}
                                />
                                <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                  {impact}
                                </Typography>
                              </Stack>
                            ))}
                          </Stack>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </Box>

            <Divider />

            <Box component="section" id="projects" sx={{ py: { xs: 8, md: 11 } }}>
              <SectionHeading
                eyebrow="Projects"
                title="Selected public GitHub work."
                copy="A concise set of public repositories showing Qisas's expertise across frontend, backend, mobile, and systems fundamentals."
              />
              <Grid container spacing={2.5}>
                {projects.map((project) => (
                  <Grid size={{ xs: 12, md: 6 }} key={project.name}>
                    <Card
                      variant="outlined"
                      sx={{
                        height: '100%',
                        transition: 'transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          borderColor: 'rgba(96, 230, 255, 0.46)',
                          boxShadow: '0 24px 86px rgba(37, 99, 235, 0.22)',
                        },
                      }}
                    >
                      <CardContent sx={{ p: { xs: 3, md: 3.5 }, height: '100%' }}>
                        <Stack spacing={2.5} sx={{ height: '100%' }}>
                          <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
                            <Box>
                              <Chip size="small" label={project.highlight} color="primary" variant="outlined" />
                              <Typography variant="h3" sx={{ fontSize: 24, mt: 1.5 }}>
                                {project.name}
                              </Typography>
                            </Box>
                            {project.url || project.caseStudyPath ? (
                              <Tooltip title={project.caseStudyPath ? 'Open case study' : 'Open repository'}>
                                <IconButton
                                  aria-label={`Open ${project.name}`}
                                  href={project.url}
                                  component={project.caseStudyPath ? RouterLink : 'a'}
                                  to={project.caseStudyPath}
                                  target={project.url ? '_blank' : undefined}
                                  rel={project.url ? 'noreferrer' : undefined}
                                >
                                  <LaunchIcon />
                                </IconButton>
                              </Tooltip>
                            ) : null}
                          </Stack>
                          <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
                            {project.description}
                          </Typography>
                          {project.thumbnailSrc ? (
                            project.thumbnailSecondarySrc ? (
                              <Stack
                                direction="row"
                                spacing={1.5}
                                sx={{
                                  borderRadius: 2,
                                  border: '1px solid rgba(148, 163, 184, 0.2)',
                                  bgcolor: 'rgba(255,255,255,0.04)',
                                  p: 1.5,
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}
                              >
                                {[project.thumbnailSrc, project.thumbnailSecondarySrc].map((src) => (
                                  <Box
                                    key={src}
                                    sx={{
                                      width: 74,
                                      height: 126,
                                      borderRadius: 2,
                                      overflow: 'hidden',
                                      border: '1px solid rgba(148, 163, 184, 0.28)',
                                      bgcolor: 'rgba(10, 15, 30, 0.9)',
                                      flexShrink: 0,
                                    }}
                                  >
                                    <Box
                                      component="img"
                                      src={src}
                                      alt={project.thumbnailAlt ?? `${project.name} screenshot`}
                                      loading="lazy"
                                      sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                      }}
                                    />
                                  </Box>
                                ))}
                              </Stack>
                            ) : (
                              <Box
                                component="img"
                                src={project.thumbnailSrc}
                                alt={project.thumbnailAlt ?? `${project.name} screenshot`}
                                loading="lazy"
                                sx={{
                                  width: '100%',
                                  maxWidth: 220,
                                  borderRadius: 2,
                                  border: '1px solid rgba(148, 163, 184, 0.2)',
                                  bgcolor: 'rgba(255,255,255,0.04)',
                                }}
                              />
                            )
                          ) : null}
                          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                            {project.stack.map((item) => (
                              <Chip key={item} size="small" label={item} />
                            ))}
                          </Stack>
                          <Box sx={{ flexGrow: 1 }} />
                          <Stack direction="row" spacing={1}>
                            {project.url ? (
                              <Button
                                href={project.url}
                                target="_blank"
                                rel="noreferrer"
                                startIcon={<GitHubIcon />}
                              >
                                Repository
                              </Button>
                            ) : null}
                            {project.caseStudyPath ? (
                              <Button component={RouterLink} to={project.caseStudyPath} startIcon={<LaunchIcon />}>
                                Case study
                              </Button>
                            ) : null}
                            {project.homepage ? (
                              <Button
                                href={project.homepage}
                                target="_blank"
                                rel="noreferrer"
                                startIcon={<LanguageIcon />}
                              >
                                Live
                              </Button>
                            ) : null}
                          </Stack>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Divider />

            <Box component="section" id="skills" sx={{ py: { xs: 8, md: 11 } }}>
              <SectionHeading
                eyebrow="Skills"
                title="A practical stack for shipping reliable software."
                copy="Qisas combines frontend craft, backend fluency, database work, delivery tooling, and communication skills across varied cultural and professional environments."
              />
              <Grid container spacing={2.5}>
                {skillGroups.map((group) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={group.title}>
                    <Card variant="outlined" sx={{ height: '100%' }}>
                      <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
                        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2.5 }}>
                          {group.title === 'Programming' ? <CodeIcon color="primary" /> : <StarBorderIcon color="primary" />}
                          <Typography variant="h3" sx={{ fontSize: 22 }}>
                            {group.title}
                          </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                          {group.items.map((item) => (
                            <Chip key={item} label={item} variant="outlined" />
                          ))}
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>

          <Box
            component="section"
            id="contact"
            sx={{
              py: { xs: 8, md: 10 },
              bgcolor: 'transparent',
              borderTop: '1px solid rgba(148, 163, 184, 0.12)',
              color: '#ffffff',
            }}
          >
            <Container maxWidth="lg">
              <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
                <Grid size={{ xs: 12, md: 6 }}>
                  <Stack spacing={2.5}>
                    <Typography variant="overline" sx={{ color: '#7eb0ff', fontWeight: 800, letterSpacing: 1.4 }}>
                      Contact
                    </Typography>
                    <Typography variant="h2" sx={{ fontSize: { xs: 34, md: 52 } }}>
                      Let us build something precise and useful.
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.72)', fontSize: 18, lineHeight: 1.8 }}>
                      Open to software development, technology consultation, and full-stack work.
                    </Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                      <Button
                        variant="contained"
                        href="mailto:qisas.hasanudin@gmail.com"
                        startIcon={<MailOutlineIcon />}
                      >
                        Email Qisas
                      </Button>
                      <Button
                        variant="outlined"
                        href="https://www.linkedin.com/in/qisashasanudin/"
                        target="_blank"
                        rel="noreferrer"
                        startIcon={<LinkedInIcon />}
                        sx={{
                          color: '#ffffff',
                          borderColor: 'rgba(255,255,255,0.35)',
                          '&:hover': { borderColor: '#ffffff', bgcolor: 'rgba(255,255,255,0.06)' },
                        }}
                      >
                        LinkedIn
                      </Button>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Grid container spacing={1.5}>
                    {contacts.map((contact) => (
                      <Grid size={{ xs: 12, sm: 6 }} key={contact.label}>
                        <MuiLink href={contact.href} underline="none" target={contact.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                          <Box
                            sx={{
                              p: 2.5,
                              minHeight: 132,
                              border: '1px solid rgba(255,255,255,0.14)',
                              borderRadius: 2,
                              color: '#ffffff',
                              bgcolor: 'rgba(255,255,255,0.04)',
                              transition: 'border-color 180ms ease, background 180ms ease',
                              '&:hover': {
                                borderColor: '#7eb0ff',
                                bgcolor: 'rgba(13, 99, 255, 0.12)',
                              },
                            }}
                          >
                            <Stack spacing={1.5}>
                              <Box sx={{ color: '#7eb0ff' }}>{contact.icon}</Box>
                              <Typography sx={{ fontWeight: 800 }}>{contact.label}</Typography>
                              <Typography sx={{ color: 'rgba(255,255,255,0.7)', wordBreak: 'break-word' }}>
                                {contact.value}
                              </Typography>
                            </Stack>
                          </Box>
                        </MuiLink>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Box>
              </Box>
            )}
          />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
