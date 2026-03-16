import { getTranslations } from "next-intl/server";
import ContactForm from "@/components/sections/ContactForm";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: t("title"), description: t("description") };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <main style={{ paddingTop: "64px" }}>
      <ContactForm
        locale={locale}
        t={{
          hero_label: t("hero_label"),
          hero_headline: t("hero_headline"),
          hero_body: t("hero_body"),
          field_name: t("field_name"),
          field_email: t("field_email"),
          field_company: t("field_company"),
          field_type: t("field_type"),
          field_type_placeholder: t("field_type_placeholder"),
          field_type_website: t("field_type_website"),
          field_type_platform: t("field_type_platform"),
          field_type_mobile: t("field_type_mobile"),
          field_type_consulting: t("field_type_consulting"),
          field_type_other: t("field_type_other"),
          field_message: t("field_message"),
          field_message_placeholder: t("field_message_placeholder"),
          submit: t("submit"),
          sending: t("sending"),
          success_title: t("success_title"),
          success_body: t("success_body"),
          error_title: t("error_title"),
          error_body: t("error_body"),
          required: t("required"),
        }}
      />
    </main>
  );
}
