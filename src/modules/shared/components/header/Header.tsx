import { alpha, AppBar, Box, Container, styled, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { ReactComponent as IconLogo } from '../../../../assets/itunes_logo.svg';

type HeaderProps = {
  onChange: (value: string) => void
}

const Header = ({ onChange }: HeaderProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { value } = e.target;
    onChange(value)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar sx={styles.toolbar}>
            <Logo>
              <IconLogo />
            </Logo>
            <Typography
              variant="body1"
              noWrap
              component="div"
              sx={styles.title}
            >
              Itunes Searcher
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleChange}
              />
            </Search>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Header

// styled components

const Logo = styled('div')(({ theme }) => ({
  width: "auto",
  height: "100%",
  marginRight: "10px",
  '> svg': {
    height: "100%",
    width: "37px"
  }
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '40%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const styles = {
  title: {
    flexGrow: 1,
    display: {
      xs: 'none',
      sm: 'block'
    },
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: "2px",
  },
  toolbar: {
    padding: [0, 0, 0, 0, 0],
  },
};