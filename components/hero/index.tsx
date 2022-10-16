import { Divider, Text, Image } from "@nextui-org/react";
import React from "react";
import namasteImage from "../../assets/home-image.jpg";
// import { CheckIcon } from "../icons/CheckIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const Hero = () => {
  return (
    <>
      <Flex
        css={{
          gap: "$3",
          px: "$6",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          "@sm": {
            flexDirection: "row",
            mt: "$20",
          },
        }}
        justify={"center"}
      >
        <Box
          css={{
            pt: "$13",
            pr: "5vw",
            display: "flex",
            flexDirection: "column",
            gap: "$5",
          }}
        >
          <Box
            css={{
              maxWidth: "600px",
            }}
          >
            <Text
              h1
              css={{
                display: "inline",
              }}
            >
              Welcome to Shakti Store{" "}
            </Text>
            {/* <Text
              h1
              css={{
                display: "inline",
              }}
            >
              for{" "}
            </Text> */}
            <br />
            <Text
              h1
              css={{
                display: "inline",
                jc: "center",
              }}
              color="primary"
            >
              Jay Mataji
            </Text>
          </Box>

          <Text
            css={{
              color: "$accents8",
              maxWidth: "400px",
            }}
            size={"$lg"}
            span
          >
            The one stop shop for all your needs
          </Text>
        </Box>
        <Box
          css={{
            "& img": {
              width: "775px",
              objectFit: "contain",
            },
          }}
        >
          {/* <Image src="../../assets/home-image.jpg"></Image> */}
          <Image src={'namaste-horizontal.jpg'} alt="a person bowing down" css={{ p: '10px' }} />
        </Box>
      </Flex>
      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$10" }}
      />
    </>
  );
};
