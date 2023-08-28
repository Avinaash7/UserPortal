import useTranslation from "next-translate/useTranslation";
import Image from "next/image"

export const NoItemFound = ({ message, width=200 }: any) => {
  const { t } = useTranslation("common");
  return (
    <div className="text-center py-5 no-item-found-border">
      <Image width={width} className="mb-3" src="/../noItem.svg" alt="" />
      <h3>{message ? message : t("No Item Found")}</h3>
    </div>
  );
};
