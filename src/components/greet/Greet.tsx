type greetProps = {
  name?: string;
};

export const Greet = ({ name }: greetProps) => {
  return <div>Hello {name} </div>;
};
