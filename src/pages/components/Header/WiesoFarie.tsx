import WiesoFarieColumn from "./WiesoFarieColumn";

const WiesoFarie = () => {
  const entdeckeFarie = {
    title: "Entdecke Farie",
    pages: [
      {
        name: "So funktioniert Farie",
        description: "Kauf dein nächstes Auto einfach und sicher online",
        url: "/",
      },
      {
        name: "Unser Team",
        description: "Kauf dein nächstes Auto einfach und sicher online",
        url: "/",
      },
      {
        name: "Über Farie",
        description: "Wir erfinden den Autohandel neu",
        url: "/",
      },
    ],
  };
  const deinAuto = {
    title: "Dein Auto – ganz einfach",
    pages: [
      {
        name: "Auto kaufen",
        description: "Kauf dein nächstes Auto einfach und sicher online",
        url: "/",
      },
      {
        name: "Auto verkaufen",
        description: "Kauf dein nächstes Auto einfach und sicher online",
        url: "/",
      },
      {
        name: "Fahrzeugfinanzierung",
        description: "Kauf oder Leasing – du entscheidest",
        url: "/",
      },
      {
        name: "Fahrzeuglieferung",
        description: "Lass dein Farie Auto bis vor deine Haustür liefern",
        url: "/",
      },
    ],
  };
  const haeufigeFrage = {
    title: "Häufige Frage",
    pages: [
      {
        name: "Fahrzeugqualität",
        description: "Was kann ich von den Farie Gebrauchtwagen erwarten?",
        url: "/",
      },
      {
        name: "Wie funktioniert die Geld-zurück-Garantie?",
        description:
          "Das Auto entspricht nicht deinen Erwartungen? Gebe es bis zu 14 Tage nach Erhalt wieder zurück",
        url: "/",
      },
      {
        name: "Was benötige ich, um mein Auto zu verkaufen?",
        description: "Kauf oder Leasing – du entscheidest",
        url: "/",
      },
    ],
  };

  return (
    <div className="flex place-items-center border-red-700 border-solid border-2">
      <WiesoFarieColumn content={entdeckeFarie} />
      <WiesoFarieColumn content={deinAuto} />
      <WiesoFarieColumn content={haeufigeFrage} />
    </div>
  );
};

export default WiesoFarie;
