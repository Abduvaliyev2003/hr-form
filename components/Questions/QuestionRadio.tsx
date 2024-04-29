import { Radio } from "@chakra-ui/react";
import { useDispatch } from "../../hooks/store";
import { QuestionRadioEventProps, QuestionRadioProps } from "./types";

import { push } from "../../store/answersSlice";

const QuestionRadio = ({ children }: any) => {
    const dispatch = useDispatch();

    return (
        <Radio
            colorScheme="blue"
            value={children.quiz}
            onChange={({ target }: QuestionRadioEventProps) =>
                dispatch(push(target))
            }
            borderColor={"blue.300"}
        >
            {children.quiz}
        </Radio>
    );
};

export default QuestionRadio;
