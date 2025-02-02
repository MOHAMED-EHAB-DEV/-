import "./globals.css";
import "./styles.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export default async function RootLayout({ children }) {
  const locale = await getLocale();

  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={`antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
