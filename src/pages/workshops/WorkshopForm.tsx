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
  fullname: z.string(),
  session: z.enum(["React", "Fullstack", "Office hour"]),
  phone: z.string().regex(phoneRegex),
  email: z.string().email()
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

  return (
    <div className={clsx("card", styles.formContainer)}>
      <div className="card__header">
        <h3>Contact me</h3>
      </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card__body">
              <label>
                Full name
                <br />
                <input
                  className={clsx(styles.formInput)}
                  {...register('fullname')}
                />
              </label>
              {errors.fullname?.message && <p>{errors.fullname?.message}</p>}
              <label>
                Session
                <br />
                <input
                  className={clsx(styles.formInput)}
                  {...register('fullname')}
                />
              </label>
              {errors.session?.message && <p>{errors.session?.message}</p>}
              <label>
                Email
                <br />
                <input
                  className={clsx(styles.formInput)}
                  {...register('email')}
                />
              </label>
              {errors.email?.message && <p>{errors.email?.message}</p>}
              <label>
                Phone number
                <br />
                <input
                  className={clsx(styles.formInput)}
                  {...register('phone')}
                />
              </label>
              {errors.phone?.message && <p>{errors.phone?.message}</p>}
          </div>
          <div className="card__footer">
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