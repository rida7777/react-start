import Child from "./Child";
import Event from "./Event";

const Jsx = () => {
  const obj = { a: "A", b: "B" };
  return (
    <div>
      <h1>
        {obj.a} {obj.b}
      </h1>
      <Child num="11" />
      <Child num="1" />

      <Event />
    </div>
  );
};

export default Jsx;
