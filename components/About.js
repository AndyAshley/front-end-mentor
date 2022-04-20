import { Container } from "./Container";
export default function About() {
  return (
    <div className="flex flex-col items-center">
      <div className="mx-7 my-10  bg-white border border-gray-200 rounded-2xl py-10 px-5 shadow-md leading-relaxed max-w-[768px]">
        <h2 className="text-xl font-bold pb-5">About this project</h2>
        <p className="text-neutral-gray-dark text-[15px] pb-8">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable
          while at work, helping you stay focused on the task at hand.
        </p>
        <p className="text-neutral-gray-dark text-[15px] ">Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
        <Container
          title="Bamboo Stand"
          pledge="Pledge $25 or more"
          buttonText="Select Reward"
          text="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
          amount="101"
          stock={true}
        />
        <Container
          title="Black Edition Stand"
          buttonText="Select Reward"
          pledge="Pledge $75 or more"
          text="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
          amount="64"
          stock={true}
        />
        <Container
          title="Mahogany Special Edition"
          buttonText="Out of stock"
          pledge="Pledge $200 or more"
          text="  You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
          amount="0"
          stock={false}
          faded={true}
        />
      </div>
    </div>
  );
}
