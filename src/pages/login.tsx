import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button, Input } from '../component/atom'
const FormSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(1),
  lastName: z.string(),
  address: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
})

type FormSchemaType = z.infer<typeof FormSchema>
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  })
  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    // console.log("data",data)
  }
  return (
    <div className="w-96 bg-base-200 shadow-100 rounded-sm p-4">
      <Input label="Email" {...register('email')} error={errors.email?.message} />
      <Input
        label="First Name"
        {...register('firstName', { required: true })}
        error={errors.firstName?.message}
      />
      <Input label="Last Name" {...register('lastName')} error={errors.lastName?.message} />
      <Input label="Address" {...register('address')} error={errors.address?.message} />
      <Input
        label="Password"
        type="password"
        {...register('password')}
        error={errors.password?.message}
      />
      <Input
        label="Confirm Password"
        type="password"
        {...register('confirmPassword')}
        error={errors.confirmPassword?.message}
      />
      <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
    </div>
  )
}

export default Login
