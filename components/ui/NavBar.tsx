import Image from "next/image"
import { useTheme, Text, Spacer, Link } from "@nextui-org/react"
import NextLink from "next/link"

export function NavBar() {
    const { theme } = useTheme()


    return (
        <div style={{
            width: '100%',
            display: "flex",
            alignItems: 'center',
            padding: '0x 20px',
            backgroundColor: theme?.colors.gray100.value
        }}>
            <Image
                src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'}
                alt='icon app'
                width={70}
                height={70}
            />
            <NextLink href='/' passHref>
                <Link>
                    <Text color="white" h2>P</Text>
                    <Text color="white" h3>okemon</Text>
                </Link>
            </NextLink>
            <Spacer css={{ flex: 1 }} />
            <NextLink href='/favorites' passHref>
                <Link css={{ marginRight: '10px' }}>
                    <Text color="white">Favorites</Text>
                </Link>

            </NextLink>
        </div>
    )
}