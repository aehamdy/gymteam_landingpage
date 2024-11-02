function FooterBottomBar() {
  return (
    <div className="py-5 px-section-horizontal-padding-sm md:px-section-horizontal-padding-md lg:px-section-horizontal-padding-lg text-secondary-paragraph border-t-2 border-t-[#252525]">
      <div className="flex flex-row items-center justify-between gap-2 px-section-horizontal-padding text-[0.6rem] md:text-base select-none">
        <p className="hover:text-white duration-short">
          Copyright 2024 All Right Reserved
        </p>
        <p className="group hover:text-white duration-short">Made with ❤️ by <a href="https://ahmedessam-portfolio.vercel.app/" target="_blank" className="text-accent group-hover:underline">AE</a></p>
      </div>
    </div>
  );
}

export default FooterBottomBar;
