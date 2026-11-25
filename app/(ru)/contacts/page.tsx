const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const metadata = { formatDetection: { telephone: false }, title: "Контакты — МАСТЕРСКАЯ РЕМОНТА", alternates: { canonical: "https://master-rem.com/contacts/", languages: { ru: "https://master-rem.com/contacts/", en: "https://master-rem.com/en/contacts/" } } };

export default function ContactsPage() {
  return <main className="project-detail contacts-page">
    <header className="project-detail-header">
      <a href={basePath + "/"} aria-label="На главную"><img src={basePath + "/images/logo-approved-horizontal.png"} alt="Мастерская ремонта" /></a>
      <a href={basePath + "/"}>На главную</a>
    </header>
    <div className="project-detail-body">
      <p className="project-detail-eyebrow">МАСТЕРСКАЯ РЕМОНТА</p>
      <h1>Контакты</h1>
      <p className="project-detail-eyebrow">Телефон</p>
      <p className="contacts-phone">8 (999) 888-89-69</p>
      <p>Понедельник–пятница, 10:00–18:00 по Москве</p>
      <a className="project-detail-back" href={basePath + "/en/contacts/"} hrefLang="en">English</a>
    </div>
  </main>;
}
