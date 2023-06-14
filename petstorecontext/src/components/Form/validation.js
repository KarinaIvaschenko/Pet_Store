import * as yup from "yup";

export const validationSchema = yup.object({
    firstName: yup
        .string()
        .required("Поле должно быть обезательным")
        .min(2, "min 2")
        .max(20, "max 20")
        .matches(/^\p{L}+$/u, "Только буквы"),
    lastName: yup
        .string()
        .required("Поле должно быть обезательным")
        .min(2, "min 2")
        .max(20, "max 20")
        .matches(/^\p{L}+$/u, "Только буквы"),
    age: yup
        .string()
        .required("Поле должно быть обезательным")
        .min(2, "min 2")
        .max(3, "max 3")
        .matches(/[0-9]/, "Только цифры"),
    adress: yup
        .string()
        .required("Поле должно быть обезательным")
        .min(2, "min 2")
        .max(30, "max 30"),
    phone: yup
        .string()
        .required("Поле должно быть обезательным")
        .min(14, "min 14")
        .max(14, "max 14")
        .matches(
            /^\(\d{3}\)\d{3}-\d{2}-\d{2}$/,
            "Номер телефона должен состоять из 10 цифр"
        ),
});
