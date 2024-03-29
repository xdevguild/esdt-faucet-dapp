import { Container, Box, Text } from '@chakra-ui/react';
import packageJson from '../../package.json';

export const Footer = () => {
  return (
    <Box
      height={{ base: '180px', md: '120px' }}
      bgColor="dappTemplate.dark.darker"
      color="dappTemplate.white"
      display="flex"
      alignItems="center"
    >
      <Container
        maxW="container.xl"
        fontSize="sm"
        fontWeight="normal"
        textAlign="center"
      >
        <Box>MultiversX ESDT Faucet (v{`${packageJson.version}`})</Box>
        <Box fontSize="xs" fontWeight="hairline">
          Check out all the projects below. All projects for free. Please
          support all of them. Give them a credit, star them on GitHub and tell
          the world about them.
        </Box>
        <Box fontSize="xs" fontWeight="bold">
          <Text
            as="a"
            color="dappTemplate.color3.base"
            href="https://github.com/xdevguild"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {'xDevGuild'}
          </Text>
          {' - '}
          <Text
            as="a"
            color="dappTemplate.color3.base"
            href="https://github.com/ElvenTools"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {'Elven Family Tools'}
          </Text>
          {' - '}
          <Text
            as="a"
            color="dappTemplate.color3.base"
            href="https://github.com/xdevguild/nextjs-dapp-template"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {'Nextjs Dapp Template'}
          </Text>
          {' - '}
          <Text
            as="a"
            color="dappTemplate.color3.base"
            href="https://www.buildo.dev"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {'Buildo.dev'}
          </Text>
        </Box>
        <Box fontSize="xs" fontWeight="bold">
          <Text
            as="a"
            color="dappTemplate.color3.base"
            href="https://www.julian.io"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {'Julian.io'}
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
