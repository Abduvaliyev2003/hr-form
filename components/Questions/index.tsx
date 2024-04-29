import {
    Checkbox,
    CheckboxGroup,
    Flex,
    HStack,
    Input,
    Radio,
    RadioGroup,
    Stack,
    VStack,
} from "@chakra-ui/react";
import QuestionBlock from "./QuestionBlock";
import QuestionInput from "./QuestionInput";
import QuestionRadio from "./QuestionRadio";
import questions from "./questions.json";
import leader from "../../assets/leader.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import QuestionDate from "./QuestionDate";
import QuestionCheckbox from "./QuestionCheckbox";
import { QuestionInputEventProps, QuestionRadioEventProps } from "./types";
import { push, pushCheckbox } from "../../store/answersSlice";
import { useDispatch } from "react-redux";
import QuestionFile from "./QuestionFile";

const Questions = () => {
    const dispatch = useDispatch();
    const [other, setOther] = useState(" ");
    const [langs, setLangs] = useState(" ");
    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            once: true,
            duration: 1200,
            offset: 50,
        });
    }, []);
    return (
        <VStack alignItems="start">
            {questions.map((quest, index) => (
                <div key={index} data-aos="fade-up">
                    <QuestionBlock
                        index={++index}
                        required={quest.required}
                        title={quest.title}
                    >
                        {quest.type === "input" ? (
                            <VStack alignItems="start" my={4}>
                                {quest.inputs?.map((input, index) => (
                                    <QuestionInput
                                        key={index}
                                        name={quest.name}
                                        type={quest.input_type}
                                    >
                                        {input}
                                    </QuestionInput>
                                ))}
                            </VStack>
                        ) : quest.type === "date" ? (
                            <>
                                <QuestionDate
                                    name={quest.name}
                                    type={quest.input_type}
                                />
                            </>
                        ) : quest.type === "file" ? (
                            <>
                                <QuestionFile
                                    key={index}
                                    name={quest.name}
                                    type={quest.input_type}
                                ></QuestionFile>
                            </>
                        ) : (
                            <></>
                        )}
                    </QuestionBlock>
                </div>
            ))}
        </VStack>
    );
};

export default Questions;
