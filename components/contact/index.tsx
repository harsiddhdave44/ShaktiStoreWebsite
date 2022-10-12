import { Button, Divider, Grid, Text } from '@nextui-org/react';
import React from 'react';
import { CallIcon } from '../icons/Call';
import { InstagramIcon } from '../icons/Instagram';
import { WhatsappIcon } from '../icons/whatsapp';
import { AcmeLogo } from '../navbar/logo';
import { Flex } from '../styles/flex';

export const Trusted = () => {
    return (
        <>
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
                        <Flex align={'center'} justify={'center'} >
                            <WhatsappIcon />
                            <Text weight={'semibold'} span size={'$lg'}>
                                WhatsApp
                            </Text>
                        </Flex>
                    </Grid>
                    <Grid sm={3} justify="center">
                        <Flex align={'center'} css={{ gap: "0.5rem" }}>
                            <InstagramIcon />
                            <Text weight={'semibold'} span size={'$lg'}>
                                Instagram
                            </Text>
                        </Flex>
                    </Grid>
                    <Grid sm={3} justify="center">
                        <Flex align={'center'} css={{ gap: "0.5rem" }}>
                            <CallIcon />
                            <Text weight={'semibold'} span size={'$lg'}>
                                Mobile
                            </Text>
                        </Flex>
                    </Grid>

                </Grid.Container>
            </Flex>

            <Divider
                css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }}
            />
        </>
    );
};
