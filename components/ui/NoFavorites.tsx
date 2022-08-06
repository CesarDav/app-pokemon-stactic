import { Container, Text, Image } from "@nextui-org/react";

export function NoFavorites() {
    return (
        <Container css={{
            display: "flex",
            height: 'calc(100vh - 100px)',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center'
        }}>
            <Text h1> There are no favorites</Text>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
                width={250}
                height={250}
                alt="image default"
                css={{
                    opacity: 0.1,
                }}
            />

        </Container>
    )
}