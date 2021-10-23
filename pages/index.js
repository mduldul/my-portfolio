import Header from '../components/Header'
import Profile from '../components/Profile';
import { Box, Spacer, Text } from '@chakra-ui/layout';
import { Container, Grid } from '@nextui-org/react';

export default function Home({ children }) {
  return (
    <Box>
      <Box position='relative'>
        <Container>
          <div style={{ zIndex: 10, position: 'relative' }}>
            <Box mt={200} bg="white" zIndex={10}>
              <Profile />
            </Box>
          </div>
        </Container>
      </Box>
      <Box mt={3} p={100} bg="white" borderRadius="10">
        <Container>
          <Grid.Container justify="space-between">
            <Grid xs={12} md={2}>
              <Box mb="10">
                <Box style={{ width: 100, height: 8, backgroundColor: 'orange', borderRadius: 10 }} />
                <Text style={{ fontSize: 32, fontFamily: 'Verdana' }}>About me</Text>
                <Text color="gray.500">Resume</Text>
              </Box>
            </Grid>
            <Grid xs={0} md={2} />
            <Grid xs={12} md={8}>
              <Box>
                <Text style={{ fontSize:20, fontWeight: 800, fontFamily: 'Courier', marginBottom: 10 }}>
                  Hi! I'm Mert Can Düldül, I'm Software Engineer in Turkey.
                </Text>
                <Text style={{ fontFamily: 'Courier', marginBottom: 10 }}>I love minimalist details and analog photography. I work with databases and backend, but I also care about frontend and typography.</Text>
                <Text style={{ fontFamily: 'Courier' }}>Any programming language can solve anything, but it is necessary to use the appropriate one, so every day I try to learn new undiscovered.</Text>
              </Box>
            </Grid>
          </Grid.Container>
        </Container>
      </Box>
    </Box>
  );
}