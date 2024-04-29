import Head from "next/head";
import { Container } from "@chakra-ui/react";
import { MainLayoutProps } from "./mainProps";

const MainLayout = ({ title = null, children }: MainLayoutProps) => {
    const siteTitle = title ?? "Jobo - survey";

    return (
        <>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Container py={8}>{children}</Container>
        </>
    );
};

export default MainLayout;
