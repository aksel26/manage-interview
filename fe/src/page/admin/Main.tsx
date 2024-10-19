import { Container, Divider, Flex, Grid, Group, NavLink, Pill, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import IconUser from "../../assets/icon-user.svg?react";
import { RoomComponent } from "../../component/UI/Admin/Main/RoomComponent";
export const Main = () => {
  const rooms = Array.from({ length: 33 })
    .fill(0)
    .map((_, i) => i);

  const [selectedRooms, setSelectedRooms] = useState<any>([]);
  const handleSelectRoom = (index: number) => {
    setSelectedRooms((prevIndexes: any) => {
      if (prevIndexes.includes(index)) {
        // 이미 선택된 인덱스라면 제거
        return prevIndexes.filter((i: number) => i !== index);
      } else {
        // 선택되지 않은 인덱스라면 추가
        return [...prevIndexes, index];
      }
    });
  };
  return (
    <>
      <Container fluid bg="var(--mantine-color-gray-1)" h={"100%"} p={"xl"}>
        <Flex gap={"sm"} justify={"space-between"}>
          <Grid w={"80%"}>
            {rooms.map((_: any, index: number) => (
              <RoomComponent index={index} handleSelectRoom={handleSelectRoom} selectedRooms={selectedRooms} />
            ))}
          </Grid>
          <Divider size="sm" orientation="vertical" />
          <Flex align={"flex-start"} direction={"column"} w={"20%"}>
            <Text fw={700} fs={"lg"}>
              담당자 목록
            </Text>
            <Flex direction={"column"} w={"100%"}>
              <NavLink href="/main-page" label="정정정" leftSection={<IconUser />} active>
                <Flex direction={"column"} rowGap={"xs"} py={"xs"}>
                  <Text size={"sm"}>선택된 면접실</Text>
                  <Flex columnGap={"sm"}>
                    <Pill size="sm" withRemoveButton>
                      React
                    </Pill>
                    <Pill size="sm" withRemoveButton>
                      React
                    </Pill>
                    <Pill size="sm" withRemoveButton>
                      React
                    </Pill>
                  </Flex>
                </Flex>
              </NavLink>

              <NavLink href="/main-page" label="정정정" leftSection={<IconUser />} childrenOffset={50}>
                <Flex direction={"column"} rowGap={"xs"}>
                  <Text size={"sm"}>선택된 면접실</Text>
                  <Flex columnGap={"sm"}>
                    <Pill size="sm" withRemoveButton>
                      React
                    </Pill>
                    <Pill size="sm" withRemoveButton>
                      React
                    </Pill>
                    <Pill size="sm" withRemoveButton>
                      React
                    </Pill>
                  </Flex>
                </Flex>
              </NavLink>

              <NavLink href="/main-page" label="정정정" leftSection={<IconUser />} childrenOffset={50}>
                <Flex direction={"column"} rowGap={"xs"}>
                  <Text size={"sm"}>선택된 면접실</Text>
                  <Flex columnGap={"sm"}>
                    <Pill size="sm" withRemoveButton>
                      React
                    </Pill>
                    <Pill size="sm" withRemoveButton>
                      React
                    </Pill>
                    <Pill size="sm" withRemoveButton>
                      React
                    </Pill>
                  </Flex>
                </Flex>
              </NavLink>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};
