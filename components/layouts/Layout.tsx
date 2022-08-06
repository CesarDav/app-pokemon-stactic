import Head from "next/head";
import { NavBar } from "../ui";

interface Props {
    children: React.ReactNode,
    title?: string,
}

const origin = (typeof window === 'undefined') ? ' ' : window.location.origin;

export function Layout({ children, title }: Props) {



    return (
        <>
            <Head>
                <title>{title || "Pokemon App"}</title>
                <meta name="author" content="Cesar Morales" />
                <meta name="description" content="info pokemon xxx" />
                <meta name="keywords" content="XXX, pokemon, pokedex" />

                {/* meta tag */}
                <meta property="og:title" content={`Informacion sobre ${title}`} />
                <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>
            <NavBar />
            <main style={{
                padding: '0 20px',
            }}>
                {children}
            </main>
        </>
    )
}