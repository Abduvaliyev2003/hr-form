export type answersPropType = {
    name?: string | undefined;
    value?: any | string | number | undefined;
};

export interface answersStateProps {
    answers: answersPropType[];
}

export interface answersActionProps {
    name: string;
    value: any | string | number;
    checked?: boolean;
}

export type userIdType = {
    id: string | undefined;
    fileUrl?: string | undefined;
};
export interface userIdActionProps {
    id?: string | undefined;
    fileUrl?: string | undefined;
}
export interface userIdStateProps {
    id: userIdType;
}
