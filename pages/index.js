export default function Home() {
  const menus = ["상품", "주문", "문의"];
  return (
    <div>
      <div className="flex justify-between items-center py-4 px-6">
        <h1>에이투플샵</h1>
        <ul className="flex space-x-4">
          {menus.map((m, i) => (
            <a href="/order" key={i}>
              <li>{m}</li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}
