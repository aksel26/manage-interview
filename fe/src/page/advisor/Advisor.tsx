import {
  ActionIcon,
  Affix,
  Box,
  Button,
  Card,
  Center,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  Input,
  Modal,
  Stack,
  Text,
  Transition,
} from "@mantine/core";
import React, { useRef } from "react";
import note from "../../assets/advisor/note.webp";
import IconChatbot from "../../assets/advisor/message-chatbot.svg?react";
import ArrowNarrowUp from "../../assets/advisor/arrow-narrow-up.svg?react";
import { useDisclosure } from "@mantine/hooks";

export const Advisor = () => {
  const aaa = Array.from({ length: 4 })
    .fill(0)
    .map((_, i) => i);
  console.log("🚀 ~ Advisor ~ aaa:", aaa);

  const containerRef = useRef<any>();

  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Container h={"100vh"} size={"xs"} style={{ position: "relative" }}>
      <Center h={"100%"}>
        <Stack>
          <Text fw={700} size="xl">
            요청하기
          </Text>
          <Text fw={500} size="md" c="dimmed">
            면접 진행에 필요한 항목을 클릭해 주세요.
            <br />
            면접 진행 직원에게 전송됩니다.
          </Text>
          <Box>
            <Grid gutter={"lg"}>
              {aaa.map((item: any) => (
                <Grid.Col span={6}>
                  <Card
                    key={item}
                    shadow="xl"
                    padding="sm"
                    component="a"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                  >
                    <Card.Section>
                      <Image src={note} alt="ask" radius="md" h={150} />
                    </Card.Section>

                    <Text fw={500} size="md" mt="xs" ta={"center"}>
                      물 요청하기
                    </Text>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
            <Modal
              opened={opened}
              onClose={close}
              title="기타 요청"
              size="sm"
              centered
              styles={{
                title: { fontWeight: 700 }, // 제목의 굵기를 변경
              }}
            >
              <Group>
                <Input placeholder="요청내용을 작성해 주세요." style={{ flexGrow: 1 }} />
                <ActionIcon variant="filled" aria-label="Settings">
                  <ArrowNarrowUp />
                </ActionIcon>
              </Group>
            </Modal>
            <Affix position={{ bottom: 20, right: 20 }} withinPortal={false} onClick={open}>
              <ActionIcon
                variant="gradient"
                size={60}
                aria-label="Gradient action icon"
                gradient={{ from: "blue", to: "cyan", deg: 90 }}
              >
                <IconChatbot />
              </ActionIcon>
            </Affix>
          </Box>
        </Stack>
      </Center>
    </Container>
  );
};
