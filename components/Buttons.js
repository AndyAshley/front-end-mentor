export const Button = (props) => {
  let inStock = props.stock;

  return (
    <button title={props.text} className={`${inStock == true ? "bg-primary-cyan" : "bg-neutral-gray-dark"} bg-primary-cyan py-4 px-10 rounded-3xl text-white text-sm font-bold ${props.className}`}>
      {props.text}
    </button>
  );
};

export const Icon = (props) => {
  return (
    <button title={props.title}>
      <img src={props.path} alt={props.title} />
    </button>
  );
};
