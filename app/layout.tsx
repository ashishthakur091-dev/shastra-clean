import "./globals.css";

export const metadata = {
  title: "Shastra Cyber Solutions",
  description: "Minimal premium cybersecurity website",
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
          <div className="logo">Shastra</div>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#solutions">Solutions</a>
            <a href="#contact">Contact</a>
          </div>

          <button className="nav-cta">Enquire</button>
        </nav>

        {children}
      </body>
    </html>
  );
}