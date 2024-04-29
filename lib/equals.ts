import { equalsValueProps } from "./types";

export const equals: equalsValueProps[] = [
    {
        calc: [
            {
                key: "faoliyat",
                values: ["Asoschi", "Direktor", "Investor"],
            },
            {
                key: "yoshingiz",
                values: [
                    "20-24",
                    "25-29",
                    "30-34",
                    "35-39",
                    "40-49",
                    "50 dan katta",
                ],
            },
            {
                key: "xodimlar_soni",
                values: ["21-50"],
            },
            {
                key: "xodim_topish_uchun_kim_shugullanadi",
                values: ["O'zim"],
            },
        ],
        result: "MA1",
    },
    {
        calc: [
            {
                key: "faoliyat",
                values: ["Asoschi", "Direktor", "Investor"],
            },
            {
                key: "yoshingiz",
                values: [
                    "20-24",
                    "25-29",
                    "30-34",
                    "35-39",
                    "40-49",
                    "50 dan katta",
                ],
            },
            {
                key: "xodimlar_soni",
                values: ["1-5", "6-10", "11-20"],
            },
            {
                key: "xodim_topish_uchun_kim_shugullanadi",
                values: ["O'zim"],
            },
        ],
        result: "MA2",
    },
    {
        calc: [
            {
                key: "faoliyat",
                values: ["Asoschi", "Direktor", "Investor"],
            },
            {
                key: "yoshingiz",
                values: [
                    "20-24",
                    "25-29",
                    "30-34",
                    "35-39",
                    "40-49",
                    "50 dan katta",
                ],
            },
            {
                key: "xodimlar_soni",
                values: ["51-100", "101-200", "200 dan ko'p"],
            },
            {
                key: "xodim_topish_uchun_kim_shugullanadi",
                values: ["O'zim"],
            },
        ],
        result: "MA3",
    },
    {
        calc: [
            {
                key: "faoliyat",
                values: ["Asoschi", "Direktor", "Investor"],
            },
            {
                key: "yoshingiz",
                values: [
                    "20-24",
                    "25-29",
                    "30-34",
                    "35-39",
                    "40-49",
                    "50 dan katta",
                ],
            },
            {
                key: "xodimlar_soni",
                values: ["21-50"],
            },
            {
                key: "xodim_topish_uchun_kim_shugullanadi",
                values: ["Boshqa xodimga topshirganman"],
            },
        ],
        result: "MA4",
    },
    {
        calc: [
            {
                key: "faoliyat",
                values: ["Asoschi", "Direktor", "Investor"],
            },
            {
                key: "yoshingiz",
                values: [
                    "20-24",
                    "25-29",
                    "30-34",
                    "35-39",
                    "40-49",
                    "50 dan katta",
                ],
            },
            {
                key: "xodimlar_soni",
                values: ["51-100"],
            },
            {
                key: "xodim_topish_uchun_kim_shugullanadi",
                values: ["Boshqa xodimga topshirganman"],
            },
        ],
        result: "MA5",
    },
    {
        calc: [
            {
                key: "faoliyat",
                values: ["Asoschi", "Direktor", "Investor"],
            },
            {
                key: "yoshingiz",
                values: [
                    "20-24",
                    "25-29",
                    "30-34",
                    "35-39",
                    "40-49",
                    "50 dan katta",
                ],
            },
            {
                key: "xodimlar_soni",
                values: ["21-50"],
            },
            {
                key: "xodim_topish_uchun_kim_shugullanadi",
                values: ["HR menejerim"],
            },
        ],
        result: "MA6",
    },
    {
        calc: [
            {
                key: "faoliyat",
                values: ["Asoschi", "Direktor", "Investor"],
            },
            {
                key: "yoshingiz",
                values: [
                    "20-24",
                    "25-29",
                    "30-34",
                    "35-39",
                    "40-49",
                    "50 dan katta",
                ],
            },
            {
                key: "xodimlar_soni",
                values: ["1-5", "6-10", "11-20"],
            },
            {
                key: "xodim_topish_uchun_kim_shugullanadi",
                values: ["HR menejerim"],
            },
        ],
        result: "MA7",
    },
    {
        calc: [
            {
                key: "faoliyat",
                values: ["Asoschi", "Direktor", "Investor"],
            },
            {
                key: "yoshingiz",
                values: [
                    "20-24",
                    "25-29",
                    "30-34",
                    "35-39",
                    "40-49",
                    "50 dan katta",
                ],
            },
            {
                key: "xodimlar_soni",
                values: ["51-100", "101-200", "200 dan ko'p"],
            },
            {
                key: "xodim_topish_uchun_kim_shugullanadi",
                values: ["HR menejerim"],
            },
        ],
        result: "MA8",
    },
    {
        calc: [
            {
                key: "faoliyat",
                values: ["HR", "Marketolog", "Boshqa"],
            },
            {
                key: "yoshingiz",
                values: [
                    "20-24",
                    "25-29",
                    "30-34",
                    "35-39",
                    "40-49",
                    "50 dan katta",
                ],
            },
        ],
        result: "MA9",
    },
    {
        calc: [
            {
                key: "faoliyat",
                values: ["HR", "Marketolog", "Boshqa"],
            },
            {
                key: "yoshingiz",
                values: ["20 dan kichik"],
            },
        ],
        result: "MA10",
    },
    {
        calc: [
            {
                key: "faoliyat",
                values: ["Asoschi", "Direktor", "Investor"],
            },
            {
                key: "yoshingiz",
                values: ["20 dan kichik"],
            },
        ],
        result: "MA11",
    },
];

export const org_equals: equalsValueProps[] = [
    {
        calc: [
            {
                key: "org_mavjudmi",
                values: ["Ha mavjud"],
            },
        ],
        result: "ORG_mavjud",
    },
    {
        calc: [
            {
                key: "org_mavjudmi",
                values: ["Yo'q mavjud emas"],
            },
        ],
        result: "ORG_mavjud_emas",
    },
    {
        calc: [
            {
                key: "org_mavjudmi",
                values: ["ORG struktura nima?"],
            },
        ],
        result: "ORG_nima",
    },
];
