import Link from "next/link";
import "./styles.css";

export const metadata = {
  title: "Pamětníci na rekolech",
  description:
    "Student initiative organized by Gymnázium Paměti národa in collaboration with Rekola.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <head>
        <link
          rel="stylesheet"
          id="typekit-css"
          href="https://use.typekit.net/hbj7xpr.css"
          type="text/css"
          media="all"
        />
      </head>
      <body>
        <div className="main-wrapper">
          <header>
            <h1>
              <Link href="/" className="header">
                Pamětníci na rekolech
              </Link>
            </h1>
          </header>

          <main>{children}</main>

          <footer>
            Studentský projekt{" "}
            <a
              href="https://gymnazium.pametnaroda.cz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gymnázia Paměti národa
            </a>{" "}
            ve spolupráci se společností{" "}
            <a
              href="https://rekola.cz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rekola
            </a>
            <br />
            &copy;{" "}
            <a
              href="https://david.huljak.cz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dávid Huljak
            </a>
            , Rostislav Ottomanský a Cyril Severýn 2024
          </footer>
        </div>
      </body>
    </html>
  );
}
