import AppBar from "@mui/material/AppBar";
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import Toolbar from '@mui/material/Toolbar';
import { Box, Button } from "@mui/material";
import NextLink from 'next/link';


export default function Header() {
    return (
        <>
            <AppBar position="relative" sx={{
                backgroundColor: 'white',
                color: 'black',
                boxShadow: 'none',
                borderBottom: '1px solid #e0e0e0',
                padding: '3px 0px'
            
            }}>
                <Container>
                <Toolbar sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                
                }}>
                    <Box>
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1, color:'primary.main'}}>
                            Nibabe
                        </Typography>
                    </Box>  
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '20px'
                    
                    }}>
                        <Button variant="text" component={NextLink} href="/"  sx={{ flexGrow: 1 }}>
                            Home
                        </Button>
                        <Button variant="text" component={NextLink} href="/about" sx={{ flexGrow: 1 }}>
                            About
                        </Button>
                        <Button variant="text" component={NextLink} href="/books" sx={{ flexGrow: 1 }}>
                            Books
                        </Button>
                    </Box>
                </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}