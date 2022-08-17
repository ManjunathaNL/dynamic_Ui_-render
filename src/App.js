import ReactDOM from "react-dom";
import "./employeeForm.css";

const sampleInputs = {
  formHeading: "Employee Form",
  fields: [
    {
      id: "firstname",
      label: "First Name",
      type: "text",
      validations: {
        nullable: false
      }
    },
    {
      id: "lastname",
      label: "Last Name",
      type: "text",
      validations: {
        nullable: false
      }
    },
    {
      id: "age",
      label: "Age",
      type: "number",
      validations: {
        nullable: false
      }
    },
    {
      id: "gender",
      label: "Gender",
      type: "radio",
      options: [
        {
          label: "Male",
          value: "male"
        },
        {
          label: "Female",
          value: "female"
        }
      ],
      validations: {
        nullable: false
      }
    },
    {
      id: "email",
      label: "Email",
      type: "text",
      validations: {
        nullable: false
      }
    },
    {
      id: "maritalStatus",
      label: "Marital Status",
      type: "Select",
      options: [
        {
          label: "Married",
          value: "married"
        },
        {
          label: "UnMarried",
          value: "unmarried"
        }
      ],
      validations: {
        nullable: false
      }
    },
    {
      id: "address",
      label: "Address",
      type: "textArea",
      validations: {
        nullable: false
      }
    }
  ]
};

function handleSubmit(e) {
  alert("Thanks for Submitting Employee Form");
  console.log(e.target.value.id);
}

const dynamicInputRenderer = () => {
  return (
    <div className="mainForm">
      <h3>{sampleInputs.formHeading}</h3>
      <form onSubmit={handleSubmit}>
        {sampleInputs.fields.map((input) => {
          return (
            <div className="employeeForm" key={input.id}>
              <p>{input.label}</p>
              {input.id !== "gender" && input.id !== "maritalStatus" ? (
                <input
                  type={input.type}
                  className={input.id}
                  label={input.label}
                  required={!input.validations.nullable}
                />
              ) : null}

              {input.type === "Select" ? (
                <>
                  <select>
                    <option
                      type="Select"
                      value="married"
                      name="maritalStatus"
                      required
                    >
                      Married
                    </option>
                    <option
                      type="Select"
                      value="unmarried"
                      name="maritalStatus"
                    >
                      UnMarried
                    </option>
                  </select>
                </>
              ) : null}

              {input.type === "radio" ? (
                <>
                  <div className="radio">
                    <input type="radio" value="MALE" name="gender" required />
                    Male
                    <input type="radio" value="FEMALE" name="gender" />
                    Female
                  </div>
                </>
              ) : null}
            </div>
          );
        })}
        <button className="btn" type="submit">
          {"Submit"}
        </button>
      </form>
    </div>
  );
};
export default dynamicInputRenderer;