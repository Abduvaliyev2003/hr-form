import { Input } from "@chakra-ui/react";
import { useDispatch } from "../../hooks/store";
import { QuestionInputEventProps, QuestionInputProps } from "./types";

import { push } from "../../store/answersSlice";

const QuestionInput = ({
    name,
    type,
    required,
    children,
}: QuestionInputProps) => {
    const dispatch = useDispatch();

    return (
        <Input
            required={required}
            placeholder={children}
            // colorScheme={"red"}
            borderColor={"#001F17"}
            variant={"flushed"}
            w="full"
            name={name}
            _placeholder={{
                color: "black",
                opacity: "0.5",
            }}
            type={type}
            onChange={({ target }: QuestionInputEventProps) =>
                dispatch(push(target))
            }
        />
    );
};

export default QuestionInput;
