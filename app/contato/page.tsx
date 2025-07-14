'use client'
import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Avatar,
  Chip,
} from '@mui/material'
import {
  Phone,
  WhatsApp,
  Email,
  LocationOn,
  Schedule,
  CheckCircle,
  Facebook,
  Instagram,
  Business,
  Person,
  Star,
  AccessTime,
  Support,
  Security,
  Verified,
} from '@mui/icons-material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const contactInfo = [
  {
    icon: <Phone sx={{ fontSize: 30 }} />,
    title: 'Telefone',
    info: '(11) 99999-9999',
    action: 'tel:+5511999999999',
    color: 'primary.main'
  },
  {
    icon: <WhatsApp sx={{ fontSize: 30 }} />,
    title: 'WhatsApp',
    info: '(11) 99999-9999',
    action: 'https://wa.me/5511999999999',
    color: '#25D366'
  },
  {
    icon: <Email sx={{ fontSize: 30 }} />,
    title: 'E-mail',
    info: 'contato@jgservicos.com.br',
    action: 'mailto:contato@jgservicos.com.br',
    color: 'secondary.main'
  },
  {
    icon: <LocationOn sx={{ fontSize: 30 }} />,
    title: 'Localização',
    info: 'São Paulo - SP',
    action: '#',
    color: 'error.main'
  }
]

const workingHours = [
  { day: 'Segunda a Sexta', hours: '08:00 - 18:00' },
  { day: 'Sábado', hours: '08:00 - 14:00' },
  { day: 'Domingo', hours: 'Plantão (Emergências)' },
  { day: 'Feriados', hours: 'Plantão (Emergências)' }
]

export default function ContatoPage() {

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 50%, #64b5f6 100%)',
          color: 'white',
          py: { xs: 6, md: 10 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.3,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ mb: 4 }}>
            <Typography 
              variant="h1" 
              sx={{ 
                mb: 3, 
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                background: 'linear-gradient(45deg, #ffffff 30%, #e3f2fd 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              💬 Entre em Contato
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                opacity: 0.95, 
                maxWidth: 800, 
                mx: 'auto',
                mb: 4,
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
              }}
            >
              ✨ Transforme sua casa com nossos serviços profissionais!
            </Typography>
          </Box>
          
          {/* Stats Cards */}
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={6} md={3}>
              <Card sx={{ backgroundColor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}>
                <CardContent sx={{ textAlign: 'center', py: 2 }}>
                  <Star sx={{ fontSize: 40, color: '#ffd700', mb: 1 }} />
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>5.0</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>Avaliação</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} md={3}>
              <Card sx={{ backgroundColor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}>
                <CardContent sx={{ textAlign: 'center', py: 2 }}>
                  <AccessTime sx={{ fontSize: 40, color: '#4caf50', mb: 1 }} />
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>24h</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>Resposta</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} md={3}>
              <Card sx={{ backgroundColor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}>
                <CardContent sx={{ textAlign: 'center', py: 2 }}>
                  <Support sx={{ fontSize: 40, color: '#ff9800', mb: 1 }} />
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>100%</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>Suporte</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} md={3}>
              <Card sx={{ backgroundColor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}>
                <CardContent sx={{ textAlign: 'center', py: 2 }}>
                  <Security sx={{ fontSize: 40, color: '#e91e63', mb: 1 }} />
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>Seguro</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>Garantido</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Grid container spacing={4}>
          {/* Formulário de Contato */}
          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 4 }}>
              <Typography 
                variant="h3" 
                sx={{ 
                  mb: 2, 
                  color: 'primary.main',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontSize: { xs: '2rem', md: '2.5rem' }
                }}
              >
                🏠 Solicite seu Orçamento Gratuito
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'text.secondary',
                  textAlign: 'center',
                  mb: 3,
                  maxWidth: 600,
                  mx: 'auto'
                }}
              >
                Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas para agendar uma visita técnica gratuita!
              </Typography>
              
              {/* Benefícios */}
              <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={4}>
                  <Box sx={{ textAlign: 'center', p: 2 }}>
                    <Chip 
                      icon={<CheckCircle />} 
                      label="Orçamento Gratuito" 
                      color="success" 
                      variant="outlined"
                      sx={{ fontWeight: 'bold' }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box sx={{ textAlign: 'center', p: 2 }}>
                    <Chip 
                      icon={<Verified />} 
                      label="Profissionais Qualificados" 
                      color="primary" 
                      variant="outlined"
                      sx={{ fontWeight: 'bold' }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box sx={{ textAlign: 'center', p: 2 }}>
                    <Chip 
                      icon={<Security />} 
                      label="Serviço Garantido" 
                      color="secondary" 
                      variant="outlined"
                      sx={{ fontWeight: 'bold' }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
            
            <ContactForm 
              title="📝 Dados para Contato"
              subtitle="Todos os campos são importantes para um atendimento personalizado"
            />
          </Grid>
          
          {/* Informações de Contato */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {/* Contatos Rápidos */}
              <Paper 
                elevation={6} 
                sx={{ 
                  p: 3, 
                  borderRadius: 4,
                  background: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
                  border: '1px solid rgba(25, 118, 210, 0.1)'
                }}
              >
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                  <Avatar 
                    sx={{ 
                      width: 60, 
                      height: 60, 
                      mx: 'auto', 
                      mb: 2,
                      background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)'
                    }}
                  >
                    <Phone sx={{ fontSize: 30 }} />
                  </Avatar>
                  <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                    📞 Fale Conosco
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                    Escolha a melhor forma de contato
                  </Typography>
                </Box>
                
                {contactInfo.map((contact, index) => (
                  <Card
                    key={index}
                    sx={{
                      mb: 2,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                      border: '2px solid transparent',
                      '&:hover': {
                        transform: 'translateY(-4px) scale(1.02)',
                        boxShadow: '0 8px 25px rgba(25, 118, 210, 0.15)',
                        border: '2px solid rgba(25, 118, 210, 0.2)',
                      },
                    }}
                    onClick={() => {
                      if (contact.action.startsWith('http')) {
                        window.open(contact.action, '_blank')
                      } else {
                        window.location.href = contact.action
                      }
                    }}
                  >
                    <CardContent sx={{ p: 2.5 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar 
                          sx={{ 
                            backgroundColor: contact.color,
                            width: 45,
                            height: 45
                          }}
                        >
                          {contact.icon}
                        </Avatar>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.main' }}>
                            {contact.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                            {contact.info}
                          </Typography>
                        </Box>
                        <Box sx={{ color: 'primary.main', opacity: 0.7 }}>
                          →
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Paper>
              
              {/* Horário de Funcionamento */}
              <Paper 
                elevation={6} 
                sx={{ 
                  p: 3, 
                  borderRadius: 4,
                  background: 'linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)',
                  border: '1px solid rgba(25, 118, 210, 0.1)'
                }}
              >
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                  <Avatar 
                    sx={{ 
                      width: 50, 
                      height: 50, 
                      mx: 'auto', 
                      mb: 2,
                      background: 'linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)'
                    }}
                  >
                    <Schedule sx={{ fontSize: 25 }} />
                  </Avatar>
                  <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                    ⏰ Horário de Atendimento
                  </Typography>
                </Box>
                
                <List dense>
                  {workingHours.map((schedule, index) => (
                    <ListItem 
                      key={index} 
                      sx={{ 
                        px: 0, 
                        py: 1,
                        borderRadius: 2,
                        mb: 1,
                        backgroundColor: index % 2 === 0 ? 'rgba(25, 118, 210, 0.05)' : 'transparent'
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 35 }}>
                        <CheckCircle sx={{ color: 'success.main', fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={schedule.day}
                        secondary={schedule.hours}
                        primaryTypographyProps={{ 
                          fontWeight: 700, 
                          fontSize: '0.95rem',
                          color: 'primary.main'
                        }}
                        secondaryTypographyProps={{ 
                          color: 'text.secondary',
                          fontWeight: 600
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
              
              {/* Redes Sociais */}
              <Paper 
                elevation={6} 
                sx={{ 
                  p: 3, 
                  borderRadius: 4, 
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #fce4ec 0%, #ffffff 100%)',
                  border: '1px solid rgba(233, 30, 99, 0.1)'
                }}
              >
                <Box sx={{ mb: 3 }}>
                  <Avatar 
                    sx={{ 
                      width: 50, 
                      height: 50, 
                      mx: 'auto', 
                      mb: 2,
                      background: 'linear-gradient(135deg, #e91e63 0%, #f06292 100%)'
                    }}
                  >
                    <Instagram sx={{ fontSize: 25 }} />
                  </Avatar>
                  <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                    📱 Siga-nos nas Redes
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                    Acompanhe nossos trabalhos
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={<Facebook />}
                    href="https://facebook.com/jgservicos"
                    target="_blank"
                    fullWidth
                    sx={{
                      backgroundColor: '#1877F2',
                      '&:hover': { 
                        backgroundColor: '#166FE5',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(24, 119, 242, 0.4)'
                      },
                      transition: 'all 0.3s ease',
                      borderRadius: 3,
                      py: 1.5,
                      fontWeight: 'bold'
                    }}
                  >
                    Facebook
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<Instagram />}
                    href="https://instagram.com/jgservicos"
                    target="_blank"
                    fullWidth
                    sx={{
                      background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                      '&:hover': { 
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(228, 64, 95, 0.4)'
                      },
                      transition: 'all 0.3s ease',
                      borderRadius: 3,
                      py: 1.5,
                      fontWeight: 'bold'
                    }}
                  >
                    Instagram
                  </Button>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Seção de Informações da Empresa */}
      <Box 
        sx={{ 
          background: 'linear-gradient(135deg, #f5f5f5 0%, #e8f5e8 50%, #f0f8ff 100%)', 
          py: { xs: 4, md: 8 },
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23e3f2fd" fill-opacity="0.4"%3E%3Cpath d="M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z"/%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.3,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h3" 
              sx={{ 
                mb: 2, 
                color: 'primary.main',
                fontWeight: 'bold',
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              🏢 Sobre Nossa Empresa
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto'
              }}
            >
              Conheça mais sobre a JG Serviços Residenciais e nossa missão de transformar sua casa
            </Typography>
          </Box>
          
          <Grid container spacing={4} alignItems="stretch">
            <Grid item xs={12} md={6}>
              <Paper 
                elevation={8} 
                sx={{ 
                  p: 4, 
                  borderRadius: 4,
                  height: '100%',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                  border: '1px solid rgba(25, 118, 210, 0.1)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(25, 118, 210, 0.15)'
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                  <Avatar 
                    sx={{ 
                      width: 60, 
                      height: 60, 
                      mr: 3,
                      background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)'
                    }}
                  >
                    <Business sx={{ fontSize: 30 }} />
                  </Avatar>
                  <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                    📋 Informações da Empresa
                  </Typography>
                </Box>
                
                <List sx={{ '& .MuiListItem-root': { py: 1.5 } }}>
                  <ListItem sx={{ backgroundColor: 'rgba(25, 118, 210, 0.05)', borderRadius: 2, mb: 1 }}>
                    <ListItemIcon>
                      <Verified sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Razão Social"
                      secondary="JG Serviços Residenciais"
                      primaryTypographyProps={{ fontWeight: 700, color: 'primary.main' }}
                      secondaryTypographyProps={{ fontWeight: 600, fontSize: '1.1rem' }}
                    />
                  </ListItem>
                  <ListItem sx={{ backgroundColor: 'rgba(76, 175, 80, 0.05)', borderRadius: 2, mb: 1 }}>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: 'success.main' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="CNPJ"
                      secondary="61.717.923/0001-53"
                      primaryTypographyProps={{ fontWeight: 700, color: 'success.main' }}
                      secondaryTypographyProps={{ fontWeight: 600, fontSize: '1.1rem' }}
                    />
                  </ListItem>
                  <ListItem sx={{ backgroundColor: 'rgba(255, 152, 0, 0.05)', borderRadius: 2 }}>
                    <ListItemIcon>
                      <Person sx={{ color: 'warning.main' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Proprietário"
                      secondary="José Gregório Gonzales Gutierres"
                      primaryTypographyProps={{ fontWeight: 700, color: 'warning.main' }}
                      secondaryTypographyProps={{ fontWeight: 600, fontSize: '1.1rem' }}
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Paper 
                elevation={8} 
                sx={{ 
                  p: 4, 
                  borderRadius: 4,
                  height: '100%',
                  background: 'linear-gradient(135deg, #e8f5e8 0%, #ffffff 100%)',
                  border: '1px solid rgba(76, 175, 80, 0.1)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(76, 175, 80, 0.15)'
                  }
                }}
              >
                <Avatar 
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    mx: 'auto', 
                    mb: 3,
                    background: 'linear-gradient(135deg, #25D366 0%, #20B858 100%)'
                  }}
                >
                  <WhatsApp sx={{ fontSize: 40 }} />
                </Avatar>
                
                <Typography variant="h4" sx={{ mb: 3, color: 'success.main', fontWeight: 'bold' }}>
                  ⚡ Atendimento Rápido
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, fontSize: '1.2rem', lineHeight: 1.7, color: 'text.secondary' }}>
                  Precisa de atendimento urgente? Entre em contato conosco pelo WhatsApp
                  e receba uma resposta rápida!
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Chip 
                    icon={<AccessTime />} 
                    label="Resposta em até 30 minutos" 
                    color="success" 
                    sx={{ fontWeight: 'bold', fontSize: '0.9rem', py: 2 }}
                  />
                </Box>
                
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<WhatsApp />}
                  href="https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento."
                  target="_blank"
                  sx={{
                    background: 'linear-gradient(135deg, #25D366 0%, #20B858 100%)',
                    '&:hover': { 
                      background: 'linear-gradient(135deg, #20B858 0%, #1DA851 100%)',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)'
                    },
                    px: 6,
                    py: 2,
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    borderRadius: 3,
                    transition: 'all 0.3s ease'
                  }}
                >
                  💬 Chamar no WhatsApp
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  )
}