function RenderEducation() {
  return (
    <>
      <div>
        <label for="form-school">School Name: </label>
        <input type="text" name="school" id="form-school"></input>
      </div>
      <div>
        <label for="form-title">Title of study: </label>
        <input type="text" name="title" id="form-title"></input>
      </div>
      <div>
        <label for="form-date-start">Start: </label>
        <input type="date" name="date-start" id="form-date-start"></input>
      </div>
      <div>
        <label for="form-date-end">End: </label>
        <input type="date" name="date-end" id="form-date-end"></input>
      </div>
    </>
  );
}

export { RenderEducation };
