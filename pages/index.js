import Layout from "components/layout";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>MLBB-UI Demo</title>
                <description>
                    Mobile Legends: BANG BANG Lobby UI Remake (I can't tell if the
                    "remake" is bringing improvements or make it worse smh)
                </description>
            </Head>
            <div className="app">
                <Layout></Layout>
                <h1>Index Page</h1>
            </div>
        </>
    );
}
