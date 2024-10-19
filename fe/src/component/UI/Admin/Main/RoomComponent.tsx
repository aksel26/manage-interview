import { Grid, Paper, Text } from "@mantine/core";

export const RoomComponent = ({
  index,
  handleSelectRoom,
  selectedRooms,
}: {
  index: number;
  handleSelectRoom: any;
  selectedRooms: any;
}) => {
  const isSelected = (index: number) => {
    if (selectedRooms.includes(index)) {
      return "var(--mantine-color-green-0)";
    } else {
      return "var(--mantine-color-green-1)";
    }
  };
  return (
    <Grid.Col span={2} onClick={() => handleSelectRoom(index)}>
      <Paper shadow="xs" radius="lg" p="sm" bg={isSelected(index)}>
        <Text size="xl" fw={600}>
          {index + 1}
        </Text>
        <Text>Paper is the most basic ui component</Text>
      </Paper>
    </Grid.Col>
  );
};
