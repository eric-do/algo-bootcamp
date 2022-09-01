import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from 'clsx';
import styles from "./styles.module.css";
import * as z from "zod";

type Inputs = {
  fullname: string;
  session: string;
  phone: string;
  email: string;
}

const phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = z.object({
  fullname: z.string().min(1, {
    message: "Name is required"
  }),
  session: z.enum(["react", "fullstack", "office-hour"]),
  email: z.string().email(),
  phone: z
          .string()
          .regex(phoneRegex, {
            message: "Invalid phone number format"
          })
          .optional(),
});

const WorkshopForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema)
  });
  const onSubmit: SubmitHandler<Inputs> = d => console.log(d);
  console.log(errors.fullname, errors.session)
  return (
    <div className={clsx("card", styles.formContainer)}>
      <div className="card__header">
        <h3>Contact me</h3>
      </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={clsx("card__body", styles.formInputs)}>
              <label>
                Full name
                <br />
                <input
                  className={clsx(styles.formInput)}
                  placeholder='e.g. John Smith'
                  {...register('fullname')}
                />
                {errors.fullname?.message && <p className={clsx(styles.formError)}>{errors.fullname?.message}</p>}
              </label>
              <label>
                Session
                <br />
                <select
                  className={clsx(styles.formInput)}
                  {...register('session')}
                >
                  <option value="react">React workshop</option>
                  <option value="fullstack">Fullstack workshop</option>
                  <option value="office-hour">Office hour</option>
                </select>
                {errors.session?.message && <p className={clsx(styles.formError)}>{errors.session?.message}</p>}
              </label>
              <label>
                Email
                <br />
                <input
                  className={clsx(styles.formInput)}
                  placeholder='e.g. user@mail.com'
                  {...register('email')}
                />
                {errors.email?.message && <p className={clsx(styles.formError)}>{errors.email?.message}</p>}
              </label>
              <label>
                Phone number
                <br />
                <input
                  type='tel'
                  placeholder="e.g. 555-555-5555"
                  className={clsx(styles.formInput)}
                  {...register('phone')}
                />
                {errors.phone?.message &&<p className={clsx(styles.formError)}>{errors.phone?.message}</p>}
              </label>
          </div>
          <div className={clsx("card__footer", styles.formFooter)}>
            <input
              type="submit"
              className="button button--primary button--block"
              value="Submit"
            />
          </div>
        </form>
    </div>
  )
}

export default WorkshopForm;