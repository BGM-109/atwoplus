const TopBar = () => {
  const menus = ["고객센터", "관심상품", "마이페이지", "로그인"];
  return (
    <div className="hidden md:flex h-8 items-center justify-end px-10 border-b-[1px]">
      <ul className="flex space-x-6 text-xs text-gray-500">
        {menus.map((menu, index) => (
          <li key={index} className="cursor-pointer">
            {menu}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopBar;
