import { useState } from "react";

const InputChip = () => {
  const [inputData, setInputData] = useState("");
  const [inputArray, setInputArray] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputData.trim() !== "") {
      setInputArray([...inputArray, inputData]);
      setInputData("");
    }
  };

  const handleDelete = (data) => {
    console.log(data,"data")
    let deleteIndex = inputArray.filter((el) => data !== el);
    console.log(deleteIndex, "deleteIndex");
    setInputArray(deleteIndex)
  };
  return (
    <>
      <h1>Chips Input</h1>
      <input
        type="text"
        placeholder="Input text and enter the chips"
        name="chips"
        value={inputData}
        onChange={(e)=>setInputData(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{
          width: "200px",
          padding: ".5rem",
          color: "white",
        }}
      />

      {inputArray &&
        inputArray.map((data, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                background: "grey",
                borderRadius: "2rem",
                marginTop: "2rem",
              }}
            >
              <p>
                {data}{" "}
                <span
                  style={{
                    color: "red",
                    paddingLeft: ".5rem",
                    cursor: "pointer",
                  }}
                  onClick={() => handleDelete(data)}
                >
                  X
                </span>
              </p>
            </div>
          );
        })}
    </>
  );
};

export default InputChip;
