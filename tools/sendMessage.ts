import axios from "axios";
import { answersPropType } from "./../store/types";
import { arrayToObject } from "./calculate";

export const chat_id: string | number = "-4157622004";
// export const TOKEN: string = "5191071598:AAFWslOs8DiJtAWOuzYGZuKG70s_qrBZux0"; // https://t.me/omega3_diqqatni_jamlash_test_bot
export const TOKEN: string = "6983401192:AAE4XgfGb_enEJRExFLh0l_3k4-K7DlMkd0"; // https://t.me/PortretHrbot
// export const BOT_ADDRESS = "https://t.me/omega3_diqqatni_jamlash_test_bot"
export const BOT_ADDRESS = "https://t.me/yalpizHr_bot"
const PAYLOAD: string = `https://api.telegram.org/bot${TOKEN}`;

export const sendMessage = async (answers: answersPropType[]) => {
    const object = arrayToObject(answers);
    const text = convertObjectToMessage(object);
    let message_id;
    // console.log(answers);
    await axios
        .post(`${PAYLOAD}/sendMessage`, {
            chat_id,
            text,
            parse_mode: "HTML",
        })
        .then((res) => (message_id = res.data.result.message_id));
    return message_id;
    // await axios.post(`${PAYLOAD}/sendDocument`, {
    //     chat_id,

    // });
};

const convertObjectToMessage = (object: object): string => {
    let message: string = "";
    Object.entries(object).forEach(([key, value]) => {
        message += `<b>${converters[key]}</b> ${value} \n\n`;
    });

    return message;
};

const converters: any = {
    id: "user_id",
    ism: "Ism-sharifingiz:",
    tugilgan_sana: "Tug'ilgan sanangiz:",
    yashash_manzil: "Hozirgi yashash manzilingiz:",
    soha: "Qaysi soha bo'yicha ishga joylashmoqchisiz?",
    oxirgi_ish_sabab:
        "Oxirgi ish joyingizdan bo'shashingizga nima sabab bo'lgan?",
    maosh_xoxish: "Qancha maosh xohlaysiz?",
    // motivatsiya: "Nimalardan ruhlanasiz?",
    // salomlashish: "Begona odam bilan qanday salomlashasiz?",
    // komp_dasturlar:
    //     "Kompyuter dasturlaridan qaysilarini bilasiz? (word, excel, trello va h.k. lar)",
    // ctrl_x_nima: "Ctrl+X qanday vazifani bajaradi?",
    ishlashdan_maqsad: "Ishlashdan maqsad nima deb o'ylaysiz?",
    hozir_qayer_ishlayapiz: "Hozir qayerda ishlayapiz/ o‘qiyapsiz?",
    restaran_sohasida_tajriba: "Restaran sohasida tajribangiz?",
    // chet_tillari: "Qaysi chet tillarini bilasiz?",
    // instagram_user: "Instagram username'ingiz:",
    telefon_raqam: "Telefon raqamingiz:",
    oxirgi_ish_joy: "Oxirgi ish joyingiz?",
};
