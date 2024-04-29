import { ComponentStyleConfig } from "@chakra-ui/react";

export const Container: ComponentStyleConfig = {
    baseStyle: {
        maxW: "container.sm",
        minH: "100vh",
    },
};

export const Divider: ComponentStyleConfig = {
    baseStyle: ({ orientation }) => ({
        my: orientation === undefined ? 2 : 0,
    }),
};

export const VStack: ComponentStyleConfig = {
    baseStyle: {
        alignItems: "start",
    },
};
