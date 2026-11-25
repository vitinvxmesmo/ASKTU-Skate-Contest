export const eventConfig = {
  registration: {
    phone: '553898419750',
    message: 'Olá! Vim pelo site oficial do ASKTU Skate Contest 2027 e gostaria de realizar minha inscrição no campeonato. Poderia me passar mais informações?'
  }
} as const;

export const registrationUrl = `https://wa.me/${eventConfig.registration.phone}?text=${encodeURIComponent(eventConfig.registration.message)}`;
