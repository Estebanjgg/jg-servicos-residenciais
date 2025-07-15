'use client'
import React from 'react'
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from '@mui/material'
import {
  CleaningServices,
  Grass,
  FormatPaint,
  Pool,
  ElectricalServices,
  LocalMall,
  Star,
  CheckCircle,
  Phone,
  WhatsApp,
  Email,
  LocationOn,
  Schedule,
} from '@mui/icons-material'
import Header from './components/Header'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Link from 'next/link'
import { getAssetPath } from './utils/assets'

const services = [
  {
    icon: <CleaningServices sx={{ fontSize: 40 }} />,
    title: 'Limpeza de Estofados',
    description: 'Limpeza profissional de sofás, poltronas e estofados em geral com produtos especializados.',
    cnae: '9609-2/99',
  },
  {
    icon: <Grass sx={{ fontSize: 40 }} />,
    title: 'Jardinagem',
    description: 'Serviços completos de jardinagem e paisagismo para deixar seu jardim sempre bonito.',
    cnae: '8130-3/00',
  },
  {
    icon: <FormatPaint sx={{ fontSize: 40 }} />,
    title: 'Pintura de Paredes',
    description: 'Pintura residencial e comercial com acabamento profissional e materiais de qualidade.',
    cnae: '4330-4/04',
  },
  {
    icon: <Pool sx={{ fontSize: 40 }} />,
    title: 'Manutenção de Piscinas',
    description: 'Limpeza e manutenção completa de piscinas para seu lazer e bem-estar.',
    cnae: '8129-0/00',
  },
  {
    icon: <ElectricalServices sx={{ fontSize: 40 }} />,
    title: 'Serviços Elétricos',
    description: 'Instalação e manutenção elétrica residencial e comercial com segurança garantida.',
    cnae: '4321-5/00',
  },
  {
    icon: <LocalMall sx={{ fontSize: 40 }} />,
    title: 'Produtos de Limpeza',
    description: 'Venda de produtos de limpeza e saneantes domissanitários de alta qualidade.',
    cnae: '4789-0/05',
  },
]

const benefits = [
  'Profissionais qualificados e dedicados',
  'Materiais e produtos de alta qualidade',
  'Atendimento personalizado',
  'Preços competitivos',
  'Garantia de satisfação',
  'Pontualidade e confiabilidade',
]

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

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section com Video */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '60vh', md: '80vh' },
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <video
          autoPlay
          muted
          loop
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -2,
          }}
        >
          <source src={getAssetPath('/Video/Video_inicio.mp4')} type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: -1,
          }}
        />
        
        <Container maxWidth="lg" sx={{ textAlign: 'center', color: 'white', zIndex: 1 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '3.5rem' },
              fontWeight: 700,
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
            }}
          >
            JG Serviços Residenciais
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1.2rem', md: '1.8rem' },
              mb: 4,
              opacity: 0.95,
              textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
            }}
          >
            Cuidamos da sua casa com qualidade e confiança
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              href="/servicos"
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
                px: 4,
                py: 1.5,
              }}
            >
              Nossos Serviços
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Seção de Serviços */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" sx={{ mb: 2, color: 'primary.main' }}>
            Nossos Serviços
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
            Oferecemos uma ampla gama de serviços residenciais com qualidade profissional
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                    {service.description}
                  </Typography>
                  <Chip
                    label={`CNAE: ${service.cnae}`}
                    size="small"
                    sx={{ backgroundColor: 'primary.light', color: 'white' }}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Seção Por Que Escolher */}
      <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ mb: 3, color: 'primary.main' }}>
                Por Que Escolher a JG?
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.7 }}>
                A JG Serviços Residenciais se destaca pela qualidade, confiabilidade e 
                atendimento personalizado. Nosso compromisso é oferecer soluções completas 
                para sua casa com dedicação e profissionalismo.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {benefits.map((benefit, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CheckCircle sx={{ color: 'primary.main' }} />
                    <Typography variant="body1">{benefit}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  p: 4,
                  borderRadius: 2,
                  textAlign: 'center',
                }}
              >
                <Star sx={{ fontSize: 60, mb: 2 }} />
                <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
                  Satisfação Garantida
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                  Nosso compromisso é com a sua satisfação. Trabalhamos com dedicação
                  para superar suas expectativas em cada serviço.
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  CNPJ: 61.717.923/0001-53
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  José Gregório Gonzales Gutierres
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Formulário de Contato */}
      <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <ContactForm 
            title="Solicite seu Orçamento Gratuito"
            subtitle="Preencha o formulário e nossa equipe entrará em contato em até 24 horas"
          />
        </Container>
      </Box>

      {/* Seção Fale Conosco e Horários */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {/* Fale Conosco */}
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={6} 
              sx={{ 
                p: 3, 
                borderRadius: 4,
                background: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
                border: '1px solid rgba(25, 118, 210, 0.1)',
                height: '100%'
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
          </Grid>
          
          {/* Horário de Funcionamento */}
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={6} 
              sx={{ 
                p: 3, 
                borderRadius: 4,
                background: 'linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)',
                border: '1px solid rgba(25, 118, 210, 0.1)',
                height: '100%'
              }}
            >
              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <Avatar 
                  sx={{ 
                    width: 60, 
                    height: 60, 
                    mx: 'auto', 
                    mb: 2,
                    background: 'linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)'
                  }}
                >
                  <Schedule sx={{ fontSize: 30 }} />
                </Avatar>
                <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                  ⏰ Horário de Atendimento
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                  Estamos sempre prontos para atendê-lo
                </Typography>
              </Box>
              
              <List dense>
                {workingHours.map((schedule, index) => (
                  <ListItem 
                    key={index} 
                    sx={{ 
                      px: 0, 
                      py: 1.5,
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
                        fontSize: '1rem',
                        color: 'primary.main'
                      }}
                      secondaryTypographyProps={{ 
                        color: 'text.secondary',
                        fontWeight: 600,
                        fontSize: '0.9rem'
                      }}
                    />
                  </ListItem>
                ))}
              </List>
              

            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
