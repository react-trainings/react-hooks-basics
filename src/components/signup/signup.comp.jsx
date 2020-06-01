import React from 'react';
import { useUserForm } from '../../hooks';

export default function SignUp() {
  const [values, handleChange] = useUserForm({ email: '', password: '' });
  console.log(values);

  return (
    <div>
      <input name="email" value={values.email} onChange={handleChange} />
      <input type="password" name="password" value={values.password} onChange={handleChange} />
    </div>
  );
}
