import { useTranslation } from "react-i18next";
import i18n from "shared/config/i18n/i18n";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button";
import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t } = useTranslation();

  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };
  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={switchLanguage}
      className={classNames(cls.LangSwitcher, {}, [className])}
    >
      {t("lang")}
    </Button>
  );
};
