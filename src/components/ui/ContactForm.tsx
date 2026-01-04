'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { useEffect, useRef } from 'react'
import { sendContactForm } from '../../actions/form/actions'
import styles from '../../styles/ContactForm.module.css'

const initialState = {
  success: false,
  message: '',
}

// SUBMIT BUTTON
function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className={styles.btn}
      disabled={pending}
    >
      {pending ? 'ВІДПРАВКА...' : 'ВІДПРАВИТИ'}
    </button>
  )
}

// FORM
export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)

  const [state, formAction] = useActionState(
    sendContactForm,
    initialState
  )

  /* RESET AFTER SUCCESS */
  useEffect(() => {
    if (state.success) {
      formRef.current?.reset()
    }
  }, [state.success])

  return (
    <div className={styles.formWrap}>
      <form
        ref={formRef}
        action={formAction}
        className={styles.form}
      >
        {/* STATE MESSAGE */}
        {state.message && (
          <div
            className={
              state.success
                ? styles.successMessage
                : styles.errorMessage
            }
          >
            {state.message}
          </div>
        )}

        {/* INPUTS */}
        <div className={styles.inputsGrid}>
          <input name="firstName" placeholder="Імʼя*" required className={styles.inputField} />
          <input name="lastName" placeholder="Прізвище*" required className={styles.inputField} />
          <input name="email" type="email" placeholder="Email*" required className={styles.inputField} />
          <input name="phone" placeholder="Телефон*" required className={styles.inputField} />
          <textarea
            name="message"
            placeholder="Додаткова інформація"
            className={`${styles.inputField} ${styles.textarea}`}
          />
        </div>

        {/* SUBMIT BUTTON */}
        <div className={styles.btnWrap}>
          <SubmitButton />
        </div>
      </form>
    </div>
  )
}
