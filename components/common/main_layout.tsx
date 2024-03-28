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
        {/* <TopHeader /> */}
        <MainHeader />
      </header>
      <main className="overflow-hidden flex flex-col pt-16 bg-gray-100">
        {children}
      </main>
    </>
  );
}
