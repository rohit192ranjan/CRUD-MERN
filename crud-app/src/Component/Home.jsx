import { Box, styled } from '@mui/material';

import Crud from '../Assets/Images/crud.png';

const Header = styled(Box)`
    margin: 0px;
    & > div {
        margin-top: 0px;
    }
`;

const Image = styled('img')({
    width: '100%',
    height: '50%'
});

const Home = () => {

    return (
        <Header>
            <Box style={{display: 'flex'}}>
                <Image src={Crud} />
            </Box>
        </Header>
    )
}

export default Home;