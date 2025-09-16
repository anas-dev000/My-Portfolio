const IconWrapper = ({ icon: Icon, gradientFrom = "from-blue-600", gradientTo = "to-purple-600", className = "" }) => {
  return (
    <div
      className={`p-3 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-lg flex items-center justify-center ${className}`}
    >
      <Icon className="w-6 h-6 text-white" />
    </div>
  );
};

export default IconWrapper;
