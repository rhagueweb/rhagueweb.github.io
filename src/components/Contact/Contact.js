import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Row } from "react-bootstrap";

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" {...register("First name", {required: true})} />
      <input type="text" placeholder="Last name" {...register("Last name", {required: true})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true})} />
      <textarea {...register("Message", {, maxLength: 1000})} />

      <input type="submit" />
    </form>
  );
}

export default Contact;