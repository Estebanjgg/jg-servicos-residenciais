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
} from '@mui/icons-material'
import Header from './components/Header'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'
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
  'Profissionais qualificados e experientes',
  'Materiais e produtos de alta qualidade',
  'Atendimento personalizado',
  'Preços competitivos',
  'Garantia de satisfação',
  'Pontualidade e confiabilidade',
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
              variant="contained"
              size="large"
              startIcon={<WhatsApp />}
              href="https://wa.me/5511999999999"
              target="_blank"
              sx={{
                backgroundColor: '#25D366',
                '&:hover': { backgroundColor: '#20B858' },
                px: 4,
                py: 1.5,
              }}
            >
              WhatsApp
            </Button>
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
                Com anos de experiência no mercado, a JG Serviços Residenciais se destaca pela
                qualidade, confiabilidade e atendimento personalizado. Nosso compromisso é
                oferecer soluções completas para sua casa.
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

      {/* Call to Action */}
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h3" sx={{ mb: 2, color: 'primary.main' }}>
          Pronto para Transformar sua Casa?
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary' }}>
          Entre em contato conosco e solicite um orçamento gratuito
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<Phone />}
            href="tel:+5511999999999"
            sx={{ px: 4, py: 1.5 }}
          >
            Ligar Agora
          </Button>
          <Button
            variant="contained"
            size="large"
            startIcon={<WhatsApp />}
            href="https://wa.me/5511999999999"
            sx={{
              backgroundColor: '#25D366',
              '&:hover': { backgroundColor: '#20B858' },
              px: 4,
              py: 1.5,
            }}
          >
            WhatsApp
          </Button>
          <Button
            variant="outlined"
            size="large"
            component={Link}
            href="/contato"
            sx={{ px: 4, py: 1.5 }}
          >
            Formulário de Contato
          </Button>
        </Box>
      </Container>

      {/* Formulário de Contato */}
      <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <ContactForm 
            title="Solicite seu Orçamento Gratuito"
            subtitle="Preencha o formulário e nossa equipe entrará em contato em até 24 horas"
          />
        </Container>
      </Box>

      <Footer />
    </>
  )
}
