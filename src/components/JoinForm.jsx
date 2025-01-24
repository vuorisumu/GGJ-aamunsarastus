function JoinForm() {
  return (
    <div>
      <h3>Liittymislomake</h3>

      <ul>
        <li>
          <label>Kysymys</label>
          <input type="text" placeholder="vastaus" />
        </li>
      </ul>
      <button onClick={() => console.log("click")}>Lähetä</button>
      <button onClick={() => console.log("click")}>Reset</button>
    </div>
  );
}

export default JoinForm;
