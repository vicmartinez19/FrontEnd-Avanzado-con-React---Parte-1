import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const chatSchema = yup.object({
  prompt: yup
    .string()
    .trim()
    .required("⚠️ El mensaje no puede estar vacío.")
    .min(3, "⚠️ El mensaje debe tener al menos 3 caracteres.")
    .max(500, "⚠️ El mensaje no puede superar los 500 caracteres.")
}).required();

function ChatInput({ onSendMessage }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(chatSchema),
    defaultValues: { prompt: '' }
  });

  const onSubmit = (data) => {
    onSendMessage(data.prompt);
    reset();
  };

  return (
    <div style={{ background: '#111827', borderTop: '1px solid #1f2937', padding: '18px 24px' }}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            {...register("prompt")}
            placeholder="Escribe tu consulta para la IA (ej. ¿Qué es un Hook en React?)..."
            style={{
              flex: 1,
              borderColor: errors.prompt ? '#ef4444' : '#374151',
              backgroundColor: '#1f2937'
            }}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              background: '#0284c7',
              color: 'white',
              padding: '12px 24px',
              fontSize: '0.95rem'
            }}
          >
            Enviar 🚀
          </button>
        </div>

        {errors.prompt && (
          <p style={{ color: '#f87171', fontSize: '0.82rem', marginTop: '6px' }}>
            {errors.prompt.message}
          </p>
        )}
      </form>
    </div>
  );
}

export default ChatInput;