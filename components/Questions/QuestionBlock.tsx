import { Box, Divider, Heading } from "@chakra-ui/react";
import { QuestionBlockProps } from "./types";

const QuestionBlock = ({
    title,
    index,
    required,
    children,
}: QuestionBlockProps) => {
    const requiredBlock = (
        <Box as="span" color="red">
            *
        </Box>
    );

    const printTitle = index ? `${index}. ${title}` : title;
    const isRequired = required ? requiredBlock : <></>;

    return (
        <>
            <Box
                borderLeft="4px"
                borderColor="blue"
                borderRadius="base"
                p={4}
                w="full"
            >
                <Heading as="h4" fontSize="lg" fontWeight={"600"}>
                    {printTitle} {isRequired}
                </Heading>

                {children}
            </Box>

            <Divider
                style={{
                    marginTop: "16px",
                    marginBottom: "8px",
                }}
            />
        </>
    );
};

export default QuestionBlock;
