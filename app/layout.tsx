import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Shastra Cyber Solutions",
  description: "Premium cybersecurity website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <Link href="/" className="logo">
            Shastra
          </Link>

          <div className="nav-links">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <Link href="/contact" className="nav-cta">
            Enquire
          </Link>
        </nav>

        {children}

        <footer className="footer">
          <div className="footer-inner">
            <div>
              <div className="footer-brand">Shastra Cyber Solutions</div>
              <p className="footer-copy">
                Clean, modern cybersecurity for teams that want clarity before complexity.
              </p>
            </div>

            <div className="footer-links">
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/solutions">Solutions</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}