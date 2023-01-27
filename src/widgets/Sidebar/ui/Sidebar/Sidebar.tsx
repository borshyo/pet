import { useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import { ToggleSwitcher } from "shared/ui/ToggleSwitcher";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation();

  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={cls.switchers}>
        <ToggleSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
      <Button onClick={toggleCollapsed}>{t("toggle")}</Button>
    </div>
  );
};
