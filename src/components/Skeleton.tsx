const Skeleton = () => {
  return (
    <>
      <div className="p-3   text-sm  grid rounded-lg shadow-md grid-flow-row bg-slate-800 border-none min-w-[180px] max-w-[180px]">
        <div className="animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
        <div className="animate-pulse h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div className="animate-pulse h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="animate-pulse h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
        <div className="animate-pulse h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
        <div className="animate-pulse h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};

export default Skeleton;
