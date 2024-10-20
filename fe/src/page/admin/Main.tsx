import { Button, Container, Drawer, Flex, Grid, Group, NavLink, Portal, Stack, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import IconUser from "../../assets/icon-user.svg?react";
import { RoomComponent } from "../../component/UI/Admin/Main/RoomComponent";
import useDrawerState from "../../store/store";
export const Main = () => {
  const initialRooms = Array.from({ length: 33 }, (_, i) => ({
    room: { roomIdx: i, advisorName: "임시" },
    staff: { staffIdx: null, staffName: null },
  }));

  const staffs = Array.from({ length: 30 })
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
      <Container fluid h={"100%"} style={{ position: "relative", zIndex: 1 }}>
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
        <Portal target={"#root"}>
          <Drawer
            opened={drawerOpened}
            onClose={() => drawerClose()}
            title="매니저 배정"
            withOverlay={false}
            size={"15%"}
            position="right"
            offset={14}
            radius="lg"
            styles={{ title: { fontWeight: 700 } }}
          >
            <Stack>
              <Button size="xs">배정 완료</Button>
              <Flex direction={"column"} w={"100%"}>
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
          </Drawer>
        </Portal>
      </Container>
    </>
  );
};
