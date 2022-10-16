import { Grid, Text, Link } from '@nextui-org/react';
import React from 'react';
import { CallIcon } from '../icons/Call';
import { InstagramIcon } from '../icons/Instagram';
import { WhatsappIcon } from '../icons/whatsapp';
import { Flex } from '../styles/flex';
// import { Call}

export const Trusted = () => {
    return (
        <Flex
            direction={'column'}
            align={'center'}
            css={{
                'pt': '$20',
                'px': '$6',
                '@md': {
                    px: '$64',
                },
            }}
        >
            <Text h2 css={{ textAlign: 'center' }}>
                Get in touch with us
            </Text>

            <Grid.Container
                gap={6}
                alignItems="center"
                justify="center"
                css={{
                    'width': '100%',
                    '@sm': {
                        width: '100%',
                    },
                    '&  span': {
                        whiteSpace: 'pre',
                    },
                }}
            >
                <Grid sm={3} justify="center">
                    <Link href='http://api.whatsapp.com/send?phone=9426061898' target="_blank">
                        <Flex align={'center'} justify={'center'} >
                            <WhatsappIcon />
                            <Text weight={'semibold'} span size={'$lg'}>
                                WhatsApp
                            </Text>
                        </Flex>
                    </Link>
                </Grid>
                <Grid sm={3} justify="center">
                    <Link href='' target="_blank">
                        <Flex align={'center'} css={{ gap: "0.5rem" }}>
                            <InstagramIcon />
                            <Text weight={'semibold'} span size={'$lg'}>
                                Instagram
                            </Text>
                        </Flex>
                    </Link>
                </Grid>
                <Grid sm={3} justify="center">
                    <Link href='tel:9426061898'>
                        <Flex align={'center'} css={{ gap: "0.5rem" }}>
                            <CallIcon />
                            <Text weight={'semibold'} span size={'$lg'}>
                                Mobile
                            </Text>
                        </Flex>
                    </Link>
                </Grid>

            </Grid.Container>
        </Flex>
    );
};
