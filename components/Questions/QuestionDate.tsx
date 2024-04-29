import { Input } from "@chakra-ui/react";
import { useDispatch } from "../../hooks/store";
import { QuestionDateProps, QuestionInputEventProps } from "./types";

import { push } from "../../store/answersSlice";

const QuestionDate = ({ name, type }: QuestionDateProps) => {
    const dispatch = useDispatch();

    return (
        <Input
            // placeholder={children}
            // colorScheme={"red"}
            borderColor={"rgba(0,0,0 0.5)"}
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

export default QuestionDate;
