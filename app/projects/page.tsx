import { Separator } from "@/components/ui/separator";

export default function Page() {
  const data = [
    {
      name: "List It, Do It iOS App",
      description: "In iOS App Store",
      image: "/images/listitdoitlogo.png",
      url: "https://apps.apple.com/us/app/anylist/id6751865449",
    },
    {
      name: "Next Wave XR",
      description: "Built for my father's articles",
      image: "/images/nextwavexrlogo.png",
      url: "https://www.nextwavexr.com/",
    },
    {
      name: "Digital Clock",
      description: "Javascript Project",
      image: "/images/digitalclocklogo.png",
      url: "https://justin-storm.github.io/digitalclock/",
    },
    {
      name: "Color Switcher",
      description: "Javascript Project",
      image: "/images/colorswitcherlogo.png",
      url: "https://justin-storm.github.io/colorswitcher/",
    },
  ];

  return (
    <div className="min-h-svh p-5 pt-[90px] space-y-15">
      <div className="flex items-center gap-4 max-w-5xl mx-auto">
        <Separator className="flex-1" />
        <h1 className="font-bold text-4xl bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent w-fit">
          Projects
        </h1>
        <Separator className="flex-1" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {data.map((item, index) => (
          <a
            href={item.url}
            target="_target"
            key={index}
            className="group relative border rounded-xl aspect-square overflow-hidden cursor-pointer bg-muted/30 hover:border-blue-400 transition-colors duration-300"
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

            {/* Text — hidden by default, revealed on hover */}
            <div className="absolute inset-0 flex flex-col items-center justify-end p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <p className="text-white text-lg font-bold text-center leading-tight">
                {item.name}
              </p>
              <p className="text-white/70 text-sm text-center mt-1">
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}