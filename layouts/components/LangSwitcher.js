import { useState, useEffect } from "react";
import { useRouter } from "next/router";


const LangSwitcher = () => {
  const { locale, locales, push } = useRouter();
  const [mounted, setMounted] = useState(false);

  const switchLanguage = (selectedLocale) => {
    push("/", undefined, { locale: selectedLocale });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>

      <div className="py-[14px]">
        {locales.map((loc) => (
          <button
            key={loc}
            onClick={() => switchLanguage(loc)}
            className={`btn ${locale === loc ? 'btn-primary' : 'btn-secondary'} z-0 p-[5px]`}
            title="Switch language"
          >
            {loc}
          </button>
        ))}
      </div>
    </>
  );
};

export default LangSwitcher;