import { Checkbox } from "@chakra-ui/react";
import { useDispatch } from "../../hooks/store";
import { QuestionRadioEventProps, QuestionRadioProps } from "./types";

import { pushCheckbox } from "../../store/answersSlice";

const QuestionCheckbox = ({ children, name }: any) => {
    const dispatch = useDispatch();

    return (
        <Checkbox
            name={name}
            colorScheme="blue"
            value={children.quiz}
            onChange={({ target }: QuestionRadioEventProps) =>
                dispatch(pushCheckbox(target))
            }
            borderColor={"blue.300"}
        >
            {children.quiz}
        </Checkbox>
    );
};

export default QuestionCheckbox;
