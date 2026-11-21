// Edita aquí textos, preguntas y qué respuestas "suspenden".
// Una opción con `fail` hace que la invitada quede desinvitada al final.
window.INVITATION = {
  intro: {
    eyebrow: "Reserva la fecha",
    question: "¿Quieres venir a mi boda? 💍",
    yes: "Sí",
    no: "No",
  },
  questions: [
    {
      title: "¿Qué tan emocionada estás por mi boda? 💌",
      options: [
        { text: "¡MUCHÍSIMO!" },
        { text: "No puedo esperar" },
        { text: "Lo que más me emociona es la comida" },
        { text: "¿Barra libre?" },
        {
          text: "Se me había olvidado que te casabas",
          fail: { tag: "Memoria de pez", note: "¿¿Olvidado?? ¿¿Mi boda??" },
        },
      ],
    },
    {
      title: "¿Vas a llorar durante la ceremonia? 🥹",
      options: [
        { text: "Obviamente" },
        { text: "Voy a llorar a mares" },
        { text: "Intentaré contenerme" },
        { text: "Solo si lloran los demás" },
        { text: "No ❤️", fail: { tag: "Corazón de piedra", note: "¿¿Ni una lágrima?? ¿¿En MI boda??" } },
      ],
    },
    {
      title: "¿Qué vas a llevar como regalo de boda? 🎁",
      options: [
        { text: "Dinero, obviamente" },
        { text: "Algo de la lista de regalos" },
        { text: "Algo bonito que encontré" },
        { text: "Compraré algo de pánico en el camino" },
        { text: "Mi presencia es el regalo" },
      ],
    },
    {
      title: "¿De qué color será el vestido que vas a llevar a mi boda? 👗",
      options: [
        { text: "Blanco", fail: { tag: "Vestido blanco", note: "¿¿Blanco?? ¿¿En MI boda??" } },
        { text: "Rojo" },
        { text: "Negro" },
        { text: "Rosa fuerte" },
        { text: "El que me digas" },
      ],
    },
  ],
  fail: {
    title: "Has fallado.",
    subtitle: "Estás desinvitada.",
    badge: "Invitación: cancelada",
    retry: "Intentar de nuevo",
  },
  success: {
    tag: "Aprobada",
    title: "¡Enhorabuena!",
    subtitle: "Sigues invitada.",
    note: "Nos vemos en el altar. Trae pañuelos.",
    badge: "Invitación: confirmada",
    retry: "Repetir",
  },
  signature: "Con cariño, y estándares sospechosamente altos",
};
