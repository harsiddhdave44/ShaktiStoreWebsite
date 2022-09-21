import { Card, Divider, Text } from "@nextui-org/react";
import React from "react";
import { BoxIcon } from "../icons/BoxIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import { ItemCard } from "./ItemCard";

export const Features3 = () => {
  return (
    <>
      <Box
        css={{
          px: "$6",
          pb: "$14",
        }}
      >
        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          css={{
            pt: "$20",
          }}
        >
          {/* <Text span css={{ color: "$blue600" }}>
            Awesome Feature
          </Text> */}
          <Text h3>Some of the herbs we have</Text>
          <Text
            span
            css={{
              maxWidth: "800px",
              color: "$accents8",
              textAlign: "center",
            }}
          >
            Some small description here
          </Text>
        </Flex>
        <Flex
          align={"center"}
          justify={"center"}
          wrap={"wrap"}
          css={{
            gap: "1rem",
            pt: "$14",
          }}
        >
          {/* <Card css={{ mw: "500px" }}>
            <Card.Body>
              <Flex css={{ gap: "0.5rem" }}>
                <BoxIcon />
                <Flex direction={"column"}>
                  <Text h5>Herb 1</Text>
                  <Text span>
                    Here, we can write something about a herb which we mention
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card> */}
          <ItemCard />
          <ItemCard />
          {/* <Card css={{ mw: "500px" }}>
            <Card.Body>
              <Flex css={{ gap: "0.5rem" }}>
                <BoxIcon />
                <Flex direction={"column"}>
                  <Text h5>Your Title</Text>
                  <Text span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    condimentum, nisl ut aliquam lacinia, nisl nisl aliquet
                    nisl, nec
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card> */}
        </Flex>
        <Flex
          align={"center"}
          wrap={"wrap"}
          justify={"center"}
          css={{
            gap: "1rem",
            pt: "$8",
          }}
        >
          <ItemCard />
          <ItemCard />
          {/* <Card css={{ mw: "500px" }}>
            <Card.Body>
              <Flex css={{ gap: "0.5rem" }}>
                <BoxIcon />
                <Flex direction={"column"}>
                  <Text h5>Your Title</Text>
                  <Text span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    condimentum, nisl ut aliquam lacinia, nisl nisl aliquet
                    nisl, nec
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
          <Card css={{ mw: "500px" }}>
            <Card.Body>
              <Flex css={{ gap: "0.5rem" }}>
                <BoxIcon />
                <Flex direction={"column"}>
                  <Text h5>Your Title</Text>
                  <Text span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    condimentum, nisl ut aliquam lacinia, nisl nisl aliquet
                    nisl, nec
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card> */}
        </Flex>
      </Box>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
