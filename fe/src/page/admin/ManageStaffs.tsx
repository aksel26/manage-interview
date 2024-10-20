import { Button, Checkbox, Container, Flex, Group, Table, Text } from "@mantine/core";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { AddStaff } from "../../component/UI/Admin/ManageManager/AddManager";
import { DeletConfirm } from "../../component/UI/Admin/ManageManager/DeletConfirm";
const elements = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];
export const ManageStaffs = () => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [opened, { open, close }] = useDisclosure(false);
  const [deleteConfirm, { open: openDeleteConfirm, close: closeDeleteConfirm }] = useDisclosure(false);
  const rows = elements.map((element) => (
    <Table.Tr
      key={element.name}
      bg={selectedRows.includes(element.position) ? "var(--mantine-color-blue-light)" : undefined}
    >
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(element.position)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, element.position]
                : selectedRows.filter((position) => position !== element.position)
            )
          }
        />
      </Table.Td>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Container fluid h={"100%"}>
        <Flex direction={"column"} w={"100%"}>
          <Flex justify={"space-between"}>
            <Text size="xl" fw={700}>
              담당자 관리
            </Text>
            <Group gap={"xs"}>
              <Button onClick={open}>추가</Button>
              <Button onClick={openDeleteConfirm}>삭제</Button>
            </Group>
          </Flex>

          <Table striped highlightOnHover withRowBorders={false}>
            <Table.Thead>
              <Table.Tr>
                <Table.Th />
                <Table.Th>No.</Table.Th>
                <Table.Th>성명</Table.Th>
                <Table.Th>연락처</Table.Th>
                <Table.Th>주소</Table.Th>
                <Table.Th>소속</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Flex>
        <AddStaff opened={opened} close={close} />
        <DeletConfirm opened={deleteConfirm} close={closeDeleteConfirm} />
      </Container>
    </>
  );
};
