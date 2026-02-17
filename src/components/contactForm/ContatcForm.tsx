import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Button from '../ui/button/Button'

const contactSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome deve ter pelo menos 3 caracteres' })
    .max(30, { message: 'O nome deve ter no máximo 30 caracteres' }),

  email: z
    .string()
    .email({ message: 'Insira um endereço de e-mail válido' })
    .trim()
    .toLowerCase(),

  phone: z
    .string()
    .min(10, { message: 'Informe o telefone com DDD' })
    .max(14, { message: 'Digite um número válido' })
    .regex(/^\d+$/, { message: 'Use apenas números' }),

  message: z
    .string()
    .min(10, {
      message: 'Por favor descreva um pouco mais sobre o seu projeto',
    })
    .max(400, { message: 'Simplifique a ideia do seu projeto' }),

  honey: z.string().max(0),
})

type ContactData = z.infer<typeof contactSchema>

function ContactForm() {
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | 'info' | null
    message: string
  } | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
  })

  const onSubmit = async (data: ContactData) => {
    if (data.honey) return
    const LAST_SEND_KEY = 'codetech_last_send'
    const COOLDOWN_TIME = 60 * 1000

    const lastSend = localStorage.getItem(LAST_SEND_KEY)
    const now = Date.now()

    if (lastSend && now - Number(lastSend) < COOLDOWN_TIME) {
      const secondsLeft = Math.ceil(
        (COOLDOWN_TIME - (now - Number(lastSend))) / 1000
      )

      setStatus({
        type: 'info',
        message: `Aguarde ${secondsLeft} segundos para enviar novamente.`,
      })
      return
    }

    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      )

      setStatus({
        type: 'success',
        message: 'Mensagem enviada! Entraremos em contato.',
      })
      reset()
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Erro ao enviar. Tente novamente mais tarde.',
      })
    }
  }
  const inputClasses =
    'bg-transparent border-2 border-white rounded py-[0.8em] px-[0.8em] text-white text-base md:text-xl focus:outline-none focus:border-primary transition-colors w-full'

  const labelClasses =
    'text-white mb-2 font-semibold text-sm transition-colors group-focus-within:text-primary'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="group flex flex-col">
        <label className={labelClasses} htmlFor="name">
          NOME
        </label>
        <input
          id="name"
          className={inputClasses}
          {...register('name')}
          placeholder="Seu Nome"
        />
        {errors.name && (
          <span className="mt-1 text-xs text-red-500">
            {errors.name.message}
          </span>
        )}
      </div>
      <div className="group flex flex-col">
        <label className={labelClasses} htmlFor="email">
          E-MAIL
        </label>
        <input
          id="email"
          className={inputClasses}
          {...register('email')}
          placeholder="Seu E-mail"
        />
        {errors.email && (
          <span className="mt-1 text-xs text-red-500">
            {errors.email.message}
          </span>
        )}
      </div>
      <div className="group flex flex-col">
        <label className={labelClasses} htmlFor="phone">
          TELEFONE
        </label>
        <input
          id="phone"
          className={inputClasses}
          {...register('phone')}
          placeholder="Seu Telefone"
        />
        {errors.phone && (
          <span className="mt-1 text-xs text-red-500">
            {errors.phone.message}
          </span>
        )}
      </div>
      <div className="group flex flex-col">
        <label className={labelClasses} htmlFor="message">
          MENSAGEM
        </label>
        <textarea
          id="message"
          className={`${inputClasses} min-h-30 resize-y`}
          {...register('message')}
          placeholder="Mensagem"
        />
        {errors.message && (
          <span className="mt-1 text-xs text-red-500">
            {errors.message.message}
          </span>
        )}
      </div>
      <div className="absolute -left-2499.75 opacity-0" aria-hidden="true">
        <input {...register('honey')} tabIndex={-1} autoComplete="off" />
      </div>
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            className={`rounded-lg border p-4 text-sm font-medium ${
              status.type === 'success'
                ? 'border-primary/50 bg-primary/10 text-primary'
                : status.type === 'info'
                  ? 'border-blue-500/50 bg-blue-500/10 text-blue-400'
                  : 'border-red-500/50 bg-red-500/10 text-red-400'
            }`}
          >
            <div className="flex items-center gap-2">
              {status.type === 'success' && <span>✓</span>}
              {status.type === 'info' && <span>⚠</span>}
              {status.message}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Button type="submit" disabled={isSubmitting} variant="form">
        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
      </Button>
    </form>
  )
}

export default ContactForm
