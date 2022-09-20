import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <div>
      <header className="flex flex-col sm:flex-row m-5 items-center justify-between">
        <div className="flex flex-grow justify-evenly max-w-2xl">
          <HeaderItem Icon={HomeIcon} title="HOME" />
          <HeaderItem Icon={LightningBoltIcon} title="TRENDING" />
          <HeaderItem Icon={BadgeCheckIcon} title="VERIFIED" />
          <HeaderItem Icon={CollectionIcon} title="COLECTIONS" />
          <HeaderItem Icon={SearchIcon} title="SEARCH" />
          <HeaderItem Icon={UserIcon} title="ACCOUNT" />
        </div>
        <h1 className="text-4xl font-black">Logo</h1>
      </header>
     
    </div>
  );
};

export default Header;
