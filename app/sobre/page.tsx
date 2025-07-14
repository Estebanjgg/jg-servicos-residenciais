'use client'
import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material'
import {
  Person,
  Business,
  Visibility,
  Flag,
  Star,
  CheckCircle,
  Timeline,
  Groups,
  HandshakeOutlined,
  Security,
  EmojiEvents,
  TrendingUp,
} from '@mui/icons-material'
import Header from '../components/Header'
import Footer from '../components/Footer'

const companyValues = [
  {
    icon: <Star sx={{ fontSize: 40 }} />,
    title: 'Qualidade',
    description: 'Comprometimento com a excelência em todos os serviços prestados'
  },
  {
    icon: <HandshakeOutlined sx={{ fontSize: 40 }} />,
    title: 'Confiança',
    description: 'Relacionamento transparente e honesto com nossos clientes'
  },
  {
    icon: <Security sx={{ fontSize: 40 }} />,
    title: 'Segurança',
    description: 'Procedimentos seguros e profissionais em todas as atividades'
  },
  {
    icon: <Groups sx={{ fontSize: 40 }} />,
    title: 'Atendimento',
    description: 'Foco no cliente e atendimento personalizado'
  },
  {
    icon: <EmojiEvents sx={{ fontSize: 40 }} />,
    title: 'Excelência',
    description: 'Busca constante pela melhoria e inovação'
  },
  {
    icon: <TrendingUp sx={{ fontSize: 40 }} />,
    title: 'Crescimento',
    description: 'Desenvolvimento contínuo e sustentável'
  }
]

const achievements = [
  'Mais de 500 clientes atendidos',
  'Equipe especializada e treinada',
  'Produtos e materiais de primeira qualidade',
  'Atendimento 24/7 para emergências',
  'Garantia em todos os serviços',
  'Orçamentos gratuitos e sem compromisso',
  'Flexibilidade de horários',
  'Preços competitivos no mercado'
]

const timeline = [
  {
    year: '2020',
    title: 'Fundação da Empresa',
    description: 'Início das atividades com foco em serviços residenciais de qualidade'
  },
  {
    year: '2021',
    title: 'Expansão dos Serviços',
    description: 'Ampliação do portfólio incluindo jardinagem e serviços elétricos'
  },
  {
    year: '2022',
    title: 'Crescimento da Equipe',
    description: 'Contratação de profissionais especializados em cada área'
  },
  {
    year: '2023',
    title: 'Certificações',
    description: 'Obtenção de certificações e regularização completa'
  },
  {
    year: '2024',
    title: 'Expansão Digital',
    description: 'Lançamento da plataforma digital e modernização dos processos'
  }
]

export default function SobrePage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            Sobre a JG Serviços
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9, maxWidth: 800, mx: 'auto' }}>
            Conheça nossa história, missão e valores que nos tornam referência em serviços residenciais
          </Typography>
        </Container>
      </Box>

      {/* Informações da Empresa */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Avatar
                sx={{
                  width: 120,
                  height: 120,
                  mx: 'auto',
                  mb: 3,
                  backgroundColor: 'primary.main',
                  fontSize: '3rem'
                }}
              >
                <Person sx={{ fontSize: '3rem' }} />
              </Avatar>
              <Typography variant="h4" sx={{ mb: 1, color: 'primary.main' }}>
                José Gregório Gonzales Gutierres
              </Typography>
              <Typography variant="h6" sx={{ color: 'text.secondary', mb: 2 }}>
                Proprietário e Fundador
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                Com anos de experiência no mercado de serviços residenciais, José Gregório
                fundou a JG Serviços com o objetivo de oferecer soluções completas e de
                qualidade para residências e estabelecimentos comerciais.
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Business sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                <Typography variant="h4" sx={{ color: 'primary.main' }}>
                  JG Serviços Residenciais
                </Typography>
              </Box>
              
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle sx={{ color: 'primary.main' }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="CNPJ" 
                    secondary="61.717.923/0001-53"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle sx={{ color: 'primary.main' }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Fundação" 
                    secondary="2020"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle sx={{ color: 'primary.main' }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Especialidade" 
                    secondary="Serviços Residenciais Multidisciplinares"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle sx={{ color: 'primary.main' }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Área de Atuação" 
                    secondary="São Paulo e Região Metropolitana"
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Missão, Visão e Valores */}
      <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Missão */}
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                <CardContent>
                  <Flag sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
                    Missão
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                    Oferecer serviços residenciais de alta qualidade, proporcionando
                    conforto, segurança e bem-estar aos nossos clientes através de
                    soluções personalizadas e atendimento excepcional.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            {/* Visão */}
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                <CardContent>
                  <Visibility sx={{ fontSize: 60, color: 'secondary.main', mb: 2 }} />
                  <Typography variant="h4" sx={{ mb: 3, color: 'secondary.main' }}>
                    Visão
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                    Ser reconhecida como a empresa líder em serviços residenciais
                    na região, sendo referência em qualidade, confiabilidade e
                    inovação no atendimento às necessidades dos nossos clientes.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            {/* Valores */}
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                <CardContent>
                  <Star sx={{ fontSize: 60, color: 'warning.main', mb: 2 }} />
                  <Typography variant="h4" sx={{ mb: 3, color: 'warning.main' }}>
                    Valores
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                    Qualidade, confiança, transparência, responsabilidade,
                    inovação e compromisso com a satisfação total dos nossos
                    clientes em todos os serviços prestados.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Nossos Valores Detalhados */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 6, color: 'primary.main' }}>
          Nossos Valores
        </Typography>
        
        <Grid container spacing={4}>
          {companyValues.map((value, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 3,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {value.icon}
                  </Box>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Nossa História */}
      <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 6, color: 'primary.main' }}>
            Nossa História
          </Typography>
          
          <Grid container spacing={4}>
            {timeline.map((item, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 3,
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: 4,
                      backgroundColor: 'primary.main',
                      borderRadius: '3px 3px 0 0',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Timeline sx={{ fontSize: 30, color: 'primary.main', mr: 2 }} />
                    <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                      {item.year}
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                    {item.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Nossos Diferenciais */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 6, color: 'primary.main' }}>
          Nossos Diferenciais
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3, height: '100%' }}>
              <Typography variant="h5" sx={{ mb: 3, color: 'primary.main', fontWeight: 600 }}>
                O que nos torna únicos
              </Typography>
              <List>
                {achievements.map((achievement, index) => (
                  <ListItem key={index} sx={{ py: 1 }}>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText primary={achievement} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 3,
                height: '100%',
                backgroundColor: 'primary.main',
                color: 'white',
                textAlign: 'center',
              }}
            >
              <EmojiEvents sx={{ fontSize: 80, mb: 3 }} />
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                Compromisso com a Excelência
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, opacity: 0.9, lineHeight: 1.7 }}>
                Nossa dedicação vai além da prestação de serviços. Buscamos criar
                relacionamentos duradouros baseados na confiança, qualidade e
                satisfação total dos nossos clientes.
              </Typography>
              <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.3)', my: 3 }} />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                &quot;Sua satisfação é nossa prioridade&quot;
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  )
}