import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';
import Pagination from '@mui/material/Pagination';




interface Book {
    id: number;
    title: string;
    AuthorName: string;
    AuthorLastName: string;
    genre: string;
    description: string;
    // price: number;
    cover: string;
    pages: number;
    language: string;
    publisher: string;
    publicationDate: string;
    ISBN?: string;
}

const books: Book[] = [
    {
        id: 1,
        title: 'The Hobbit The Lord of the Rings',
        AuthorName: 'J.R.R.',
        AuthorLastName: 'Tolkien',
        genre: 'Fantasy',
        description: 'The Hobbit is a tale of high adventure, undertaken by a company of dwarves in search of dragon-guarded gold. A reluctant partner in this perilous quest is Bilbo Baggins, a comfort-loving unambitious hobbit, who surprises even himself by his resourcefulness and skill as a burglar.',
        cover: 'https://d1pwnu15mzvjms.cloudfront.net/210x320/9781504044486.jpg',
        pages: 310,
        language: 'English',
        publisher: 'Houghton Mifflin',
        publicationDate: '21 September 1937',
        ISBN: '978-0-395-08354-1'
    },
    {
        id: 2,
        title: 'The Lord of the Rings',
        AuthorName: 'J.R.R.',
        AuthorLastName: 'Tolkien',
        genre: 'Fantasy',
        description: 'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien\'s 1937 fantasy novel The Hobbit, but eventually developed into a much larger work.',
        cover: 'https://orion-uploads.openroadmedia.com/sm_f7e651-tolkien-lordoftherings.jpg',
        pages: 1178,
        language: 'English',
        publisher: 'Allen & Unwin',
        publicationDate: '29 July 1954',
        ISBN: '978-0-395-08354-1'
    },
    {
        id: 3,
        title: 'The Silmarillion',
        AuthorName: 'J.R.R.',
        AuthorLastName: 'Tolkien',
        genre: 'Fantasy',
        description: 'The Silmarillion is a collection of mythopoeic works by English writer J. R. R. Tolkien, edited and published posthumously by his son, Christopher Tolkien, in 1977, with assistance from Guy Gavriel Kay.',
        cover: 'https://orion-uploads.openroadmedia.com/sm_9333ba5b72d2-hp.jpg',
        pages: 365,
        language: 'English',
        publisher: 'Allen & Unwin',
        publicationDate: '15 September 1977',
        ISBN: '978-0-395-08354-1'
    },
    {
        id: 4,
        title: 'The Children of Húrin',
        AuthorName: 'J.R.R.',
        AuthorLastName: 'Tolkien',
        genre: 'Fantasy',
        description: 'The Children of Húrin is an epic fantasy novel which forms the completion of a tale by J. R. R. Tolkien. He wrote the original version of the story in the late 1910s, revised it several times later, but did not complete it before his death in 1973.',
        cover: 'https://orion-uploads.openroadmedia.com/sm_e82064-and-then-there-were-none.jpg',
        pages: 313,
        language: 'English',
        publisher: 'Houghton Mifflin',
        publicationDate: '17 April 2007',
        ISBN: '978-0-395-08354-1'
    },
    {
        id: 5,
        title: 'The Hobbit',
        AuthorName: 'J.R.R.',
        AuthorLastName: 'Tolkien',
        genre: 'Fantasy',
        description: 'The Hobbit is a tale of high adventure, undertaken by a company of dwarves in search of dragon-guarded gold. A reluctant partner in this perilous quest is Bilbo Baggins, a comfort-loving unambitious hobbit, who surprises even himself by his resourcefulness and skill as a burglar.',
        cover: 'https://d1pwnu15mzvjms.cloudfront.net/210x320/9781504044486.jpg',
        pages: 310,
        language: 'English',
        publisher: 'Houghton Mifflin',
        publicationDate: '21 September 1937',
        ISBN: '978-0-395-08354-1'
    },
    {
        id: 5,
        title: 'The Lord of the Rings',
        AuthorName: 'J.R.R.',
        AuthorLastName: 'Tolkien',
        genre: 'Fantasy',
        description: 'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien\'s 1937 fantasy novel The Hobbit, but eventually developed into a much larger work.',
        cover: 'https://orion-uploads.openroadmedia.com/sm_f7e651-tolkien-lordoftherings.jpg',
        pages: 1178,
        language: 'English',
        publisher: 'Allen & Unwin',
        publicationDate: '29 July 1954',
        ISBN: '978-0-395-08354-1'
    },
    {
        id: 6,
        title: 'The Silmarillion',
        AuthorName: 'J.R.R.',
        AuthorLastName: 'Tolkien',
        genre: 'Fantasy',
        description: 'The Silmarillion is a collection of mythopoeic works by English writer J. R. R. Tolkien, edited and published posthumously by his son, Christopher Tolkien, in 1977, with assistance from Guy Gavriel Kay.',
        cover: 'https://orion-uploads.openroadmedia.com/sm_9333ba5b72d2-hp.jpg',
        pages: 365,
        language: 'English',
        publisher: 'Allen & Unwin',
        publicationDate: '15 September 1977',
        ISBN: '978-0-395-08354-1'
    },
    {
        id: 7,
        title: 'The Children of Húrin',
        AuthorName: 'J.R.R.',
        AuthorLastName: 'Tolkien',
        genre: 'Fantasy',
        description: 'The Children of Húrin is an epic fantasy novel which forms the completion of a tale by J. R. R. Tolkien. He wrote the original version of the story in the late 1910s, revised it several times later, but did not complete it before his death in 1973.',
        cover: 'https://orion-uploads.openroadmedia.com/sm_e82064-and-then-there-were-none.jpg',
        pages: 313,
        language: 'English',
        publisher: 'Houghton Mifflin',
        publicationDate: '17 April 2007',
        ISBN: '978-0-395-08354-1'
    }


]

function SearchInput() {
    return (
        <Box
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, border: '1px solid #e0e0e0', borderRadius: '5px'}}
        >
            <InputBase
                sx={{ ml: 1, flex: 1, fontSize: '1rem'}}
                placeholder="Search Books"
                inputProps={{ 'aria-label': 'search books' }}
            />
            <Divider sx={{ height: 28, m: 1 }} orientation="vertical" />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Box>
    );
}


function BookCard({ book }: { book: Book }) {
    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <CardHeader
                title={book.title}
                subheader={book.AuthorName + ' ' + book.AuthorLastName}
            />
            <CardMedia
                component="img"
                height="194"
                image={book.cover}
                alt={book.title}
            />
            <CardContent>
                <Typography variant="body1" color="text.secondary">
                    {book.description}
                </Typography>
            </CardContent>
        </Card>
    );
}


export default function BooksPage() {
    return (
        <Container>


            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '20px', marginTop: '20px', marginBottom: '20px' }}>
                <Typography variant="h4" component="h4" sx={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
                    Books
                </Typography>
                <SearchInput />
            </Box>

            <Grid container spacing={3}>
                {books.map((book) => (
                    <Grid item key={book.id} xs={12} sm={6} md={5} lg={4}>
                        <BookCard book={book} />
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', marginBottom: '2rem' }}>
                <Pagination count={10} variant="outlined" />
            </Box>
        </Container>
    )
}