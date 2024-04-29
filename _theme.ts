import {
    extendTheme,
    ThemeConfig,
    Colors,
    ThemeComponents,
} from "@chakra-ui/react";
import { Container, Divider, VStack } from "./_components";

const config: ThemeConfig = {
    cssVarPrefix: "jobo",
    initialColorMode: "light",
    useSystemColorMode: false,
};

const colors: Colors = {};

const components: ThemeComponents = {
    Container,
    Divider,
    VStack,
};

export default extendTheme({ config, colors, components });
