import ContactMessengers from "../../../ContactMessengers";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const metadata = { formatDetection: { telephone: false }, title: "Contacts — RENOVATION WORKSHOP", alternates: { canonical: "https://master-rem.com/en/contacts/", languages: { ru: "https://master-rem.com/contacts/", en: "https://master-rem.com/en/contacts/" } } };

export default function ContactsPage() {
  return <main className="project-detail contacts-page">
    <header className="project-detail-header">
      <a href={basePath + "/en/"} aria-label="Home"><img src={basePath + "/images/logo-approved-horizontal.png"} alt="Мастерская ремонта" /></a>
      <a href={basePath + "/en/"}>Home</a>
    </header>
    <div className="project-detail-body">
      <p className="project-detail-eyebrow">RENOVATION WORKSHOP</p>
      <h1>Contacts</h1>
      <p className="project-detail-eyebrow">Phone</p>
      <p className="contacts-phone">8 (999) 888-89-69</p>
      <ContactMessengers />
      <p>Monday–Friday, 10:00–18:00 (Moscow time)</p>
      <a className="project-detail-back" href={basePath + "/contacts/"} hrefLang="ru">Русский</a>
    </div>
  </main>;
}
