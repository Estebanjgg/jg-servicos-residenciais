'use client'
import React from 'react'
import { Fab, Tooltip } from '@mui/material'
import { WhatsApp } from '@mui/icons-material'

interface FloatingWhatsAppProps {
  phoneNumber?: string
  message?: string
}

const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ 
  phoneNumber = '5511999999999',
  message = 'Olá! Gostaria de solicitar um orçamento.' 
}) => {
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <Tooltip title="Fale conosco no WhatsApp" placement="left">
      <Fab
        onClick={handleClick}
        sx={{
          position: 'fixed',
          bottom: { xs: 20, md: 30 },
          right: { xs: 20, md: 30 },
          zIndex: 1000,
          width: { xs: 56, md: 64 },
          height: { xs: 56, md: 64 },
          background: 'linear-gradient(135deg, #25D366 0%, #20B858 100%)',
          color: 'white',
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
          '&:hover': {
            background: 'linear-gradient(135deg, #20B858 0%, #1DA851 100%)',
            transform: 'scale(1.1)',
            boxShadow: '0 6px 25px rgba(37, 211, 102, 0.6)',
          },
          '&:active': {
            transform: 'scale(0.95)',
          },
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          animation: 'pulse 2s infinite',
          '@keyframes pulse': {
            '0%': {
              boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
            },
            '50%': {
              boxShadow: '0 4px 20px rgba(37, 211, 102, 0.8)',
            },
            '100%': {
              boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
            },
          },
        }}
      >
        <WhatsApp sx={{ fontSize: { xs: 28, md: 32 } }} />
      </Fab>
    </Tooltip>
  )
}

export default FloatingWhatsApp