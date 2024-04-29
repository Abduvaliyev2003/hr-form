import { Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "../../hooks/store";
import { QuestionFileProps } from "./types";

import { useRef } from "react";
import axios from "axios";
import { chat_id, TOKEN } from "../../tools/sendMessage";
import { setFileUrl } from "../../store/idSlice";

const QuestionFile = ({ name, type, children }: QuestionFileProps) => {
    const dispatch = useDispatch();
    const { id } = useSelector((state) => state.id);

    const inputUpdateAvatarPhoto = useRef<HTMLInputElement>(null);
    const handleImageChange = async (e: React.FormEvent<HTMLInputElement>) => {
        const files = inputUpdateAvatarPhoto.current?.files;

        // make sure that it's not null or undefined
        if (files) {
            const formData = new FormData();
            formData.append("avatar", files[0]);

            const avatar: string | File | null = formData.get("avatar"); // type is `string | File | null`

            if (avatar instanceof File) {
                // console.log("we have a file", avatar);
            }

            const body = {
                file: avatar,
                token: id,
            };
            // console.log(body);
            let u = `https://api.jobo.uz/v1/_utils/portret-hr/store-file`;
            let telegramUrl = `https://api.telegram.org/bot${TOKEN}/sendDocument?chat_id=${chat_id}`;
            await axios({
                method: "POST",
                url: u,
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                data: body,
            })
                .then((res) => dispatch(setFileUrl({ fileUrl: res.data.file })))
                .catch((err) => console.log(err));


        }

    };

    return (
        <Input
            className="custom-file-input"
            placeholder={children}
            // colorScheme={"red"}
            borderColor={"rgba(0,0,0 0.5)"}
            variant={"flushed"}
            w="full"
            accept="image/*,.pdf"
            name={name}
            _placeholder={{
                color: "black",
                opacity: "0.5",
            }}
            ref={inputUpdateAvatarPhoto}
            type={type}
            onInput={(e) => {
                handleImageChange(e);
            }}
        />
    );
};

export default QuestionFile;
