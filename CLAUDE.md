# Shaxzodbek Baxtiyorov — shaxsiy sayt

## Loyiha
- Bir sahifali shaxsiy sayt: Flutter/Android dasturchi va o'qituvchi. O'quvchilar, ota-onalar va buyurtmachilar uchun.
- Bo'limlar: Hero → Men haqimda → Xizmatlar → Savol-javob → Aloqa. "Mijozlar fikri" kerak emas. Matnlar o'zbek tilida (lotin).
- Faktlar: 3+ yil tajriba, bakalavr, **1 ta** darslik kitob muallifi; darslar oflayn, yakka tartibda, 12 yoshdan. Yangi faktni o'zing to'qima — so'ra.

## Uslub
- Taassurot: professional, minimalistik, ta'limga oid. Ohang: samimiy, qisqa, "men" tilida.
- Ranglar: iliq krem fon, asosiy rang terrakota (`--accent`). Ranglarni faqat `:root` tokenlari orqali ber.
- Tungi rejim tokenlari 2 joyda: `[data-theme="dark"]` va `@media (prefers-color-scheme: dark)` — ikkalasini birga yangila.
- Shrift: faqat Inter. Ikonkalar: inline SVG, emoji emas.
- Animatsiya: `reveal` + `fade-up`/`from-left`/`from-right`/`zoom-in`/`blur-in` klasslari; `prefers-reduced-motion` hurmat qilinsin.

## Texnik chegaralar
- Faqat 3 fayl: `index.html`, `style.css`, `script.js` + `images/`. Framework, kutubxona, build yo'q.
- Tashqi resurs faqat Google Fonts. Sayt JS'siz ham ko'rinishi kerak.
- Rasmlar: kichik harfli nom (`.jpg`), ~1000px gacha siqilgan. Asl fayllarni o'chirma.
- Telefon (320px) dan kompyutergacha ishlasin, gorizontal scroll bo'lmasin.

## Ish qoidalari
- Qurishdan oldin qisqa reja ko'rsat, keyin kichik qadamlar bilan ishla.
- Har o'zgarishdan keyin `localhost:8000` da (`.claude/launch.json`) telefon va kompyuter kengligida, kunduzgi/tungi rejimda tekshir.
- Boshqa saytdan namuna berilsa — faqat dizaynini ol, matnini emas.
- Fayl tashqarida o'zgargan bo'lsa, ustidan yozishdan oldin o'qi.
- Parol, kalit, token hech qachon faylga yozilmaydi.
