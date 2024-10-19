import { Box, Button, Input, Modal, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";

export const AddManager = ({ opened, close }: any) => {
  const INPUT_ERR = "다시 확인해 주세요.";
  const isError = false;

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <Modal opened={opened} onClose={close} title="담당자 추가" size="md" centered>
      <Box p="sm">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Stack justify="center" gap="md">
            <Input.Wrapper label="성명" error={isError && INPUT_ERR}>
              <Input placeholder="담당자 성명을 입력해 주세요." />
            </Input.Wrapper>
            <Input.Wrapper label="연락처" error={isError && INPUT_ERR}>
              <Input placeholder="연락처를 입력해 주세요." />
            </Input.Wrapper>
            <Input.Wrapper label="이메일" error={isError && INPUT_ERR}>
              <Input placeholder="예) email@email.com" type="email" />
            </Input.Wrapper>
            <Input.Wrapper label="소속" error={isError && INPUT_ERR}>
              <Input placeholder="담당자 소속을 입력해 주세요." />
            </Input.Wrapper>
            <Button mt={"xs"} fullWidth>
              등록
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};
