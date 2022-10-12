import { Divider, Text, Link } from '@nextui-org/react';
import React from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Footer = () => {
  return (
    <Flex
      css={{
        py: '$20',
        px: '$6',
      }}
    >
      <Box as={'footer'} css={{ width: '100%' }}>
        <Box
          css={{
            'px': '$10',
            '@md': {
              px: '$56',
            },
          }}
        >
          <Divider
            css={{
              mt: '$14',
              display: 'flex',
              justifyContent: 'center',
            }}
          />
          <Flex
            justify={'between'}
            align={'center'}
            wrap={'wrap'}
            css={{
              'pt': '$8',
              'gap': '$10',
              'justifyContent': 'center',
              '@md': {
                justifyContent: 'space-between',
              },
            }}
          >
            <Flex
              css={{
                gap: '$10',
              }}
              wrap={'wrap'}
            >
              <Link href="#" color="text">
                Home
              </Link>
              <Link href="#" color="text">
                Products
              </Link>
              <Link href="#" color="text">
                About Us
              </Link>
              <Link href="#" color="text">
                Contact Us
              </Link>
            </Flex>
            <Flex
              css={{
                gap: '$6',
              }}
            >
              <Text span css={{ color: '$accents8' }}>
                © Copyright 2021 Acme Inc.
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
