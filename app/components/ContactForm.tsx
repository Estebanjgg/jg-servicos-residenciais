'use client'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  Box,
  Typography,
  Grid,
  CardContent,
  TextField,
  Button,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
  Paper,
  Avatar,
  Chip,
  Divider,
  InputAdornment,
  Fade,
  Zoom,
} from '@mui/material'
import {
  Send,
  Phone,
  Email,
  Build,
  Person,
  Message,
  Star,
  Security,
  Speed,
  CheckCircle,
  Error,
} from '@mui/icons-material'

interface ContactFormProps {
  title?: string
  subtitle?: string
  compact?: boolean
}

export default function ContactForm({ 
  title = "Entre em Contato", 
  subtitle = "Solicite um orçamento gratuito",
  compact = false 
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: '',
    mensagem: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSelectChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setFormData(prev => ({
      ...prev,
      servico: e.target.value as string
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setShowError(false)
    setShowSuccess(false)

    try {
      // Configurar EmailJS
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

      // Preparar dados para o template
      const templateParams = {
        from_name: formData.nome,
        from_email: formData.email,
        phone: formData.telefone,
        service: formData.servico,
        message: formData.mensagem,
        to_name: 'JG Serviços Residenciais',
      }

      // Enviar email
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      // Armazenar dados antes de limpar o formulário
      setSubmittedData({ ...formData })
      setShowSuccess(true)
      
      // Limpar formulário após sucesso
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        servico: '',
        mensagem: ''
      })
      
      // Ocultar mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
      
    } catch (error) {
      // Error logging removed for production build
      setShowError(true)
      
      // Ocultar mensagem de erro após 5 segundos
      setTimeout(() => {
        setShowError(false)
      }, 5000)
    } finally {
      setIsLoading(false)
    }
  }

  const servicos = [
    '🛋️ Lavagem de Estofados e Sofás',
    '🌿 Jardinagem e Paisagismo',
    '🎨 Pintura de Paredes',
    '🏊 Limpeza de Piscinas',
    '⚡ Serviços Elétricos',
    '🧽 Venda de Produtos de Limpeza',
    '🔧 Outro'
  ]

  return (
    <Paper 
      elevation={compact ? 8 : 12} 
      sx={{ 
        borderRadius: 4,
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        border: '1px solid rgba(25, 118, 210, 0.1)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 50%, #64b5f6 100%)',
        }
      }}
    >
      <CardContent sx={{ p: compact ? 3 : 4 }}>
        <Box textAlign="center" mb={compact ? 2 : 3}>
          <Avatar 
            sx={{ 
              width: compact ? 50 : 70, 
              height: compact ? 50 : 70, 
              mx: 'auto', 
              mb: 2,
              background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
              boxShadow: '0 8px 25px rgba(25, 118, 210, 0.3)'
            }}
          >
            <Send sx={{ fontSize: compact ? 25 : 35 }} />
          </Avatar>
          <Typography 
            variant={compact ? "h5" : "h4"} 
            component="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 'bold',
              color: 'primary.main',
              mb: 1,
              fontSize: { xs: compact ? '1.3rem' : '1.8rem', md: compact ? '1.5rem' : '2.2rem' }
            }}
          >
            {title}
          </Typography>
          <Typography 
            variant={compact ? "body1" : "h6"} 
            color="text.secondary"
            sx={{
              fontSize: compact ? '0.9rem' : '1.1rem',
              maxWidth: 500,
              mx: 'auto'
            }}
          >
            {subtitle}
          </Typography>
          
          {!compact && (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1, mt: 2 }}>
              <Chip 
                icon={<Speed />} 
                label="Resposta Rápida" 
                size="small" 
                color="primary" 
                variant="outlined"
              />
              <Chip 
                icon={<Security />} 
                label="100% Seguro" 
                size="small" 
                color="success" 
                variant="outlined"
              />
              <Chip 
                icon={<Star />} 
                label="Qualidade Garantida" 
                size="small" 
                color="warning" 
                variant="outlined"
              />
            </Box>
          )}
        </Box>

        <Fade in={showSuccess}>
          <Box sx={{ mb: showSuccess ? 3 : 0 }}>
            {showSuccess && (
              <Alert 
                severity="success"
                icon={<CheckCircle />}
                sx={{ 
                  mb: 3,
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)',
                  border: '2px solid #4caf50',
                  '& .MuiAlert-message': {
                    width: '100%'
                  },
                  '& .MuiAlert-icon': {
                    fontSize: '2rem'
                  }
                }}
              >
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: 'success.dark' }}>
                    🎉 Mensagem Recebida com Sucesso!
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1.5 }}>
                    Olá <strong>{submittedData?.nome || 'Cliente'}</strong>! Muito obrigado pelo seu interesse em nossos serviços.
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    📋 <strong>Serviço solicitado:</strong> {submittedData?.servico}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1.5 }}>
                    📞 <strong>Contato:</strong> {submittedData?.telefone} | {submittedData?.email}
                  </Typography>
                  <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'success.dark' }}>
                    Nossa equipe analisará sua solicitação e entrará em contato em até 24 horas para agendar uma visita técnica gratuita e fornecer um orçamento personalizado. Estamos ansiosos para atendê-lo!
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, fontWeight: 'bold' }}>
                    ✨ Atenciosamente, Equipe JG Serviços Residenciais
                  </Typography>
                </Box>
              </Alert>
            )}
          </Box>
        </Fade>
        
        <Fade in={showError}>
          <Box sx={{ mb: showError ? 3 : 0 }}>
            {showError && (
              <Alert 
                severity="error"
                icon={<Error />}
                sx={{ 
                  mb: 3,
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%)',
                  border: '2px solid #f44336',
                  '& .MuiAlert-message': {
                    width: '100%'
                  },
                  '& .MuiAlert-icon': {
                    fontSize: '2rem'
                  }
                }}
              >
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: 'error.dark' }}>
                    ⚠️ Ops! Algo deu errado
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1.5 }}>
                    Não foi possível enviar sua mensagem no momento. Mas não se preocupe, temos outras formas de contato!
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    📱 <strong>WhatsApp:</strong> (11) 99999-9999
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    📧 <strong>E-mail:</strong> contato@jgservicos.com.br
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1.5 }}>
                    📞 <strong>Telefone:</strong> (11) 3333-4444
                  </Typography>
                  <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'error.dark' }}>
                    Você também pode tentar enviar novamente em alguns minutos. Estamos aqui para ajudá-lo!
                  </Typography>
                </Box>
              </Alert>
            )}
          </Box>
        </Fade>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={compact ? 2 : 3}>
            <Grid item xs={12} md={compact ? 12 : 6}>
              <TextField
                fullWidth
                label="Nome Completo"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                required
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person sx={{ color: 'primary.main' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 3,
                    backgroundColor: 'rgba(25, 118, 210, 0.02)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(25, 118, 210, 0.05)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(25, 118, 210, 0.15)'
                    },
                    '&.Mui-focused': {
                      backgroundColor: 'rgba(25, 118, 210, 0.08)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(25, 118, 210, 0.2)'
                    }
                  },
                  '& .MuiInputLabel-root': {
                    fontWeight: 600
                  }
                }}
              />
            </Grid>
            
            <Grid item xs={12} md={compact ? 12 : 6}>
              <TextField
                fullWidth
                label="E-mail"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={{ color: 'primary.main' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 3,
                    backgroundColor: 'rgba(25, 118, 210, 0.02)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(25, 118, 210, 0.05)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(25, 118, 210, 0.15)'
                    },
                    '&.Mui-focused': {
                      backgroundColor: 'rgba(25, 118, 210, 0.08)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(25, 118, 210, 0.2)'
                    }
                  },
                  '& .MuiInputLabel-root': {
                    fontWeight: 600
                  }
                }}
              />
            </Grid>
            
            <Grid item xs={12} md={compact ? 12 : 6}>
              <TextField
                fullWidth
                label="Telefone/WhatsApp"
                name="telefone"
                value={formData.telefone}
                onChange={handleInputChange}
                required
                variant="outlined"
                placeholder="(11) 99999-9999"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone sx={{ color: 'primary.main' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 3,
                    backgroundColor: 'rgba(25, 118, 210, 0.02)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(25, 118, 210, 0.05)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(25, 118, 210, 0.15)'
                    },
                    '&.Mui-focused': {
                      backgroundColor: 'rgba(25, 118, 210, 0.08)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(25, 118, 210, 0.2)'
                    }
                  },
                  '& .MuiInputLabel-root': {
                    fontWeight: 600
                  }
                }}
              />
            </Grid>
            
            <Grid item xs={12} md={compact ? 12 : 6}>
              <FormControl 
                fullWidth 
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 3,
                    backgroundColor: 'rgba(25, 118, 210, 0.02)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(25, 118, 210, 0.05)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(25, 118, 210, 0.15)'
                    },
                    '&.Mui-focused': {
                      backgroundColor: 'rgba(25, 118, 210, 0.08)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(25, 118, 210, 0.2)'
                    }
                  },
                  '& .MuiInputLabel-root': {
                    fontWeight: 600
                  }
                }}
              >
                <InputLabel>Serviço de Interesse</InputLabel>
                <Select
                  value={formData.servico}
                  label="Serviço de Interesse"
                  onChange={handleSelectChange}
                  startAdornment={
                    <InputAdornment position="start">
                      <Build sx={{ color: 'primary.main' }} />
                    </InputAdornment>
                  }
                >
                  {servicos.map((servico) => (
                    <MenuItem 
                      key={servico} 
                      value={servico}
                      sx={{
                        '&:hover': {
                          backgroundColor: 'rgba(25, 118, 210, 0.08)'
                        }
                      }}
                    >
                      {servico}
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
                multiline
                rows={compact ? 3 : 4}
                variant="outlined"
                placeholder="Descreva detalhes do serviço, endereço, preferência de horário..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 2 }}>
                      <Message sx={{ color: 'primary.main' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 3,
                    backgroundColor: 'rgba(25, 118, 210, 0.02)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(25, 118, 210, 0.05)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(25, 118, 210, 0.15)'
                    },
                    '&.Mui-focused': {
                      backgroundColor: 'rgba(25, 118, 210, 0.08)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(25, 118, 210, 0.2)'
                    }
                  },
                  '& .MuiInputLabel-root': {
                    fontWeight: 600
                  }
                }}
              />
            </Grid>
            
            <Grid item xs={12} textAlign="center">
              {!compact && (
                <Divider sx={{ my: 2 }}>
                  <Chip label="Enviar Solicitação" color="primary" />
                </Divider>
              )}
              
              <Zoom in={true}>
                <Button
                  type="submit"
                  variant="contained"
                  size={compact ? "medium" : "large"}
                  fullWidth={compact}
                  startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : <Send />}
                  disabled={isLoading}
                  sx={{
                    px: compact ? 4 : 6,
                    py: compact ? 1.5 : 2,
                    fontSize: compact ? '1rem' : '1.2rem',
                    borderRadius: 3,
                    textTransform: 'none',
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
                    boxShadow: '0 6px 20px rgba(25, 118, 210, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #1565c0 0%, #1976d2 100%)',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 8px 25px rgba(25, 118, 210, 0.4)'
                    },
                    '&:disabled': {
                      background: 'linear-gradient(135deg, #bdbdbd 0%, #e0e0e0 100%)'
                    }
                  }}
                >
                  {isLoading ? (compact ? 'Enviando...' : '📤 Enviando...') : (compact ? 'Enviar Mensagem' : '🚀 Enviar Mensagem')}
                </Button>
              </Zoom>
              
              <Typography 
                variant="body2" 
                sx={{ 
                  textAlign: 'center', 
                  mt: 2, 
                  color: 'text.secondary',
                  fontStyle: 'italic',
                  fontSize: compact ? '0.75rem' : '0.875rem'
                }}
              >
                ✅ Seus dados estão seguros conosco • 🕐 Resposta em até 24h
              </Typography>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Paper>
  )
}