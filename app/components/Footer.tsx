import { FOOTER_SHOP_LINKS, FOOTER_HELP_LINKS, FOOTER_ABOUT_LINKS } from "../data";
import { Newsletter } from "./Newsletter";

function SocialButton({ label }: { label: "ig" | "tt" | "pin" }) {
  const labels = { ig: "IG", tt: "TT", pin: "P" };

  return (
    <a
      href="#"
      aria-label={labels[label]}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-[10px] font-black text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#F6327B] hover:bg-[#F6327B] hover:text-white"
    >
      {labels[label]}
    </a>
  );
}

const FOOTER_LINK_MAP: Record<string, string> = {
  "All Accessories": "/shop",
  "Scrunchies": "/shop/scrunchies",
  "Hair Clips": "/shop/hair-clips",
  "Bows": "/shop/bows",
  "Headbands": "/shop/headbands",
  "Our Story": "/about",
};

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>
      <h3 className="text-[10px] font-black tracking-[2px] text-[#FFD84D]">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a
              href={FOOTER_LINK_MAP[link] || "#"}
              className="text-sm text-white/45 transition-colors duration-200 hover:text-white"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#29152F]">
      <Newsletter />

      {/* Main Footer */}
      <section className="px-5 py-16 sm:px-8 lg:px-14 xl:px-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <a
                href="#"
                className="inline-block text-[36px] font-black tracking-[-2px] text-white"
              >
                hair
                <span className="font-serif italic text-[#F6327B]">daze</span>
                <span className="text-[#FFD84D]">.</span>
              </a>
              <p className="mt-5 max-w-[290px] text-sm leading-6 text-white/45">
                Making ordinary hair days a little more fun, one accessory at a
                time.
              </p>
              <div className="mt-7 flex items-center gap-3">
                <SocialButton label="ig" />
                <SocialButton label="tt" />
                <SocialButton label="pin" />
              </div>
            </div>

            <FooterColumn title="SHOP" links={[...FOOTER_SHOP_LINKS]} />
            <FooterColumn title="HELP" links={[...FOOTER_HELP_LINKS]} />
            <FooterColumn title="ABOUT" links={[...FOOTER_ABOUT_LINKS]} />
          </div>

          {/* Bottom */}
          <div className="mt-16 border-t border-white/10 pt-7">
            <div className="flex flex-col gap-5 text-[10px] text-white/30 sm:flex-row sm:items-center sm:justify-between">
              <p>&copy; 2026 HairDaze. Made with love & good hair days.</p>
              <div className="flex flex-wrap gap-5">
                <a href="#" className="transition-colors hover:text-white">
                  Privacy
                </a>
                <a href="#" className="transition-colors hover:text-white">
                  Terms
                </a>
                <a href="#" className="transition-colors hover:text-white">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
