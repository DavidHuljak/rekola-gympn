import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h2 className="not-found">Stránka nenalezena.</h2>
      <Link href="/">Zpět na hlavní stránku</Link>
    </>
  );
}
