"use client";

import { ROUTES } from "@/constants";
import { Button, Divider, Flex, Text } from "@aws-amplify/ui-react";
import { signOut } from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NavBar = ({ isSignedIn }: { isSignedIn: boolean }) => {
  const router = useRouter();
  const [authCheck, setAuthCheck] = useState(isSignedIn);

  useEffect(() => {
    const hubListenerCancel = Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signedIn":
          setAuthCheck(true);
          router.push(ROUTES.HOME);
          break;
        case "signedOut":
          setAuthCheck(false);
          router.push(ROUTES.HOME);
          break;
      }
    });

    return () => hubListenerCancel();
  }, [router]);

  const signOutSignIn = async () => {
    if (authCheck) {
      await signOut();
    } else {
      router.push(ROUTES.SIGN_IN);
    }
  };

  const defaultRoutes = [
    {
      href: ROUTES.HOME,
      label: "Home",
    },
    {
      href: ROUTES.PROJECTS + ROUTES.NEW,
      label: "New Project",
      loggedIn: true,
    },
  ];

  const routes = defaultRoutes.filter(
    (route) => route.loggedIn === authCheck || route.loggedIn === undefined
  );

  return (
    <>
      <Flex
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"1rem"}
      >
        <Flex as="nav" alignItems={"center"} gap={"3rem"} margin={"0 2rem"}>
          {routes.map((route, index) => (
            <Link key={index} href={route.href}>
              <Text>{route.label}</Text>
            </Link>
          ))}
        </Flex>
        <Button
          variation="primary"
          borderRadius={"2rem"}
          className="mr-4"
          onClick={signOutSignIn}
        >
          {authCheck ? "Sign Out" : "Sign In"}
        </Button>
      </Flex>
      <Divider size="small" />
    </>
  );
};

export default NavBar;
