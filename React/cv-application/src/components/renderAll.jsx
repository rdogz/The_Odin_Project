import { RenderGeneralInfo } from "./general.jsx";
import { RenderEducation } from "./education.jsx";

function RenderAll() {
  return (
    <>
      <div className="componentGeneral">
        <h1>General Information</h1>
        <RenderGeneralInfo />
        <button type="submit" id="submitGeneral">
          Add General
        </button>
      </div>
      <div className="component">
        <h1>Education</h1>
        <RenderEducation />
        <button type="submit" id="submitEducation">
          Add Education
        </button>
      </div>
      <div className="component">
        <h1>Experience</h1>
        <RenderGeneralInfo />
        <button type="submit" id="submitExperience">
          Add Experience
        </button>
      </div>
    </>
  );
}

export { RenderAll };
