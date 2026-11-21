(() => {
  const cfg = window.INVITATION;
  const stage = document.getElementById("stage");
  const labelLeft = document.getElementById("label-left");
  const labelRight = document.getElementById("label-right");

  let answers = [];

  const el = (tag, attrs = {}, ...children) => {
    const node = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v);
    });
    children.flat().forEach((c) => node.append(c));
    return node;
  };

  function show(card, left, right) {
    labelLeft.textContent = left;
    labelRight.textContent = right;
    const old = stage.firstElementChild;
    if (old) {
      old.classList.add("leave");
      setTimeout(() => old.remove(), 250);
    }
    card.classList.add("card", "enter");
    stage.append(card);
  }

  // ---------- Intro: el botón "No" se escapa ----------
  function renderIntro() {
    answers = [];
    const noBtn = el("button", { class: "btn btn-ghost no-btn", type: "button" }, cfg.intro.no);
    const yesBtn = el(
      "button",
      { class: "btn btn-primary", type: "button", onclick: () => renderQuestion(0) },
      cfg.intro.yes
    );

    const card = el(
      "section",
      {},
      el("div", { class: "icon" }, "↓"),
      el("p", { class: "eyebrow" }, cfg.intro.eyebrow),
      el("h1", {}, cfg.intro.question),
      el("div", { class: "actions" }, yesBtn, noBtn)
    );
    show(card, "RSVP", "Sé honesta");

    const flee = (e) => {
      e.preventDefault();
      const cardRect = card.getBoundingClientRect();
      const btnRect = noBtn.getBoundingClientRect();
      const maxX = cardRect.width - btnRect.width - 16;
      const maxY = cardRect.height - btnRect.height - 16;
      let x, y;
      // Evita caer encima del cursor/botón "Sí"
      do {
        x = 8 + Math.random() * maxX;
        y = 8 + Math.random() * maxY;
      } while (
        Math.abs(x - (btnRect.left - cardRect.left)) < btnRect.width &&
        Math.abs(y - (btnRect.top - cardRect.top)) < btnRect.height
      );
      noBtn.classList.add("fleeing");
      noBtn.style.left = `${x}px`;
      noBtn.style.top = `${y}px`;
    };
    noBtn.addEventListener("mouseenter", flee);
    noBtn.addEventListener("touchstart", flee, { passive: false });
    noBtn.addEventListener("click", flee);
    noBtn.addEventListener("focus", () => yesBtn.focus());
  }

  // ---------- Preguntas ----------
  function renderQuestion(i) {
    const q = cfg.questions[i];
    const list = el(
      "div",
      { class: "options" },
      q.options.map((opt) =>
        el(
          "button",
          {
            class: "option",
            type: "button",
            onclick: (e) => {
              e.currentTarget.classList.add("picked");
              answers[i] = opt;
              setTimeout(() => {
                i + 1 < cfg.questions.length ? renderQuestion(i + 1) : renderVerdict();
              }, 350);
            },
          },
          opt.text
        )
      )
    );
    show(el("section", {}, el("h2", {}, q.title), list), `Pregunta ${i + 1}`, "Sé honesta");
  }

  // ---------- Veredicto ----------
  function renderVerdict() {
    const failed = answers.find((a) => a.fail);
    const v = failed
      ? { ...cfg.fail, tag: failed.fail.tag, note: failed.fail.note }
      : cfg.success;

    const card = el(
      "section",
      { class: `verdict ${failed ? "is-fail" : "is-ok"}` },
      el("div", { class: "icon round" }, failed ? "✕" : "✓"),
      el("p", { class: "tag" }, `${failed ? "✕" : "✓"} ${v.tag}`),
      el("h2", { class: "big" }, v.title),
      el("p", { class: "subtitle" }, v.subtitle),
      el("p", { class: "note" }, v.note),
      el(
        "div",
        { class: "actions" },
        el("span", { class: "btn badge" }, `${failed ? "✕" : "✓"} ${v.badge}`),
        el("button", { class: "btn btn-ghost", type: "button", onclick: renderIntro }, v.retry)
      ),
      el("p", { class: "signature" }, cfg.signature)
    );
    show(card, "El veredicto", "Respuesta final");
    if (!failed) confetti();
  }

  function confetti() {
    const colors = ["#7a1f2b", "#d9607a", "#e9c46a", "#f4d6dc"];
    for (let i = 0; i < 80; i++) {
      const p = el("span", { class: "confetti" });
      p.style.left = `${Math.random() * 100}vw`;
      p.style.background = colors[i % colors.length];
      p.style.animationDelay = `${Math.random() * 0.6}s`;
      p.style.animationDuration = `${2 + Math.random() * 1.5}s`;
      document.body.append(p);
      setTimeout(() => p.remove(), 4500);
    }
  }

  renderIntro();
})();
