// Edita aquí textos, preguntas y qué respuestas "suspenden".
// Una opción con `fail` hace que el invitado se quede sin invitación al final.
export const invitation = {
  brand: "Un pequeno convite",
  couple: "David & Sara",
  // Rellena fecha y lugar cuando los tengáis; si están vacíos no se muestran.
  date: "",
  place: "",

  labels: {
    rsvp: "RSVP",
    question: (n, total) => `Pregunta ${n}/${total}`,
    honest: "Con sinceridade",
    verdict: "O veredicto",
    final: "Resposta final",
  },
  intro: {
    eyebrow: "David & Sara casan",
    question: "Queres vir á nosa voda? 💍",
    yes: "Si",
    no: "Non",
  },
  questions: [
    {
      title: "Cantas ganas tes da nosa voda? 💌",
      options: [
        { text: "MOITÍSIMAS!" },
        { text: "Non podo esperar" },
        { text: "O que máis me emociona é a comida" },
        { text: "Barra libre?" },
        {
          text: "Esquecérame de que casabades",
          fail: { tag: "Memoria de peixe", note: "Esquecido?? A nosa voda??" },
        },
      ],
    },
    {
      title: "Vas chorar durante a cerimonia? 🥹",
      options: [
        { text: "Obviamente" },
        { text: "Vou chorar a cachón" },
        { text: "Intentarei aguantar" },
        { text: "Só se choran os demais" },
        {
          text: "Non ❤️",
          fail: { tag: "Corazón de pedra", note: "Nin unha bágoa?? Por David e Sara??" },
        },
      ],
    },
    {
      title: "Que vas levar de agasallo de voda? 🎁",
      options: [
        { text: "Cartos, obviamente" },
        { text: "Algo da lista de agasallos" },
        { text: "Algo bonito que atopei" },
        { text: "Comprarei algo á présa polo camiño" },
        { text: "A miña presenza é o agasallo" },
      ],
    },
    {
      title: "De que cor vas ir vestido/a á nosa voda? 👗",
      options: [
        {
          text: "Branco",
          fail: { tag: "Vestido branco", note: "Branco?? Queres roubarlle o protagonismo a Sara??" },
        },
        { text: "Vermello" },
        { text: "Negro" },
        { text: "Rosa forte" },
        { text: "O que me digades" },
      ],
    },
    {
      title: "Que vas facer cando soe a primeira canción? 🕺",
      options: [
        { text: "Darllo todo na pista" },
        { text: "Gravar a David e Sara co móbil" },
        { text: "Agardar a que haxa máis xente bailando" },
        { text: "Ir por outra copa" },
        {
          text: "Pedirlle ao DJ que a cambie",
          fail: { tag: "Saboteador musical", note: "Cambiar A NOSA canción??" },
        },
      ],
    },
  ],
  fail: {
    title: "Fallaches.",
    subtitle: "Quedas sen convite.",
    badge: "Convite: cancelado",
    retry: "Tentar de novo",
  },
  success: {
    tag: "Aprobado",
    title: "Parabéns!",
    subtitle: "Segues convidado/a.",
    note: "David e Sara agárdante no altar. Trae panos.",
    badge: "Convite: confirmado",
    retry: "Repetir",
  },
  signature: "Con cariño, David & Sara",
};
