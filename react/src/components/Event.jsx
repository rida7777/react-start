const Event = () => {
  return (
    <div>
      <button onClick={() => alert("클릭!")}>버튼</button>
      <input onChange={(element) => console.log(element.target.value)} />
    </div>
  );
};

export default Event;
