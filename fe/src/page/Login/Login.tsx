import { Box, Button, Center, Container, Input, PasswordInput, SegmentedControl, Stack } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [userType, setUserType] = useState<any>("advisor");
  const navigate = useNavigate();
  const submit = () => {
    navigate(`/${userType}`);
  };
  return (
    <Container h={"100vh"}>
      <Center w={"100%"} h={"100%"}>
        <Box w={"70vw"} maw={300}>
          <form onSubmit={submit}>
            <Stack gap={"md"}>
              <SegmentedControl
                color="blue"
                value={userType}
                onChange={setUserType}
                data={[
                  { label: "면접관", value: "advisor" },
                  { label: "매니저", value: "manger" },
                  { label: "관리자", value: "admin" },
                ]}
              />

              <Input.Wrapper label="아이디">
                <Input placeholder="아이디를 입력해 주세요." />
              </Input.Wrapper>
              <PasswordInput label="비밀번호" placeholder="비밀번호를 입력해 주세요." />

              <Button type="submit">로그인</Button>
            </Stack>
          </form>
        </Box>
      </Center>
    </Container>
  );
};
