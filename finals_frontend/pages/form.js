import css from "../styles/form.module.css"

function MyForm() {
    
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
                    />
                    <input
                        className={css.textBox}
                        type='text'
                        placeholder="Last Name"
                        name="lastname"
                    />
                </div>
                <div className={css.rowElements}>
                    <input
                        className={css.textBox}
                        type='email'
                        placeholder="Email"
                        name="email"
                    />
                    <input
                        className={css.textBox}
                        type='text'
                        placeholder="Contact Number"
                        name="contactnum"
                    />
                </div>
                <div className={css.rowElements}>
                    <textarea
                        className={css.textBox}
                        placeholder="Address"
                        name="address"
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
                                    name="oldTUPStudent"
                                />
                                <h2>Yes</h2>
                            </div>
                            <div className={css.boolSelector}>
                                <input
                                    className={css.textBox}
                                    type='radio'
                                    name="oldTUPStudent"
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