import { Button, Icon } from "./Buttons";

export default function Backerbox() {
  return (
    <div className="container flex items-center flex-col relative mb-72">
      <div className="absolute -top-12 rounded-xl text-center mx-5 pt-10 pb-5 px-5 bg-white border-gray-200 border xl:w-[768px]">
        <img src="/images/logo-mastercraft.svg" alt="mastercraft logo" className="absolute -top-7 right-1/2 translate-x-2/4" />
        <h1 className="font-bold text-xl pb-4 px-3"> Mastercraft Bamboo Monitor Riser</h1>
        <p className="text-neutral-gray-dark">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
        <div className="flex items-center justify-evenly pt-5 w-">
          <Button text="Back this project" className="w-8/12" stock={true} /> <Icon title="Bookmark this Project" path="/images/icon-bookmark.svg" />
        </div>
      </div>
    </div>
  );
}
