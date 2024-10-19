import { Button, Flex, NavLink, Stack } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export const NavMenu = () => {
  const navigate = useNavigate();
  const MENU = [
    { label: "홈", url: "/admin" },
    { label: "담당자 관리", url: "/admin/manager" },
    { label: "면접실 관리", url: "/rooms" },
  ];
  return (
    <Flex direction={"column"} justify={"space-between"} h="100%">
      <Stack gap={"xs"}>
        {MENU.map((item: any) => (
          <NavLink label={item.label} href={item.url} />
        ))}
      </Stack>
      <Button onClick={() => navigate("/")}>로그아웃</Button>
    </Flex>
  );
};
