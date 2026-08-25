import { FEATURES } from "../data";

function Feature({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4 border-[#EDE4E9] px-3 lg:border-r lg:px-7 lg:last:border-r-0">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFE0EB] text-xl text-[#F6327B]">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-bold text-[#29152F]">{title}</h3>
        <p className="mt-1 text-xs leading-5 text-[#766A7B]">{text}</p>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section className="relative z-40 mx-auto mb-8 grid w-[92%] max-w-[1300px] grid-cols-1 gap-5 rounded-[28px] bg-white/90 p-6 shadow-[0_20px_60px_rgba(42,17,47,0.08)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:p-8">
      {FEATURES.map((feature) => (
        <Feature key={feature.title} {...feature} />
      ))}
    </section>
  );
}
