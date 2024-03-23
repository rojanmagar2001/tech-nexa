import MainHeader from "./header/main_header";
import TopHeader from "./header/top_header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="">
        <TopHeader />
        <MainHeader />
      </header>
      <main className="overflow-hidden flex flex-col gap-y-24">{children}</main>
    </>
  );
}
