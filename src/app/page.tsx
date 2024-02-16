import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NextLink from 'next/link';
// import Image from 'next/image';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

export default function Home() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          minHeight: '70vh',
          alignItems: 'center',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Box>
          <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
            Become the ultimate reader
          </Typography>
          <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
            with Basmo’s AI Chatbot.
          </Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            marginTop: '2rem'
          }}>
            <Button sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              '&:hover': {
                backgroundColor: '#ff5e62',
              },
              p: '0.8rem 2rem',
              borderRadius: '10px',

            }} href="/sign-up" variant="contained" component={NextLink}>
              <Typography variant="h6" component="h1">
                Sign up
              </Typography>
            </Button>
            <Button sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              '&:hover': {
                backgroundColor: '#ff5e62',
              },
              p: '0.8rem 2rem',
              borderRadius: '10px',

            }} href="/login" variant="contained" component={NextLink}>
              <Typography variant="h6" component="h1">
                Log in
              </Typography>
            </Button>

          </Box>
        </Box>
      </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        padding: '2rem'

      }}>
        <Box>
          <Typography variant="h3" component="h1" sx={{
            mb: 2,
            fontSize: '3rem',
          }}>
            How it works
          </Typography>
        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          padding: '2rem'
        }}>
          <Box>
            <Typography sx={{
              mb: 2,
              fontSize: '2rem',
              fontWeight: 'bold'
            }} variant="h5" component="h4">
              One on one chat
            </Typography>
            <Paper elevation={0}>

            <Typography sx={{ mb: 2 }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, corrupti vero debitis a nisi illo enim at veniam odio repellat nobis officia nemo blanditiis iure quod explicabo qui quidem molestias!
            </Typography>
            </Paper>
          </Box>
          <Box>
            <img src="b-bg.png" alt="reading" />
          </Box>
          <Box>
            <Typography sx={{
              mb: 2,
              fontSize: '2rem',
              fontWeight: 'bold'
            }} variant="h5" component="h4">
              One on one chat
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, corrupti vero debitis a nisi illo enim at veniam odio repellat nobis officia nemo blanditiis iure quod explicabo qui quidem molestias!
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* emial subscribe portion */}

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        gap: '20px',
        padding: '2rem'
      }}>
        <Typography variant="h4" component="p">
          Subscribe to our newsletter
        </Typography>
        {/* add inpit */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          padding: '2rem'
        }}>
          <input type="email" placeholder="Enter your email" />
          <Button sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            '&:hover': {
              backgroundColor: '#ff5e62',
            },
            p: '0.8rem 2rem',
            borderRadius: '10px',

          }} variant="contained" href='/' component={NextLink}>
            <Typography variant="h6" component="h1">
              Subscribe
            </Typography>
          </Button>
          </Box>

      

      </Box>


    </>
  );
}
