import { Grid, Group, Paper, Pill, Stack, Text } from "@mantine/core";

export const RoomComponent = ({
  index,
  roomInfo,
  handleRoomClick,
  selectedStaff,
}: {
  roomInfo: any;
  index: number;
  handleRoomClick: any;
  selectedStaff: any;
}) => {
  const { staff, room } = roomInfo;
  return (
    <Grid.Col span={{ xs: 12, sm: 6, md: 3, lg: 2 }} onClick={() => handleRoomClick(index)}>
      <Paper
        withBorder
        radius="lg"
        p="md"
        bg={selectedStaff && selectedStaff.staffIdx === staff.staffIdx ? "blue" : ""}
      >
        <Group justify="space-between">
          <Text size="xl" fw={600}>
            {index + 1}
          </Text>

          {staff.staffName && (
            <Pill size="sm" bg={"#ffc8c8"}>
              {staff.staffName}
            </Pill>
          )}
        </Group>

        <Stack gap={"xs"} mt={"md"}>
          <Text size="xs">면접단계 : 인사</Text>
          <Text size="xs">면접관 : {room.advisorName}</Text>
        </Stack>
      </Paper>
    </Grid.Col>
  );
};
