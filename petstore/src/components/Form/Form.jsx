import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { PatternFormat } from "react-number-format";
import { validationSchema } from "./validation";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { actionRemoveLocalStorage } from "../../store/cart/actionCart";
import "./Form.scss";

const Form = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            age: "",
            adress: "",
            phone: "",
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            let objInfo = { ...values, cart };
            console.log(objInfo);
            dispatch(actionRemoveLocalStorage([]));
            resetForm();
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className="form">
            <label htmlFor="firstName" className="label">
                Імʼя користувача
            </label>
            <input
                className="input"
                type="text"
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName && (
                <div className="errors">{formik.errors.firstName}</div>
            )}
            <label htmlFor="lastName" className="label">
                Прізвище користувача
            </label>
            <input
                className="input"
                type="text"
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName && (
                <div className="errors">{formik.errors.lastName}</div>
            )}
            <label htmlFor="age" className="label">
                Вік користувача
            </label>
            <input
                className="input"
                type="number"
                name="age"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.age}
            />
            {formik.touched.age && formik.errors.age && (
                <div className="errors">{formik.errors.age}</div>
            )}
            <label htmlFor="adress" className="label">
                Адреса доставки
            </label>
            <input
                className="input"
                type="text"
                name="adress"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.adress}
            />
            {formik.touched.adress && formik.errors.adress && (
                <div className="errors">{formik.errors.adress}</div>
            )}
            <label htmlFor="phone" className="label">
                Мобільний телефон
            </label>
            <PatternFormat
                className="input"
                format="(###)###-##-##"
                placeholder="(123) 456-7890"
                mask={/\d/}
                type="tel"
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone && (
                <div className="errors">{formik.errors.phone}</div>
            )}
            <Button
                type="submit"
                backgroundColor="#d3c1f4"
                classNames="button--size"
                text="Checkout"
            />
        </form>
    );
};

export default Form;
