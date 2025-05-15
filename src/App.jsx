import React from "react";

function Table(props) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Umur</th>
            <th>Jenis Kelamin</th>
            <th>Perokok</th>
            <th>Merk Rokok</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.gender}</td>
              <td>{data.smoker}</td>
              <td>{data.GGF || data.LS || data.Marl || data.Esse ? [data.GGF, data.LS, data.Marl, data.Esse].filter(Boolean).join(", "): "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function App() {
  const [data, setData] = React.useState([]);

  function saveData(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const form = Object.fromEntries(formData.entries());
    setData([...data, form]);
    e.target.reset();
  }

  return (
    <>
      <form id="form" onSubmit={saveData}>
        <div>
          <label htmlFor="name">Siapa nama Anda?</label>
          <input type="text" name="name" id="name" autoComplete="off"/>
        </div>
        <div>
          <label htmlFor="age">Berapa umur Anda?</label>
          <input type="text" name="age" id="age" autoComplete="off"/>
        </div>
        <div>
          <span>Apa jenis kelamin Anda?</span>
          <div>
            <input type="radio" name="gender" id="m" value="Laki-laki" />
            <label htmlFor="m">Laki-laki</label>
          </div>
          <div>
            <input type="radio" name="gender" id="f" value="Perempuan" />
            <label htmlFor="f">Perempuan</label>
          </div>
        </div>
        <div>
          <span>Apakah Anda perokok?</span>
          <div>
            <input type="radio" name="smoker" id="yes" value="Ya" />
            <label htmlFor="yes">Ya</label>
            <input type="radio" name="smoker" id="no" value="Tidak" />
            <label htmlFor="no">Tidak</label>
          </div>
        </div>
        <div>
          <span>Jika Anda perokok, rokok apa yang pernah Anda coba?</span>
          <div>
            <input
              type="checkbox"
              name="GGF"
              id="GGF"
              value="Gudang Garam Filter"
            />
            <label htmlFor="GGF">Gudang Garam Filter</label>
          </div>
          <div>
            <input type="checkbox" name="LS" id="LS" value="Lucky Strike" />
            <label htmlFor="LS">Lucky Strike</label>
          </div>
          <div>
            <input type="checkbox" name="Marl" id="Marl" value="Marlboro" />
            <label htmlFor="Marl">Marlboro</label>
          </div>
          <div>
            <input type="checkbox" name="Esse" id="Esse" value="Esse" />
            <label htmlFor="Esse">Esse</label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
      <Table data={data}/>
    </>
  );
}

export default App;