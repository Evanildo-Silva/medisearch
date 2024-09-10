import { useManagrSearch } from "@/shared/hooks/useManagerSearch";
import { ReactNode } from "react";
import { Navbar } from "../navbar";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  const { drugName, handleInputChange } = useManagrSearch();
  return (
    <div className="ligth">
      <Navbar
        value={drugName}
        onInputChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(e)
        }
      />
      {children}
    </div>
  );
}

export { Layout };
