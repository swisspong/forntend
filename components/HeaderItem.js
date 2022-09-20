const HeaderItem = ({ Icon, title }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-slate-600">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="invisible group-hover:visible  tracking-widest">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
