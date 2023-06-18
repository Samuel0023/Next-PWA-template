'use client'

import Link from 'next/link'
import FormLabel from '@/components/forms/formLabel'
import FormLabelPass from '@/components/forms/formLabel.pass'
import SingleButton from '@/components/buttons/singleButton'

export default function FormLogin() {
  return (
    <div>
      <FormLabel textPlaceholder={'Email'} />
      <FormLabelPass />
      <div>
        <Link className="text-purple-600" href="#">
          Olvidaste tu contraseña
        </Link>
      </div>
      <SingleButton text={'Inicia Sesión'} />
    </div>
  )
}
