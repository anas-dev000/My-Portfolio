const CoreValueItem = ({ color = "purple-400", children }) => {
  return (
    <li className="flex items-center gap-3">
      <div
        className={`w-2 h-2 rounded-full`}
        style={{ backgroundColor: color }}
      ></div>
      <span className="text-gray-300">{children}</span>
    </li>
  );
};

export default CoreValueItem;
