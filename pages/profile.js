import { Box, Center, Heading } from "@chakra-ui/react";
import { useLRAuth } from "loginradius-react";
import { withAuthenticationRequired } from "loginradius-react";

export default function Profile() {
  const { user, isAuthenticated, isLoading } = useLRAuth();

  if (!user || !isAuthenticated || isLoading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return (
      <Box>
        <Center mt={10}>
          <Heading a="h2">
            Welcome to your profile {user.Email[0].Value}
          </Heading>
        </Center>
      </Box>
    );
  }
}

// export default withAuthenticationRequired(Profile, {
//   onRedirecting: () => (
//     <div>Redirecting you to LoginRadius awesome Login page</div>
//   ),
// });
