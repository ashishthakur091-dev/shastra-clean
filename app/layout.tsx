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
        <header className="site-header">
          <nav className="navbar shell">
            <Link href="/" className="brand">
              <span className="brand-mark" />
              <span>Shastra</span>
            </Link>

            <div className="nav-links">
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/solutions">Solutions</Link>
              <Link href="/industries">Industries</Link>
              <Link href="/contact">Contact</Link>
            </div>

            <Link href="/contact" className="nav-cta">
              Enquire
            </Link>
          </nav>
        </header>

        {children}

        <footer className="site-footer">
          <div className="shell footer-grid">
            <div>
              <div className="footer-brand">Shastra Cyber Solutions</div>
              <p className="footer-copy">
                Premium cybersecurity for teams that want clarity, speed, and
                stronger decision-making.
              </p>
            </div>

            <div className="footer-links">
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/solutions">Solutions</Link>
              <Link href="/industries">Industries</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}