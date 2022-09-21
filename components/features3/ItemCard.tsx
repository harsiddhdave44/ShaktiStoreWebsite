import { Card, Text, Image } from "@nextui-org/react";
import { BoxIcon } from "../icons/BoxIcon";
import { Flex } from "../styles/flex";
import ashwagandha from "../../assets/ashwagandha.jpeg";

export const ItemCard = () => {
  return (
    <Card css={{ mw: "500px" }}>
      <Card.Body>
        <Flex css={{ gap: "0.5rem" }}>
          <BoxIcon />
          <Flex direction={"column"}>
            <Text h5>Herb 1</Text>
            <Text span>
              Here, we can write something about a herb which we mention
            </Text>
            <Image
              src="https://media.istockphoto.com/photos/root-withania-somnifera-known-commonly-as-ashwagandha-indian-ginseng-picture-id1286731715"
              objectFit="scale-down"
              width={"10%"}
              height={"10%"}
            ></Image>
          </Flex>
        </Flex>
      </Card.Body>
    </Card>
  );
};
