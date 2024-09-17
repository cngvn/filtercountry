const Hi = (props) => {
    const ko = props.ko;
    console.log(ko);
    return (
      <div className="container ">
        <div style={{ fontSize: "40px", fontWeight: "700" }}>
          {" "}
          {ko.name.common}
        </div>
        <div className="flag"> {ko.flag}</div>
        <div className="ok">Name : {ko.name.common}</div>
        <div className="ok">Napital : {ko.capital}</div>
        <div className="ok">{ko.status}</div>
        <div className="ok"> Region : {ko.region}</div>
        <div className="ok"> Population : {ko.population}</div>
        <div className="ok"> languages : {Object.values(ko.languages)}</div>
      </div>
    );
  };
  export default Hi;