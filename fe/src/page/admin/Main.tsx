import { Button, Container, Dialog, Drawer, Flex, Grid, Group, NavLink, Portal, Stack, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import IconUser from "../../assets/icon-user.svg?react";
import { RoomComponent } from "../../component/UI/Admin/Main/RoomComponent";
import useDrawerState from "../../store/store";
export const Main = () => {
  const initialRooms = Array.from({ length: 33 }, (_, i) => ({
    room: { roomIdx: i, advisorName: "임시" },
    staff: { staffIdx: null, staffName: null },
  }));

  const staffs = Array.from({ length: 33 })
    .fill(0)
    .map((_, i) => ({
      staffIdx: i + 1,
      staffName: `김정뭉${i}`,
    }));

  const [selectedStaff, setSelectedStaff] = useState<any>(null);
  const [rooms, setRooms] = useState<any>(initialRooms);

  const handleStaffClick = (staff: any) => {
    setSelectedStaff(staff);
  };

  const handleRoomClick = (roomIdx: number) => {
    if (!selectedStaff) return;

    setRooms((prevRooms: any) =>
      prevRooms.map((item: any) => {
        if (item.room.roomIdx === roomIdx) {
          if (item.staff.staffIdx === selectedStaff.staffIdx) {
            return {
              ...item,
              staff: { staffIdx: null, staffName: null },
              room: { ...item.room, advisorName: null },
            };
          }
          return {
            ...item,
            staff: selectedStaff,
            room: {
              ...item.room,
              advisorName: selectedStaff.staffName,
            },
          };
        }
        return item;
      })
    );
  };

  const { drawerOpened, drawerClose, drawerOpen } = useDrawerState();

  useEffect(() => {
    setSelectedStaff(null);
  }, [drawerOpened]);

  return (
    <>
      <Container fluid h={"100%"}>
        {/* <Divider size="xs" orientation="vertical" /> */}
        <Grid>
          <Group justify="space-between" w={"100%"}>
            <Text fw={700} fs={"lg"}>
              면접실 (총 33개 호실)
            </Text>
            <Group gap={"xs"}>
              <Button size="xs" onClick={drawerOpen}>
                매니저 배정하기
              </Button>
            </Group>
          </Group>
          {rooms.map((room: any, index: number) => (
            <RoomComponent
              selectedStaff={selectedStaff}
              index={index}
              roomInfo={room}
              handleRoomClick={handleRoomClick}
            />
          ))}
        </Grid>

        <Dialog
          opened={drawerOpened}
          withCloseButton
          onClose={() => drawerClose()}
          radius="lg"
          h={"100%"}
          w={250}
          title="담당자 배정"
          position={{ top: 20, right: 20 }}
          styles={{
            root: {
              height: "90vh",
            },
          }}
        >
          <Stack>
            <Text size="md" mb="xs" fw={600}>
              담당자 배정
            </Text>
            <Button size="xs">배정 완료</Button>
            <Flex direction={"column"} style={{ overflow: "auto" }} h={600}>
              {staffs.map((staff) => (
                <NavLink
                  label={staff.staffName}
                  leftSection={<IconUser />}
                  onClick={() => handleStaffClick(staff)}
                  key={staff.staffIdx}
                  active={selectedStaff?.staffIdx === staff.staffIdx ? true : false}
                />
              ))}
            </Flex>
          </Stack>
        </Dialog>
      </Container>
    </>
  );
};
