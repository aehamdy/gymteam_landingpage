const paragraph =
  "* drawing up an individual training program with best professional convinient location & schedule";

function HorizontalTextScroll() {
  return (
    <div className="font-orbitron flex p-1 font-extrabold text-[13px] text-black text-center uppercase tracking-wide bg-accent overflow-hidden">
      <div className="flex w-max space-x-8 animate-scrollRightToLeft">
        {Array(3)
          .fill(paragraph)
          .map((paragraph, i) => (
            <p key={i} className="whitespace-nowrap">
              {paragraph}
            </p>
          ))}
      </div>
    </div>
  );
}

export default HorizontalTextScroll;
