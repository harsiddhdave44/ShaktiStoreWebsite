import { Card, Text, Image, Spacer } from "@nextui-org/react";
import { BoxIcon } from "../icons/BoxIcon";
import { Flex } from "../styles/flex";
import ashwagandha from "../../assets/ashwagandha.jpeg";

export const ItemCard = () => {
  return (
    <Card css={{ mw: '500px' }}>
      <Card.Body>
        <Flex css={{ gap: '0.5rem' }}>
          <BoxIcon />
          <Flex direction={'column'}>
            <Text h5>Herb Name here</Text>
            <Flex direction={'row'} css={{ gap: '0.5rem' }}>
              <Text css={{
                width: '40vw',
                '@sm': {
                  width: '20vw',
                  height: '10vh'
                }
              }} >
                Here, we can write something about a herb which we mention.Here, we can write something about a herb which we mention.Here, we can write something
              </Text>
              <Image src="https://media.istockphoto.com/photos/root-withania-somnifera-known-commonly-as-ashwagandha-indian-ginseng-picture-id1286731715" css={{
                width: '40vw',
                height: '20vh',
                '@sm': {
                  width: '15vw',
                  height: '15vh'
                }
              }} alt="Image" />
              {/* width="10vw" height="20vh" */}
            </Flex>
          </Flex>
        </Flex>
      </Card.Body>
    </Card>

    // <Card css={{ mw: "500px" }}>
    //   <Card.Header>Herb 1</Card.Header>
    //   <Card.Body>
    //     <Flex css={{ gap: "0.5rem" }} direction={"column"}>
    //       <Flex direction={"row"} css={{ gap: "0.5%" }}>
    //         {/* <BoxIcon /> */}
    //         {/* <Text h5></Text> */}
    //       </Flex>
    //       <Flex direction={"row"} align={"center"} css={{
    //         '@sm': {
    //           // flexDirection: "column"
    //         },
    //       }} >
    //         <Text span>
    //           Here, we can write something about a herb which we mention
    //         </Text>
    //         <Image css={{
    //           '@sm': {
    //             // width: "30vw",
    //             // height: "30vh"
    //           },
    //         }}
    //           src="https://media.istockphoto.com/photos/root-withania-somnifera-known-commonly-as-ashwagandha-indian-ginseng-picture-id1286731715"
    //           objectFit="scale-down"
    //           width={"20vw"}
    //           height={"10vh"} alt="Product photo"
    //         ></Image>
    //       </Flex>
    //     </Flex>
    //   </Card.Body>
    // </Card >
  );
};
