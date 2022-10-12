import { Card, Divider, Spacer, Text } from "@nextui-org/react";
import React from "react";
import { BoxIcon } from "../icons/BoxIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import { ItemCard } from "./ItemCard";
// import { ItemCardCovered } from "./ItemCardCovered";

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
            gap: "5rem",
            pt: "$14",
          }}
        >
          <ItemCard />
          <ItemCard />
        </Flex>
        <Spacer y={3} />
        <Flex
          align={"center"}
          wrap={"wrap"}
          justify={"center"}
          css={{
            gap: "5rem",
            pt: "$8",
          }}
        >
          <ItemCard />
          <ItemCard />
        </Flex>
      </Box>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
