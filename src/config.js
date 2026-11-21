// Edita aquí textos, preguntas y qué respuestas "suspenden".
// Una opción con `fail` hace que el invitado se quede sin invitación al final.
export const invitation = {
  couple: "David & Sara",
  // Rellena fecha y lugar cuando los tengáis; si están vacíos no se muestran.
  date: "",
  place: "",

  labels: {
    honest: "Con sinceridad",
  },
  intro: {
    eyebrow: "David & Sara se casan",
    question: "¿Quieres venir a nuestra boda? 💍",
    yes: "Sí",
    no: "No",
  },
  questions: [
    {
      title: "¿Cuántas ganas tienes de nuestra boda? 💌",
      options: [
        { text: "¡MUCHÍSIMAS!" },
        { text: "No puedo esperar" },
        { text: "Lo que más me emociona es la comida" },
        { text: "¿Barra libre?" },
        {
          text: "Se me había olvidado que os casabais",
          fail: { tag: "Memoria de pez", note: "¿¿Olvidado?? ¿¿Nuestra boda??" },
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
        {
          text: "No ❤️",
          fail: { tag: "Corazón de piedra", note: "¿¿Ni una lágrima?? ¿¿Por David y Sara??" },
        },
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
      title: "¿De qué color vas a ir vestido/a a nuestra boda? 👗",
      options: [
        {
          text: "Blanco",
          fail: { tag: "Vestido blanco", note: "¿¿Blanco?? ¿¿Le quieres robar el protagonismo a Sara??" },
        },
        { text: "Rojo" },
        { text: "Negro" },
        { text: "Rosa fuerte" },
        { text: "El que me digáis" },
      ],
    },
    {
      title: "¿Qué vas a hacer cuando suene la primera canción? 🕺",
      options: [
        { text: "Darlo todo en la pista" },
        { text: "Grabar a David y Sara con el móvil" },
        { text: "Esperar a que haya más gente bailando" },
        { text: "Ir a por otra copa" },
        {
          text: "Pedirle al DJ que la cambie",
          fail: { tag: "Saboteador musical", note: "¿¿Cambiar NUESTRA canción??" },
        },
      ],
    },
  ],
  fail: {
    title: "Has fallado.",
    subtitle: "Te quedas sin invitación.",
    badge: "Invitación: cancelada",
    retry: "Intentar de nuevo",
  },
  success: {
    tag: "Aprobado",
    title: "¡Enhorabuena!",
    subtitle: "Sigues invitado/a.",
    note: "David y Sara te esperan en el altar. Trae pañuelos.",
    badge: "Invitación: confirmada",
    retry: "Repetir",
  },
  signature: "Con cariño, David & Sara",
};
