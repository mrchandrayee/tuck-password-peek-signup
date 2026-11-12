# TUCK — Password Peek Signup

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/tuck-password-peek-signup/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable reconstruction of the uploaded 10.83-second screen recording.

## Video analysis

The recording shows a dark navy signup page branded **TUCK**. Its large animated headline cycles through:
- **Watching** — “Tuck follows your caret.”
- **Hiding** — password is hidden.
- **Peeking** — password is visible.
- **Oops** — short/invalid password feedback.
- **Welcome** — account created.

A small snail mascot sits above a compact signup card. The card contains an email field, password field with an eye toggle, and a blue Create account button. The lower portion displays three source panels labelled `index.html`, `tuck.css`, and `mascot.js`.

The video is 720×1280 at 30 fps (about 10.83 seconds). The source panels are tiny and not fully readable; this project recreates the visible structure, state changes, and styling rather than claiming a verbatim extraction.

## Features

- Email and password signup form.
- Eye icon toggles password visibility.
- Accessible `aria-label` and `aria-pressed` state.
- Animated headline states: Watching, Hiding, Peeking, Oops, Welcome.
- Email validation and minimum 8-character password check.
- Create-account loading/success feedback.
- Responsive layout.
- No external dependencies.

## Run locally

```bash
python -m http.server 8000
```

Open http://localhost:8000

## Project structure

```text
tuck-password-peek-signup/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Production note

This is a front-end interaction demo. The “Create account” action simulates success locally; connect it to a secure backend authentication endpoint before using it for real accounts. Never store or validate real passwords only in client-side JavaScript.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
