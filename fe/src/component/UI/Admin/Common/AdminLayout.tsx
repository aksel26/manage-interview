import { AppShell, AppShellFooter, Burger, Flex, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavMenu } from "./NavMenu";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import useDrawerState from "../../../../store/store";

export const AdminLayout = ({ children }: any) => {
  const [opened, { toggle }] = useDisclosure();

  const { drawerOpened, drawerClose, drawerOpen } = useDrawerState();
  console.log("drawerOpened: ", drawerOpened);

  return (
    <AppShell
      footer={{ height: 50, offset: true }}
      header={{ height: 60 }}
      styles={{
        main: {
          transition: "margin-right 0.3s ease-in-out",
          paddingRight: drawerOpened ? "16%" : "0",
        },
      }}
      navbar={{
        width: 200,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header withBorder={false}>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Main h={"100vh"}>
        <Outlet />
      </AppShell.Main>
      <AppShell.Navbar p="md" withBorder={false}>
        <NavMenu />
      </AppShell.Navbar>
      <AppShellFooter withBorder={false}>
        <Flex justify={"center"} align={"center"} h={"100%"}>
          <Text ta="center">© 2021 Mantine</Text>
        </Flex>
      </AppShellFooter>
    </AppShell>
  );
};
