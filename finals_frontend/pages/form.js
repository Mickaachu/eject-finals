import css from "../styles/form.module.css";
import { useForm } from 'react-hook-form';
import Axios from 'axios';

function MyForm() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {

        Axios.post('http://localhost:5000/register', {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            contactNumber: data.contactNumber,
            address: data.address,
            oldStudent: data.oldStudent,
            reason: data.reason

        })
        .then((response) => {
            console.log(response)
        }) 
        .catch((err) => {
            console.log(err)
        })
        
    }
   
    return (

        <div>
            <form className={css.formDiv} onSubmit={handleSubmit(onSubmit)}>
                <h1 id={css.formTitle}>Registration Form</h1>
                 <div className={css.rowElements}>
                    <input
                        className={css.textBox}
                        type='text'
                        placeholder="First Name"
                        name="firstname"
                        {...register("firstName")}
                    />
                    <input
                        className={css.textBox}
                        type='text'
                        placeholder="Last Name"
                        name="lastname"
                        {...register("lastName")}
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
                        {...register("contactNumber")}
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
                                    name="oldStudent"
                                    value="1"
                                    {...register("oldStudent")}
                                />
                                <h2>Yes</h2>
                            </div>
                            <div className={css.boolSelector}>
                                <input
                                    className={css.textBox}
                                    type='radio'
                                    value="0"
                                    name="oldStudent"
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
                        {...register("reason")}
                    />
                </div>
                <div
                    style={{
                        'flexDirection': 'row-reverse'
                    }}>
                    <input
                        className={css.submitBtn}
                        type='submit'
                        value='Submit'
                        name="submitBtn" />
                </div>
            </form>
            
        </div>
    )
}
export default MyForm;