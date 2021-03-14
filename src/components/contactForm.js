import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios'
import 'twin.macro'

const ContactForm = () => {

  const [submission, setSubmission] = useState(false)

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    axios.post('https://www.formbucket.com/f/buk_3I52X2AOskIsfiou4CnW7otn', data)
    .then( resp => {
      if (resp.status === 200) {
        setSubmission(true)
      }
    })
  }

  return (
    <div>
      <h2 tw="text-2xl font-bold mt-8">Solicite Sua Vacina</h2>

      {
        submission
        ? <div>
            <div tw="bg-green-100 border-t-4 border-green-500 rounded-b text-green-900 px-4 py-3 shadow-md text-lg my-4" role="alert">
              Obrigado pelo interesse! O Conselho de Divisão da Terceira Idade (<a href="https://www.town.barnstable.ma.us/BoardsCommittees/CouncilonAging" target="_blank" rel="noreferrer" tw="text-blue-500 hover:underline">Council On Aging</a>) entrará em contact com você a medida que vacinas forem ficando disponíveis.
            </div>
          </div>
        : <form onSubmit={handleSubmit(onSubmit)}>
            <div tw="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label tw="block">
                <span tw="text-gray-700">Nome Completo</span>
                <input type="text" tw="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" name="fullname" placeholder="Seu Nome Completo" ref={register({ required: true })} />
                {errors.fullname && <span tw="text-red-700 text-sm">This field is required</span>}
              </label>
              <label tw="block">
                <span tw="text-gray-700">Email</span>
                <input type="email" tw="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" name="email" placeholder="john@example.com" ref={register({ required: true })} />
                {errors.email && <span tw="text-red-700 text-sm">This field is required</span>}
              </label>
              <label tw="block">
                <span tw="text-gray-700">Telefone</span>
                <input type="tel" tw="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" name="phone" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" ref={register({ required: true })} />
                {errors.phone && <span tw="text-red-700 text-sm">This field is required</span>}
              </label>
              <label tw="block">
                <span tw="text-gray-700">Lingua Preferida?</span>
                <select tw="block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" name="preferredLanguage" ref={register({ required: true })}>
                  <option value="Portuguese">Português</option>
                  <option value="English">Inglês</option>
                  <option value="Spanish">Espanhol</option>
                </select>
                {errors.preferredLanguage && <span tw="text-red-700 text-sm">This field is required</span>}
              </label>
              <div tw="block">
                <div tw="mt-4">
                  <button tw="w-full sm:w-auto flex-none bg-green-900 hover:bg-green-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-green-900 focus:outline-none transition-colors duration-200" type="submit">Enviar</button>
                </div>
              </div>
            </div>
          </form>
      }

    </div>
  )
}

export default ContactForm
