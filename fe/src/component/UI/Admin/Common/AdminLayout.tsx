import { AppShell, AppShellFooter, Burger, Flex, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavMenu } from "./NavMenu";
import { Outlet } from "react-router-dom";

export const AdminLayout = ({ children }: any) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      footer={{ height: 50, offset: true }}
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header withBorder={false}>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Main h={"100vh"} w={"100vw"}>
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
