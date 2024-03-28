import ProductsHeader from "./header/products_layout/products_header";

export default function SubLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <ProductsHeader />
      <main className="overflow-hidden flex flex-col pt-4">{children}</main>
    </div>
  );
}
