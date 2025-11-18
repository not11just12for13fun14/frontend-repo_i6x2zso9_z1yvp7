import React, { useMemo, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Evolution from './components/Evolution'
import Flavor from './components/Flavor'
import Pairings from './components/Pairings'
import Process from './components/Process'
import Contact from './components/Contact'

const copy = {
  es: {
    brand: 'Albariño Artesanal',
    nav: {
      about: 'Nosotros',
      gallery: 'Galería',
      evolution: 'Evolución',
      flavor: 'Perfil',
      pairings: 'Maridajes',
      process: 'Proceso',
      contact: 'Contacto',
    },
    hero: {
      title: 'Albariño artesanal de Galicia',
      tagline: 'Un vino blanco atlántico elaborado a mano, con uvas cultivadas en nuestras tierras gallegas.',
    },
    cta: { learnMore: 'Descubrir', contact: 'Contacto' },
    about: {
      title: 'Tradición familiar y raíces gallegas',
      p1: 'Somos una pequeña bodega familiar en Galicia, dedicada a la elaboración de Albariño de forma artesanal.',
      p2: 'Nuestras uvas se plantan y crecen en viñedos locales, acariciados por la brisa atlántica.',
      p3: 'Honramos la tradición con una receta secreta que pasa de generación en generación.',
    },
    gallery: { title: 'Galería' },
    evolution: { title: 'Evolución de la botella' },
    flavor: {
      title: 'Perfil de sabor',
      notesTitle: 'Notas de sabor',
      notes: 'Refrescante, cítrico y mineral, con recuerdos de manzana verde y lima.',
      aromaTitle: 'Aroma',
      aroma: 'Aromas florales y frutales, con toques salinos del mar cercano.',
      characterTitle: 'Carácter',
      character: 'Equilibrado, vivaz y elegante; final limpio y persistente.',
    },
    pairings: {
      title: 'Maridajes',
      items: [
        'Mariscos y percebes',
        'Pulpo a la gallega',
        'Empanada gallega',
        'Pescados a la plancha',
        'Quesos suaves',
        'Arroces marineros',
      ],
    },
    process: {
      title: 'Del viñedo a tu mesa',
      steps: [
        { title: 'Preparación del suelo', desc: 'Selección de parcelas, análisis y enriquecimiento del suelo atlántico.' },
        { title: 'Plantación', desc: 'Plantamos cepas de Albariño con orientación óptima al sol y al mar.' },
        { title: 'Crecimiento', desc: 'Cuidado manual de la vid, poda y control natural de plagas.' },
        { title: 'Vendimia', desc: 'Cosecha a mano en el punto exacto de maduración.' },
        { title: 'Elaboración y embotellado', desc: 'Fermentación controlada y embotellado con mimo.' },
      ],
    },
    contact: {
      title: 'Contacto',
      name: 'Nombre',
      namePH: 'Tu nombre',
      email: 'Email',
      emailPH: 'tu@email.com',
      message: 'Mensaje',
      messagePH: 'Cuéntanos...',
      submit: 'Enviar',
      success: 'Mensaje enviado. ¡Gracias por escribirnos! 🥂',
      fail: 'No se pudo enviar. Inténtalo de nuevo más tarde.',
      errors: {
        name: 'Introduce tu nombre',
        email: 'Introduce un email válido',
        message: 'El mensaje debe tener al menos 10 caracteres',
      },
    },
  },
  en: {
    brand: 'Handcrafted Albariño',
    nav: {
      about: 'About',
      gallery: 'Gallery',
      evolution: 'Evolution',
      flavor: 'Flavor',
      pairings: 'Pairings',
      process: 'Process',
      contact: 'Contact',
    },
    hero: {
      title: 'Handcrafted Albariño from Galicia',
      tagline: 'An Atlantic white wine made by hand, with grapes grown locally in Galicia.',
    },
    cta: { learnMore: 'Learn more', contact: 'Contact' },
    about: {
      title: 'Family tradition, Galician roots',
      p1: 'We are a small family winery in Galicia, dedicated to crafting Albariño by hand.',
      p2: 'Our grapes are planted and grown locally, embraced by the Atlantic breeze.',
      p3: 'We honor tradition with a secret recipe passed down through generations.',
    },
    gallery: { title: 'Gallery' },
    evolution: { title: 'Bottle evolution' },
    flavor: {
      title: 'Flavor profile',
      notesTitle: 'Tasting notes',
      notes: 'Refreshing, citrus and mineral, with hints of green apple and lime.',
      aromaTitle: 'Aroma',
      aroma: 'Floral and fruity aromas, with a saline touch from the nearby sea.',
      characterTitle: 'Character',
      character: 'Balanced, lively and elegant; clean, persistent finish.',
    },
    pairings: {
      title: 'Food pairings',
      items: [
        'Seafood and goose barnacles',
        'Galician-style octopus',
        'Galician empanada',
        'Grilled fish',
        'Soft cheeses',
        'Seafood rice',
      ],
    },
    process: {
      title: 'From vineyard to table',
      steps: [
        { title: 'Soil preparation', desc: 'Parcel selection, analysis and enrichment of Atlantic soil.' },
        { title: 'Planting', desc: 'We plant Albariño vines with optimal sun and sea orientation.' },
        { title: 'Growing', desc: 'Manual vine care, pruning and natural pest control.' },
        { title: 'Harvesting', desc: 'Hand-picked at the perfect ripeness.' },
        { title: 'Winemaking and bottling', desc: 'Controlled fermentation and careful bottling.' },
      ],
    },
    contact: {
      title: 'Contact',
      name: 'Name',
      namePH: 'Your name',
      email: 'Email',
      emailPH: 'you@email.com',
      message: 'Message',
      messagePH: 'Tell us...',
      submit: 'Send',
      success: 'Message sent. Thank you! 🥂',
      fail: 'Could not send. Please try again later.',
      errors: {
        name: 'Please enter your name',
        email: 'Please enter a valid email',
        message: 'Message must be at least 10 characters',
      },
    },
  },
  ru: {
    brand: 'Ремесленный Альбариньо',
    nav: {
      about: 'О нас',
      gallery: 'Галерея',
      evolution: 'Эволюция',
      flavor: 'Профиль',
      pairings: 'Гастропары',
      process: 'Процесс',
      contact: 'Контакты',
    },
    hero: {
      title: 'Ремесленный Альбариньо из Галисии',
      tagline: 'Атлантическое белое вино ручной работы из местного винограда.',
    },
    cta: { learnMore: 'Узнать больше', contact: 'Связаться' },
    about: {
      title: 'Семейные традиции и корни Галисии',
      p1: 'Мы — небольшая семейная винодельня в Галисии, создающая Альбариньо вручную.',
      p2: 'Наш виноград высаживается и выращивается на местных участках, омываемых атлантическим бризом.',
      p3: 'Мы чтим традиции и наш секретный рецепт, передающийся из поколения в поколение.',
    },
    gallery: { title: 'Галерея' },
    evolution: { title: 'Эволюция бутылки' },
    flavor: {
      title: 'Вкусовой профиль',
      notesTitle: 'Дегустационные ноты',
      notes: 'Свежий, цитрусовый и минеральный, с оттенками зелёного яблока и лайма.',
      aromaTitle: 'Аромат',
      aroma: 'Цветочно-фруктовые ароматы с морской солоноватостью.',
      characterTitle: 'Характер',
      character: 'Сбалансированное, живое и элегантное; чистое и стойкое послевкусие.',
    },
    pairings: {
      title: 'Гастрономические пары',
      items: [
        'Морепродукты и морские желудки',
        'Пульпо по-галисийски',
        'Галисийская эмпанада',
        'Жареная рыба',
        'Мягкие сыры',
        'Ризотто с морепродуктами',
      ],
    },
    process: {
      title: 'От виноградника до стола',
      steps: [
        { title: 'Подготовка почвы', desc: 'Выбор участков, анализ и обогащение атлантической почвы.' },
        { title: 'Посадка', desc: 'Высаживаем лозы с оптимальной ориентацией к солнцу и морю.' },
        { title: 'Рост', desc: 'Ручной уход, обрезка и естественная защита от вредителей.' },
        { title: 'Сбор урожая', desc: 'Ручной сбор в момент идеальной спелости.' },
        { title: 'Винификация и розлив', desc: 'Контролируемая ферментация и деликатный розлив.' },
      ],
    },
    contact: {
      title: 'Контакты',
      name: 'Имя',
      namePH: 'Ваше имя',
      email: 'Email',
      emailPH: 'you@email.com',
      message: 'Сообщение',
      messagePH: 'Напишите нам...',
      submit: 'Отправить',
      success: 'Сообщение отправлено. Спасибо! 🥂',
      fail: 'Не удалось отправить. Попробуйте позже.',
      errors: {
        name: 'Укажите имя',
        email: 'Укажите корректный email',
        message: 'Сообщение должно быть не короче 10 символов',
      },
    },
  },
  ar: {
    brand: 'ألبارينيو مصنوع يدويًا',
    nav: {
      about: 'من نحن',
      gallery: 'المعرض',
      evolution: 'تطور الزجاجة',
      flavor: 'النكهة',
      pairings: 'التوافقات',
      process: 'العملية',
      contact: 'اتصل بنا',
    },
    hero: {
      title: 'ألبارينيو من غاليسيا مصنوع يدويًا',
      tagline: 'نبيذ أبيض أطلسي مصنوع يدويًا من عنب مزروع محليًا في غاليسيا.',
    },
    cta: { learnMore: 'اكتشف المزيد', contact: 'تواصل' },
    about: {
      title: 'تقاليد عائلية وجذور غاليسية',
      p1: 'نحن مصنع نبيذ عائلي صغير في غاليسيا نصنع ألبارينيو يدويًا.',
      p2: 'يُزرع عنبنا محليًا وتنعشه نسمات المحيط الأطلسي.',
      p3: 'نحافظ على التقاليد بوصفة سرية تنتقل عبر الأجيال.',
    },
    gallery: { title: 'المعرض' },
    evolution: { title: 'تطور الزجاجة' },
    flavor: {
      title: 'ملف النكهة',
      notesTitle: 'ملاحظات التذوق',
      notes: 'منعش بحموضة حمضية ومعدنية مع لمسات من التفاح الأخضر والليمون.',
      aromaTitle: 'العطر',
      aroma: 'عطور زهرية وفاكهية مع لمسة مالحة من البحر.',
      characterTitle: 'الطابع',
      character: 'متوازن وحيوي وأنيق؛ نهاية نظيفة وطويلة.',
    },
    pairings: {
      title: 'توافق الطعام',
      items: [
        'مأكولات بحرية وبرنقيلات',
        'أخطبوط على الطريقة الغاليسية',
        'فطيرة غاليسية',
        'أسماك مشوية',
        'أجبان طرية',
        'أرز بالمأكولات البحرية',
      ],
    },
    process: {
      title: 'من الكرم إلى المائدة',
      steps: [
        { title: 'تحضير التربة', desc: 'اختيار القطع، التحليل وإثراء التربة الأطلسية.' },
        { title: 'الزراعة', desc: 'نزرع كروم ألبارينيو باتجاه مثالي للشمس والبحر.' },
        { title: 'النمو', desc: 'رعاية يدوية للكروم وتشذيب ومكافحة طبيعية للآفات.' },
        { title: 'الحصاد', desc: 'حصاد يدوي عند النضج المثالي.' },
        { title: 'التخمير والتعبئة', desc: 'تخمير مضبوط وتعبئة بعناية.' },
      ],
    },
    contact: {
      title: 'اتصل بنا',
      name: 'الاسم',
      namePH: 'اسمك',
      email: 'البريد الإلكتروني',
      emailPH: 'you@email.com',
      message: 'الرسالة',
      messagePH: 'أخبرنا...',
      submit: 'إرسال',
      success: 'تم إرسال الرسالة. شكرًا لك! 🥂',
      fail: 'تعذر الإرسال. حاول لاحقًا.',
      errors: {
        name: 'يرجى إدخال الاسم',
        email: 'يرجى إدخال بريد صحيح',
        message: 'يجب أن تكون الرسالة 10 أحرف على الأقل',
      },
    },
  },
}

export default function App() {
  const [lang, setLang] = useState('es')
  const t = useMemo(() => copy[lang], [lang])

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header lang={lang} setLang={setLang} t={t} />
      <main className="pt-14">
        <Hero t={t} />
        <About t={t} />
        <Gallery t={t} />
        <Evolution t={t} />
        <Flavor t={t} />
        <Pairings t={t} />
        <Process t={t} />
        <Contact t={t} />
      </main>
      <footer className="py-10 text-center text-neutral-600 bg-[#F5EBDD] border-t border-neutral-200">
        © {new Date().getFullYear()} Albariño Artesanal — Galicia, España
      </footer>
    </div>
  )
}
