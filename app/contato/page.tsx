'use client'
import React, { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextareaAutosize,
} from '@mui/material'
import {
  Phone,
  WhatsApp,
  Email,
  LocationOn,
  Schedule,
  Send,
  CheckCircle,
  Facebook,
  Instagram,
  Business,
  Person,
} from '@mui/icons-material'
import Header from '../components/Header'
import Footer from '../components/Footer'

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

const services = [
  'Limpeza de Estofados',
  'Jardinagem',
  'Pintura de Paredes',
  'Manutenção de Piscinas',
  'Serviços Elétricos',
  'Produtos de Limpeza',
  'Outros'
]

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: '',
    mensagem: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSelectChange = (e: any) => {
    setFormData(prev => ({
      ...prev,
      servico: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode implementar o envio do formulário
    console.log('Dados do formulário:', formData)
    setShowSuccess(true)
    
    // Limpar formulário após 3 segundos
    setTimeout(() => {
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        servico: '',
        mensagem: ''
      })
      setShowSuccess(false)
    }, 3000)
  }

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
            Entre em Contato
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9, maxWidth: 800, mx: 'auto' }}>
            Estamos prontos para atender você! Solicite seu orçamento gratuito
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Formulário de Contato */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
              <Typography variant="h4" sx={{ mb: 4, color: 'primary.main', textAlign: 'center' }}>
                Solicite seu Orçamento
              </Typography>
              
              {showSuccess && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </Alert>
              )}
              
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Nome Completo"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="E-mail"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Telefone/WhatsApp"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                      placeholder="(11) 99999-9999"
                    />
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth required>
                      <InputLabel>Serviço de Interesse</InputLabel>
                      <Select
                        value={formData.servico}
                        label="Serviço de Interesse"
                        onChange={handleSelectChange}
                      >
                        {services.map((service, index) => (
                          <MenuItem key={index} value={service}>
                            {service}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      required
                      multiline
                      rows={4}
                      variant="outlined"
                      placeholder="Descreva detalhes do serviço que precisa..."
                    />
                  </Grid>
                  
                  <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      startIcon={<Send />}
                      sx={{
                        px: 6,
                        py: 1.5,
                        fontSize: '1.1rem',
                      }}
                    >
                      Enviar Mensagem
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
          
          {/* Informações de Contato */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {/* Contatos */}
              <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
                <Typography variant="h5" sx={{ mb: 3, color: 'primary.main', textAlign: 'center' }}>
                  Fale Conosco
                </Typography>
                
                {contactInfo.map((contact, index) => (
                  <Card
                    key={index}
                    sx={{
                      mb: 2,
                      cursor: 'pointer',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateX(8px)',
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
                    <CardContent sx={{ p: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ color: contact.color }}>
                          {contact.icon}
                        </Box>
                        <Box>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                            {contact.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {contact.info}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Paper>
              
              {/* Horário de Funcionamento */}
              <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', textAlign: 'center' }}>
                  <Schedule sx={{ mr: 1, verticalAlign: 'middle' }} />
                  Horário de Atendimento
                </Typography>
                
                <List dense>
                  {workingHours.map((schedule, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemText
                        primary={schedule.day}
                        secondary={schedule.hours}
                        primaryTypographyProps={{ fontWeight: 600, fontSize: '0.9rem' }}
                        secondaryTypographyProps={{ color: 'primary.main' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
              
              {/* Redes Sociais */}
              <Paper elevation={3} sx={{ p: 3, borderRadius: 3, textAlign: 'center' }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                  Siga-nos nas Redes
                </Typography>
                
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={<Facebook />}
                    href="https://facebook.com/jgservicos"
                    target="_blank"
                    sx={{
                      backgroundColor: '#1877F2',
                      '&:hover': { backgroundColor: '#166FE5' },
                    }}
                  >
                    Facebook
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<Instagram />}
                    href="https://instagram.com/jgservicos"
                    target="_blank"
                    sx={{
                      backgroundColor: '#E4405F',
                      '&:hover': { backgroundColor: '#D73652' },
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
      <Box sx={{ backgroundColor: 'grey.50', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Business sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                  <Typography variant="h5" sx={{ color: 'primary.main' }}>
                    Informações da Empresa
                  </Typography>
                </Box>
                
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Razão Social"
                      secondary="JG Serviços Residenciais"
                    />
                  </ListItem>
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
                      <Person sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Proprietário"
                      secondary="José Gregório Gonzales Gutierres"
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
                  Atendimento Rápido
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.7 }}>
                  Precisa de atendimento urgente? Entre em contato conosco pelo WhatsApp
                  e receba uma resposta rápida!
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<WhatsApp />}
                  href="https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento."
                  target="_blank"
                  sx={{
                    backgroundColor: '#25D366',
                    '&:hover': { backgroundColor: '#20B858' },
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                  }}
                >
                  Chamar no WhatsApp
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  )
}