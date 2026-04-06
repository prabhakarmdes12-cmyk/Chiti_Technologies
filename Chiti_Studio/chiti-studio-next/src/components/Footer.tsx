import Link from "next/link";
import { Twitter, Dribbble, Linkedin, ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";
import Container from "@/components/Container";

const socialLinks = [
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "Dribbble", href: "#", icon: Dribbble },
  { label: "LinkedIn", href: "#", icon: Linkedin },
];

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Services", href: "/services" },
      { label: "Work", href: "/work" },
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "Network",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Twitter", href: "#" },
      { label: "Dribbble", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] bg-surface-container-lowest/50">
      <Container>
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Logo size={22} />
            <p className="mt-6 text-on-surface-variant text-[13px] leading-[1.7] max-w-[280px]">
              Clean interfaces. Strong systems. Better results. We build digital
              artifacts that stand the test of time.
            </p>
            <div className="flex gap-3 mt-8">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="flex items-center justify-center h-9 w-9 rounded-full border border-white/[0.06] text-on-surface-variant/60 hover:text-primary hover:border-primary/20 hover:bg-primary/[0.06] transition-all duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  aria-label={social.label}
                >
                  <social.icon size={14} strokeWidth={1.5} />
                </Link>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-[10px] font-label uppercase tracking-[0.15em] text-on-surface-variant/30 mb-7 font-medium">
                {group.title}
              </h4>
              <ul className="space-y-3.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-on-surface-variant/60 hover:text-on-surface transition-colors duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center gap-1.5 group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={10}
                        strokeWidth={1.5}
                        className="opacity-0 group-hover:opacity-100 transition-all duration-[400ms] translate-y-0.5 group-hover:translate-y-0"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-on-surface-variant/25 text-[11px] font-label tracking-[0.12em]">
            &copy; {new Date().getFullYear()} CHITI STUDIO
          </p>
          <p className="text-on-surface-variant/20 text-[10px] font-label tracking-[0.15em] uppercase">
            Architecture of the Digital Soul
          </p>
        </div>
      </Container>
    </footer>
  );
}
