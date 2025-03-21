const loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-[#92614c] border-dashed rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center"></div>
      </div>
    </div>
  );
};

export default loading;
