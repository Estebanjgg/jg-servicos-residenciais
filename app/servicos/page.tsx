'use client'
import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Paper,
} from '@mui/material'
import {
  CleaningServices,
  Grass,
  FormatPaint,
  Pool,
  ElectricalServices,
  LocalMall,
  CheckCircle,
  Star,
  Schedule,
  Security,
  ThumbUp,
  WhatsApp,
} from '@mui/icons-material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

const services = [
  {
    icon: <CleaningServices sx={{ fontSize: 60 }} />,
    title: 'Limpeza de Estofados e Sofás',
    description: 'Serviço especializado de limpeza profissional para estofados, sofás, poltronas e móveis estofados.',
    cnae: '9609-2/99 - Outras atividades de serviços pessoais não especificadas anteriormente',
    features: [
      'Limpeza a seco e úmida',
      'Produtos especializados e seguros',
      'Remoção de manchas difíceis',
      'Eliminação de ácaros e bactérias',
      'Proteção contra futuras sujeiras',
      'Secagem rápida'
    ],
    benefits: [
      'Prolonga a vida útil dos móveis',
      'Ambiente mais saudável',
      'Aparência renovada',
      'Economia em relação à troca'
    ]
  },
  {
    icon: <Grass sx={{ fontSize: 60 }} />,
    title: 'Jardinagem e Paisagismo',
    description: 'Serviços completos de jardinagem, paisagismo e manutenção de áreas verdes.',
    cnae: '8130-3/00 - Atividades paisagísticas',
    features: [
      'Poda de árvores e arbustos',
      'Plantio e replantio',
      'Adubação e fertilização',
      'Controle de pragas',
      'Limpeza de terrenos',
      'Projeto paisagístico'
    ],
    benefits: [
      'Jardim sempre bonito',
      'Valorização do imóvel',
      'Ambiente mais agradável',
      'Manutenção preventiva'
    ]
  },
  {
    icon: <FormatPaint sx={{ fontSize: 60 }} />,
    title: 'Pintura de Paredes',
    description: 'Serviços de pintura residencial e comercial com acabamento profissional.',
    cnae: '4330-4/04 - Serviços de pintura de edifícios em geral',
    features: [
      'Preparação completa das superfícies',
      'Tintas de alta qualidade',
      'Técnicas modernas de aplicação',
      'Acabamentos especiais',
      'Proteção de móveis e pisos',
      'Limpeza pós-serviço'
    ],
    benefits: [
      'Ambiente renovado',
      'Proteção das paredes',
      'Durabilidade garantida',
      'Valorização do espaço'
    ]
  },
  {
    icon: <Pool sx={{ fontSize: 60 }} />,
    title: 'Manutenção de Piscinas',
    description: 'Limpeza e manutenção completa de piscinas para seu lazer e bem-estar.',
    cnae: '8129-0/00 - Atividades de limpeza não especificadas anteriormente',
    features: [
      'Limpeza de fundo e paredes',
      'Tratamento químico da água',
      'Manutenção de equipamentos',
      'Troca de filtros',
      'Aspiração e escovação',
      'Análise da qualidade da água'
    ],
    benefits: [
      'Água sempre cristalina',
      'Segurança para banhistas',
      'Economia em produtos químicos',
      'Maior durabilidade dos equipamentos'
    ]
  },
  {
    icon: <ElectricalServices sx={{ fontSize: 60 }} />,
    title: 'Serviços Elétricos',
    description: 'Instalação e manutenção elétrica residencial e comercial com total segurança.',
    cnae: '4321-5/00 - Instalação e manutenção elétrica',
    features: [
      'Instalação de tomadas e interruptores',
      'Troca de disjuntores',
      'Instalação de luminárias',
      'Manutenção preventiva',
      'Diagnóstico de problemas',
      'Adequação às normas técnicas'
    ],
    benefits: [
      'Segurança elétrica garantida',
      'Economia de energia',
      'Prevenção de acidentes',
      'Conformidade com normas'
    ]
  },
  {
    icon: <LocalMall sx={{ fontSize: 60 }} />,
    title: 'Produtos de Limpeza',
    description: 'Venda de produtos de limpeza e saneantes domissanitários de alta qualidade.',
    cnae: '4789-0/05 - Comércio varejista de produtos saneantes domissanitário',
    features: [
      'Produtos profissionais',
      'Marcas reconhecidas',
      'Produtos concentrados',
      'Saneantes registrados na ANVISA',
      'Produtos ecológicos',
      'Orientação de uso'
    ],
    benefits: [
      'Limpeza mais eficiente',
      'Economia no uso',
      'Segurança familiar',
      'Resultados profissionais'
    ]
  }
]

const whyChooseUs = [
  {
    icon: <Star sx={{ fontSize: 40 }} />,
    title: 'Qualidade Garantida',
    description: 'Utilizamos apenas produtos e materiais de primeira qualidade'
  },
  {
    icon: <Schedule sx={{ fontSize: 40 }} />,
    title: 'Pontualidade',
    description: 'Respeitamos horários e prazos estabelecidos'
  },
  {
    icon: <Security sx={{ fontSize: 40 }} />,
    title: 'Segurança',
    description: 'Todos os serviços seguem rigorosos padrões de segurança'
  },
  {
    icon: <ThumbUp sx={{ fontSize: 40 }} />,
    title: 'Satisfação',
    description: 'Garantimos a satisfação total dos nossos clientes'
  }
]

export default function ServicosPage() {
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
            Nossos Serviços
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9, maxWidth: 800, mx: 'auto' }}>
            Oferecemos uma ampla gama de serviços residenciais e comerciais com qualidade profissional
            e atendimento personalizado
          </Typography>
        </Container>
      </Box>

      {/* Serviços Detalhados */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {services.map((service, index) => (
            <Grid item xs={12} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Grid container spacing={4} alignItems="center">
                  <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>
                      {service.icon}
                    </Box>
                    <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
                      {service.title}
                    </Typography>
                    <Chip
                      label={service.cnae}
                      size="small"
                      sx={{ backgroundColor: 'primary.light', color: 'white', mb: 2 }}
                    />
                  </Grid>
                  
                  <Grid item xs={12} md={9}>
                    <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem' }}>
                      {service.description}
                    </Typography>
                    
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                          O que fazemos:
                        </Typography>
                        <List dense>
                          {service.features.map((feature, idx) => (
                            <ListItem key={idx} sx={{ py: 0.5 }}>
                              <ListItemIcon sx={{ minWidth: 32 }}>
                                <CheckCircle sx={{ fontSize: 20, color: 'primary.main' }} />
                              </ListItemIcon>
                              <ListItemText primary={feature} />
                            </ListItem>
                          ))}
                        </List>
                      </Grid>
                      
                      <Grid item xs={12} md={6}>
                        <Typography variant="h6" sx={{ mb: 2, color: 'secondary.main' }}>
                          Benefícios:
                        </Typography>
                        <List dense>
                          {service.benefits.map((benefit, idx) => (
                            <ListItem key={idx} sx={{ py: 0.5 }}>
                              <ListItemIcon sx={{ minWidth: 32 }}>
                                <Star sx={{ fontSize: 20, color: 'secondary.main' }} />
                              </ListItemIcon>
                              <ListItemText primary={benefit} />
                            </ListItem>
                          ))}
                        </List>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Por que escolher a JG */}
      <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 6, color: 'primary.main' }}>
            Por que escolher a JG Serviços?
          </Typography>
          
          <Grid container spacing={4}>
            {whyChooseUs.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
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
                      {item.icon}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h3" sx={{ mb: 2, color: 'primary.main' }}>
          Precisa de algum desses serviços?
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary' }}>
          Entre em contato conosco e solicite um orçamento gratuito e sem compromisso
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
            href="/contato"
            sx={{ px: 4, py: 1.5 }}
          >
            Formulário de Contato
          </Button>
        </Box>
      </Container>

      <Footer />
    </>
  )
}