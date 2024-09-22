'use client'

import { useState } from 'react'
import { TextField, Button, Snackbar, IconButton } from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { toast, Toaster } from 'react-hot-toast'
import { ThemeProvider, createTheme } from '@mui/material/styles'

// Crear un tema personalizado para MUI
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#a78bfa',
    },
    secondary: {
      main: '#ec4899',
    },
    background: {
      default: '#0f172a',
      paper: '#1f2937',
    },
  },
})

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    asunto: '',
    mensaje: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      
      if (response.ok) {
        toast.success('Mensaje enviado exitosamente!', {
          icon: '🎉',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        })
        setFormData({ email: '', asunto: '', mensaje: '' })
      } else {
        toast.error('Hubo un error al enviar el mensaje. Intenta de nuevo.', {
          icon: '❌',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        })
        console.log(data)
      }
    } catch (error) {
      console.error('Error en el envío:', error)
      toast.error('Ocurrió un error al enviar el mensaje.', {
        icon: '❌',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCloseSnackbar = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setSnackbar({ ...snackbar, open: false })
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <section id="contact" className="py-20 bg-slate-950">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              CONTACT
            </span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <TextField
                fullWidth
                label="Your Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Subject"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                required
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Message"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                multiline
                rows={4}
                variant="outlined"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </motion.div>
            </motion.form>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Image src="/img/location.png" alt="Location" width={500} height={300} className="w-full h-auto rounded-lg" />
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-90 p-6 rounded-lg"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-2xl font-semibold text-white mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <motion.li 
                    className="flex items-center text-gray-300"
                    whileHover={{ scale: 1.05, color: '#a78bfa' }}
                  >
                    <i className="fas fa-map-marker-alt mr-2 text-purple-400"></i>
                    Cl. 16 #55-129, Guayabal, Medellín, Antioquia
                  </motion.li>
                  <motion.li 
                    className="flex items-center text-gray-300"
                    whileHover={{ scale: 1.05, color: '#a78bfa' }}
                  >
                    <i className="fas fa-phone mr-2 text-purple-400"></i>
                    313 - 525 - 86 - 60
                  </motion.li>
                  <motion.li 
                    className="flex items-center text-gray-300"
                    whileHover={{ scale: 1.05, color: '#a78bfa' }}
                  >
                    <i className="fas fa-envelope mr-2 text-purple-400"></i>
                    camilomanco2005@gmail.com
                  </motion.li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message={snackbar.message}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleCloseSnackbar}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </section>
    </ThemeProvider>
  )
}