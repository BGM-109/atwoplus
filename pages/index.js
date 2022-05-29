import Link from "next/link";

export default function Home() {
  const menus = ["상품", "주문", "문의"];
  return (
    <div>
      <div className="flex justify-between items-center py-4 px-6">
        <h1>에이투플샵</h1>
        <ul className="flex space-x-4">
          {menus.map((m, i) => (
            <Link href="/order" key={i}>
              <li className="cursor-pointer">{m}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
