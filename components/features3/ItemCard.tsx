import { Card, Text, Image, Spacer } from "@nextui-org/react";
import { BoxIcon } from "../icons/BoxIcon";
import { Flex } from "../styles/flex";
import ashwagandha from "../../assets/ashwagandha.jpeg";

export const ItemCard = () => {
  return (
    <Card css={{ mw: "500px" }}>
      <Card.Header>Herb 1</Card.Header>
      <Card.Body>
        <Flex css={{ gap: "0.5rem" }} direction={"column"}>
          <Flex direction={"row"} css={{ gap: "0.5%" }}>
            {/* <BoxIcon /> */}
            {/* <Text h5></Text> */}
          </Flex>
          <Flex direction={"row"} align={"center"}>
            <Text span>
              Here, we can write something about a herb which we mention
            </Text>
            <Image
              src="https://media.istockphoto.com/photos/root-withania-somnifera-known-commonly-as-ashwagandha-indian-ginseng-picture-id1286731715"
              objectFit="scale-down"
              width={"15vw"}
              height={"10%"} alt="Product photo"
            ></Image>
          </Flex>
        </Flex>
      </Card.Body>
    </Card >
  );
};
