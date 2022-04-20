import { Button } from "./Buttons";

export const Container = (props) => {
  let faded = props.faded;
  return (
    <div className={`${faded ? "opacity-50" : "opacity-100"} container rounded-xl  bg-white border border-gray-200 p-5 my-8 shadow-sm`}>
      <div className="flex flex-col justify-between">
        <h3 className="font-bold">{props.title}</h3>
        <span className="text-primary-cyan font-medium">{props.pledge}</span>
      </div>
      <div className="py-5 text-[14px] text-neutral-gray-dark">
        <p>{props.text}</p>
      </div>
      <div className="flex flex-col justify-around items-start">
        <span className="text-4xl font-bold pb-5 flex items-center">
          {props.amount}
          <span className="text-lg text-neutral-gray-dark font-normal ml-2 pt-1">left</span>
        </span>
        <Button title={props.buttonText} text={props.buttonText} stock={props.stock} />
      </div>
    </div>
  );
};
