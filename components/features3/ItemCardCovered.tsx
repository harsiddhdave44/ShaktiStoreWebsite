import { Card, Col, Text, Image, Spacer } from "@nextui-org/react";
import { BoxIcon } from "../icons/BoxIcon";
import { Flex } from "../styles/flex";
import ashwagandha from "../../assets/ashwagandha.jpeg";

export const ItemCardCovered = () => {
    return (
        <Flex>
            <Card css={{ mw: "20vw", mh: "40vh" }}>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                    <Text h4 color="black">
                        Stream the Acme event
                    </Text>
                    {/* <Col>
                    <Text size={12} weight="bold" transform="uppercase" color="black">
                        What to watch
                    </Text>
                    
                </Col> */}
                </Card.Header>
                <Card.Image
                    src="https://media.istockphoto.com/photos/root-withania-somnifera-known-commonly-as-ashwagandha-indian-ginseng-picture-id1286731715"
                    objectFit="cover"
                    width="20vw"
                    height="20vh"
                    alt="Card image background"
                />
                {/* <Card.Body>
                    <Text>Small description of the product.Small description of the product.Small description of the product.</Text>
                </Card.Body> */}
                {/* <Card.Body>
                <Flex css={{ gap: "0.5rem" }} direction={"column"}>
                    <Flex direction={"row"} css={{ gap: "0.5%" }}>
                        <BoxIcon />
                        <Text h5></Text>
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
            </Card.Body> */}
            </Card >
        </Flex>
    );
};
