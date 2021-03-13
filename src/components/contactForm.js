import React from 'react'
import 'twin.macro'

const ContactForm = () => {
  return (
    <div>
      <h2 tw="text-2xl font-bold mt-8">Solicite Sua Vacina</h2>

      <form>
        <div tw="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label tw="block">
            <span tw="text-gray-700">Nome Completo</span>
            <input type="text" tw="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" name="fullname" placeholder="Seu Nome Completo" required />
          </label>
          <label tw="block">
            <span tw="text-gray-700">Email</span>
            <input type="email" tw="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" name="email" placeholder="john@example.com" required />
          </label>
          <label tw="block">
            <span tw="text-gray-700">Telefone</span>
            <input type="tel" tw="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" name="phone" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
          </label>
          <label tw="block">
            <span tw="text-gray-700">Lingua Preferida?</span>
            <select tw="block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" name="preferredLanguage">
              <option value="Portuguese">Português</option>
              <option value="English">Inglês</option>
              <option value="Spanish">Espanhol</option>
            </select>
          </label>
          <div tw="block">
            <div tw="mt-2">
              <button tw="w-full sm:w-auto flex-none bg-green-900 hover:bg-green-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-green-900 focus:outline-none transition-colors duration-200" type="submit">Enviar</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
