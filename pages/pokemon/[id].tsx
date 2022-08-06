import { useEffect, useState } from "react";

import { GetStaticPaths, GetStaticProps, NextPage, } from "next"
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

import confettis from 'canvas-confetti'

import { Layout } from "components/layouts";
import { pokeApi } from "api";
import { PokemonDetailData } from "interfaces";
import { getPokemonInfo, localFavorites } from "utils";


interface Props {
    pokemon: PokemonDetailData,

}


const PokemonPage: NextPage<Props> = ({ pokemon }) => {
    const [isInfavorite, setIsInFavorite] = useState<boolean | null>(null)



    useEffect(() => {
        setIsInFavorite(localFavorites.existInFavorites(pokemon.id))
    }, [pokemon.id])


    const onTooggleFavorite = () => {
        localFavorites.tooggleFavorite(pokemon.id)
        setIsInFavorite(!isInfavorite)
        if (isInfavorite) return

        confettis({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x: 1,
                y: 0,
            }
        })
    }

    return (
        <Layout title={pokemon.name}>
            <Grid.Container css={{ marginTop: '5px' }} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card isHoverable css={{ padding: '30px' }}>
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png '}
                                alt={pokemon.name}
                                width="100%"
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={8}>
                    <Card >
                        <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }} >
                            <Text h1 transform="capitalize">{pokemon.name}</Text>
                            <Button
                                color="gradient"
                                ghost={!isInfavorite}
                                onPress={() => onTooggleFavorite()}
                            >
                                {isInfavorite ? 'Remove to favorites' : "Add to favorites"}
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}> Sprites:</Text>
                            <Container display="flex" >
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>


            </Grid.Container>
        </Layout >
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const allPokemonsId = [...Array(151)].map((value, index) => `${index + 1}`)

    return {
        paths: allPokemonsId.map(id => ({
            params: { id }
        }))
        ,
        fallback: false
    }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id: string };

    return {
        props: {
            pokemon: await getPokemonInfo(id)
        }
    }
}


export default PokemonPage