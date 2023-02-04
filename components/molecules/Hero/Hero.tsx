import { Container, Flex, Grid, Heading, Text } from '@chakra-ui/react'

export const Hero = () => (
  <Flex
    w='100%'
    background='linear-gradient(101.37deg, rgba(31, 162, 255, 0.78137) 22.3%, rgba(18, 216, 250, 0.86) 51.07%, #ACFF6B 86.73%);'
  >
    <Container py='67px'>
      <Grid>
        <Heading>Each one.</Heading>
        <Heading>Bring one.</Heading>
      </Grid>
    </Container>
  </Flex>
)
