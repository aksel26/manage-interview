import { Button, Modal, Text } from "@mantine/core";

export const DeletConfirm = ({ opened, close }: any) => {
  return (
    <Modal
      opened={opened}
      onClose={close}
      title="담당자 삭제"
      size="xs"
      centered
      styles={{
        title: { fontWeight: 700 }, // 제목의 굵기를 변경
      }}
    >
      <Text>담당자가 삭제됩니다.</Text>
      <Text>진행하시겠습니까 ?</Text>
      <Button fullWidth color="red" mt={"md"}>
        삭제하기
      </Button>
    </Modal>
  );
};
