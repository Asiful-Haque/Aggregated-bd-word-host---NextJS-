import Link from 'next/link';
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="parent-footer">
      <div className="footer">
            {/* Left Footer */}
            <div className="left-footer">
            <p className="font-l">
                © 2024-2026 | English Bangla Dictionary | All Rights Reserved By{" "}
                <Link href="/" className="link-text">English-Welsh</Link>
            </p>
            </div>

            {/* Right Footer */}
            <div className="right-footer">
            <Link href="/about" className="font">About Us</Link>
            <Link href="/privacy" className="font">Privacy</Link>
            <Link href="/contact" className="font">Contact</Link>
            </div>
      </div>
    </footer>
  );
}
