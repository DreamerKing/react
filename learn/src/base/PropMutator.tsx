export default function PropsMutator({ number, setNumber }){
  let localNumber = number;
  const changeLocalNumber = () => {
    localNumber++;
    console.log(localNumber);
  }

  return (
    <>
      <p>number: {number}</p>
      <p>localNumber: {localNumber}</p>
      <div>
        <button onClick={setNumber}>change number</button>
        <button onClick={changeLocalNumber}>change localNumber</button>
      </div>
    </>
  )
}