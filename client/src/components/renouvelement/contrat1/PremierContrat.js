import React, { useState } from "react";

function PremierContrat() {
  const [showText, setShowText] = useState("");

  const onInputChange = function (e) {
    const { name, value } = e.target;
    console.log(name, value);
    setShowText({
      ...showText,
      [name]: value,
    });
  };

  const handleText = (e) => {
    const getValue = e.target.value;
    if (getValue === "Mort") {
      const show = "267";
      setShowText(show);
    } else if (getValue === "Urbain") {
      const show = "284";
      setShowText(show);
    } else if (getValue === "tool") {
      const show = "292";
      setShowText(show);
    }
  };
  return (
    <>
      <div>
        <label>Prenom</label>
        <input
          type="text"
          value={showText.prenom}
          name="prenom"
          placeholder="Votre prenom"
          onChange={onInputChange}
        />
      </div>
      <div>
        <label>Grade</label>
        <select
          name="grade"
          value={showText.grade}
          onChange={(e) => handleText(e)}
        >
          <option></option>
          <option className=" Mort">EcheleII_1er_Echelon</option>
          <option className=" tool">Echele_II_2er_Echelon</option>
          <option className=" Urbain">Echele_II_3eme_Echelon</option>
          <option className=" Rural">Rural</option>
          <option className="homr">Province</option>
        </select>
      </div>
      <div>
        <label>{showText}</label>
        <input
          type="text"
          placeholder="Votre Indice"
          name="indice"
          onChange={onInputChange}
        />
      </div>
    </>
  );
}

export default PremierContrat;
