import css from "../styles/form.module.css"
import { useForm } from 'react-hook-form';

function MyForm() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <div className={css.formDiv}>
                <h1 id={css.formTitle}>Registration Form</h1>
                <div className={css.rowElements}>
                    <input
                        className={css.textBox}
                        type='text'
                        placeholder="First Name"
                        name="firstname"
                        {...register("firstname")}
                    />
                    <input
                        className={css.textBox}
                        type='text'
                        placeholder="Last Name"
                        name="lastname"
                        {...register("lastname")}
                    />
                </div>
                <div className={css.rowElements}>
                    <input
                        className={css.textBox}
                        type='email'
                        placeholder="Email"
                        name="email"
                        {...register("email")}
                    />
                    <input
                        className={css.textBox}
                        type='text'
                        placeholder="Contact Number"
                        name="contactnum"
                        {...register("lastname")}
                    />
                </div>
                <div className={css.rowElements}>
                    <textarea
                        className={css.textBox}
                        placeholder="Address"
                        name="address"
                        {...register("address")}
                    />
                    <div className={css.boolSelector}
                        style={{
                            'paddingRight': '2vw'
                        }}>
                        <h2 id={css.boolSelector}>Old TUP Student?</h2>
                        <div className={css.rowElements}>
                            <div className={css.boolSelector}>
                                <input
                                    className={css.textBox}
                                    type='radio'
                                    value="True"
                                    {...register("oldStudent")}
                                />
                                <h2>Yes</h2>
                            </div>
                            <div className={css.boolSelector}>
                                <input
                                    className={css.textBox}
                                    type='radio'
                                    value="False"
                                    {...register("oldStudent")}
                                />
                                <h2>No</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css.rowElements}>
                    <textarea
                        className={css.textBox}
                        placeholder="Why do you want to study here?"
                        name="reason"
                        style={{
                            'width': '100%'
                        }}
                        rows={3}
                    />
                </div>
                <div
                    style={{
                        'flexDirection': 'row-reverse'
                    }}>
                    <input
                        className={css.submitBtn}
                        type='button'
                        value='Submit'
                        name="submitBtn" />
                </div>
            </div>
        </>
    )
}
export default MyForm;