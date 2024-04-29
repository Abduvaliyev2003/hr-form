export type QuestionBlockProps = {
    required: boolean;
    index: number;
    title: string;
    children: JSX.Element;
};

export type QuestionRadioProps = {
    children: {
        quiz: string | undefined;
        ball: string | undefined;
    };
};

type QuestionRadioEventTargetProps = {
    id?: string | number | undefined;
    type?: string | undefined;
    class?: string | undefined;
    name: string;
    value: string | number;
    mix?: boolean;
};

export interface QuestionRadioEventProps {
    target: QuestionRadioEventTargetProps;
}

export type QuestionInputProps = {
    name: string | undefined;
    type: string | undefined;
    children: string | undefined;
    required? :any | undefined;
};
export type QuestionDateProps = {
    name: string | undefined;
    type: string | undefined;
};
export type QuestionFileProps = {
    name: string | undefined;
    type: string | undefined;
    children?: any;
};

type QuestionInputEventTargetProps = {
    id?: string | number | undefined;
    type?: string | undefined;
    class?: string | undefined;
    name: string;
    value: string | number;
};

export interface QuestionInputEventProps {
    target: QuestionInputEventTargetProps;
}
