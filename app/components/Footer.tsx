'use client'
import React from 'react'
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material'
import {
  Phone,
  Email,
  LocationOn,
  WhatsApp,
  Facebook,
  Instagram,
} from '@mui/icons-material'
import Image from 'next/image'
import { getAssetPath } from '../utils/assets'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo e Informações da Empresa */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Image
                src={getAssetPath('/img/logo_empresa.png')}
                alt="JG Serviços Residenciais"
                width={60}
                height={60}
                style={{ borderRadius: '8px', marginRight: '16px' }}
              />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                JG Serviços Residenciais
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              Serviços completos para sua casa com qualidade e confiança.
              Cuidamos do seu lar com dedicação e profissionalismo.
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              CNPJ: 61.717.923/0001-53
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Proprietário: José Gregório Gonzales Gutierres
            </Typography>
          </Grid>

          {/* Serviços */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Nossos Serviços
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/servicos" color="inherit" sx={{ textDecoration: 'none', opacity: 0.9, '&:hover': { opacity: 1 } }}>
                • Limpeza de Estofados e Sofás
              </Link>
              <Link href="/servicos" color="inherit" sx={{ textDecoration: 'none', opacity: 0.9, '&:hover': { opacity: 1 } }}>
                • Jardinagem e Paisagismo
              </Link>
              <Link href="/servicos" color="inherit" sx={{ textDecoration: 'none', opacity: 0.9, '&:hover': { opacity: 1 } }}>
                • Pintura de Paredes
              </Link>
              <Link href="/servicos" color="inherit" sx={{ textDecoration: 'none', opacity: 0.9, '&:hover': { opacity: 1 } }}>
                • Manutenção de Piscinas
              </Link>
              <Link href="/servicos" color="inherit" sx={{ textDecoration: 'none', opacity: 0.9, '&:hover': { opacity: 1 } }}>
                • Serviços Elétricos
              </Link>
              <Link href="/servicos" color="inherit" sx={{ textDecoration: 'none', opacity: 0.9, '&:hover': { opacity: 1 } }}>
                • Produtos de Limpeza
              </Link>
            </Box>
          </Grid>

          {/* Contato */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Entre em Contato
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone sx={{ fontSize: 20 }} />
                <Typography variant="body2">
                  <Link href="tel:+5511999999999" color="inherit" sx={{ textDecoration: 'none' }}>
                    (11) 99999-9999
                  </Link>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <WhatsApp sx={{ fontSize: 20 }} />
                <Typography variant="body2">
                  <Link href="https://wa.me/5511999999999" color="inherit" sx={{ textDecoration: 'none' }}>
                    WhatsApp
                  </Link>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email sx={{ fontSize: 20 }} />
                <Typography variant="body2">
                  <Link href="mailto:contato@jgservicos.com.br" color="inherit" sx={{ textDecoration: 'none' }}>
                    contato@jgservicos.com.br
                  </Link>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOn sx={{ fontSize: 20 }} />
                <Typography variant="body2">
                  São Paulo, SP
                </Typography>
              </Box>
            </Box>

            {/* Redes Sociais */}
            <Box sx={{ mt: 3 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Siga-nos:
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton
                  href="https://facebook.com/jgservicos"
                  target="_blank"
                  sx={{ color: 'white', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  href="https://instagram.com/jgservicos"
                  target="_blank"
                  sx={{ color: 'white', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
                >
                  <Instagram />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: 'rgba(255,255,255,0.2)' }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} JG Serviços Residenciais. Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer