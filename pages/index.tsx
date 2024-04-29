import {
    Box,
    Button,
    ButtonSpinner,
    Center,
    Divider,
    Flex,
    Heading,
    HStack,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
    VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MainLayout from "../components/Layouts/main";
import Questions from "../components/Questions";
import { setId } from "../store/idSlice";
import { useSelector } from "../hooks/store";
import { BOT_ADDRESS, chat_id, sendMessage, TOKEN } from "../tools/sendMessage";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "/public/logo.jpg";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "../hooks/store";
import axios from "axios";

const Home: NextPage = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setMessage] = useState<string | null>(null);
    const { answers } = useSelector((state) => state.answer);
    const dispatch = useDispatch();

    const answersCount = 13;
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { id, fileUrl } = useSelector((state) => state.id);

    const loadingSpinner = loading ? (
        <ButtonSpinner pos="relative" ml={2} />
    ) : (
        <></>
    );

    const redirectResultPage = async () => {
        setMessage(null);
        setLoading(true);
         console.log(answers.length)
        if (answers.length < answersCount) {
            setMessage("Iltimos barcha savollarga javob bering!");
        } else {
            const answer = await answers.map((item) => {
                return {
                    name: item.name,
                    value: item.value,
                };
            });
            answer.push({ name: "id", value: `<code>${id}</code>` });

            const mess_id = await sendMessage(answer);

            let telegramUrl = `https://api.telegram.org/bot${TOKEN}/sendDocument?chat_id=${chat_id}`;

            let baseUrl = "https://api.jobo.uz/v1/_utils/yalpiz/store-data";

            fileUrl
                ? await axios({
                      method: "POST",
                      url: telegramUrl,
                      headers: {
                          "Content-Type": "multipart/form-data",
                      },
                      data: {
                          document: fileUrl,
                          caption: id,
                      },
                  }).catch((err) => console.log(err))
                : null;

            await axios({
                method: "POST",
                url: baseUrl,
                data: {
                    token: id,
                    data: answer,
                    // @ts-ignore
                    message_id: mess_id,
                },
            }).catch((err) => console.log(err));
            onOpen();
        }

        setTimeout(() => {
            const timer = setLoading(false);
        }, 2500);
    };

    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            once: true,
            duration: 1200,
            offset: 50,
        });
        let id = uuidv4();
        dispatch(setId({ id }));
    }, []);

    return (
        <MainLayout title={"Forma"}>
            <>
                <Box mt={4}>
                    <div data-aos="fade-up">
                        <Flex
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            flexDirection={{ base: "column", md: "row" }}
                            mb={'2rem'}
                        >
                            <Image alt="yalpizHR" height={350} width={`100%`} borderRadius={12}  src={logo.src} />
                            {/*<Text fontSize={'2rem'} fontWeight={'bold'}>Portret HR</Text>*/}
                            {/*<Flex>*/}
                                {/*<svg id="info" width="100%" height="100%">*/}
                                {/*    <text x="50%" y="75%" textAnchor="middle">*/}
                                {/*        Portret*/}
                                {/*    </text>*/}
                                {/*</svg>*/}
                                {/*<svg id="shop" width="100%" height="100%">*/}
                                {/*    <text x="50%" y="75%" textAnchor="middle">*/}
                                {/*        HR*/}
                                {/*    </text>*/}
                                {/*</svg>*/}
                            {/*</Flex>*/}
                        </Flex>
                        <Heading as="h2" textAlign="center" mb={4}>
                            Ishga kirish uchun so'rovnoma:
                        </Heading>
                    </div>
                    <div data-aos="fade-up">
                        <Text>
                            "Yalpiz" ga ishga kirish uchun
                            ushbu so'rovnomani to'ldiring. Sizning nomzodingiz
                            bizga ma'qul kelsa biz siz bilan bog'lanamiz.
                        </Text>
                        <Divider mt={4} mb={8} />
                    </div>
                </Box>
                <Questions />
                <div data-aos="fade-up">
                    <Center my={8} flexDir="column">
                        <Text color="red" mb={2}>
                            {errorMessage}
                        </Text>

                        <Button
                            px={12}
                            py={6}
                            colorScheme="blue"
                            onClick={redirectResultPage}
                        >
                            Yuborish
                            {loadingSpinner}
                        </Button>
                    </Center>
                </div>
                <Modal isOpen={isOpen} onClose={onClose} isCentered>
                    <ModalOverlay />
                    <ModalContent padding={{ base: 1, md: 5 }}>
                        <ModalHeader>Javoblarni yuborish</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            Natijalaringizni bizga yuborish va Siz bilan aloqaga
                            chiqishimiz uchun <b> telegram botimizda </b>{" "}
                            albatta
                            <b> "start" </b> tugmasini bosing va bizni kuzatib
                            boring!!!
                        </ModalBody>

                        <ModalFooter justifyContent={"center"}>
                            <Button
                                as={"a"}
                                href={`${BOT_ADDRESS}?start=${id}`}
                                size={"lg"}
                                colorScheme="blue"
                                mr={3}
                                onClick={onClose}
                            >
                                Telegram botga o'tish
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        </MainLayout>
    );
};

export default Home;
