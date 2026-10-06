function RenderGeneralInfo() {
  return (
    <>
      <div>
        <label for="form-name">Name: </label>
        <input type="text" name="name" id="form-name"></input>
      </div>
      <div>
        <label for="form-email">Email: </label>
        <input type="text" name="email" id="form-email"></input>
      </div>
      <div>
        <label for="form-number">Number: </label>
        <input type="text" name="number" id="form-number"></input>
      </div>
    </>
  );
}

export { RenderGeneralInfo };
