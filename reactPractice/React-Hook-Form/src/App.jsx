import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    console.log("submitting the form", data.firstName);
    await new Promise((resolve)=>(setTimeout(resolve,5000)))
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>First Name </label>
            <input
              {...register("firstName", {
                required: true,
                maxLength: 20,
                minLength: { value: 3, message: "Min len atleast 3" },
              })}
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}
          </div>
          <div>
            <label>Last Name </label>
            <input {...register("lastName")} />
          </div>
          <input type="submit" disabled={isSubmitting} value={isSubmitting? "Submitting": "Submit" } />
        </form>
      </div>
    </>
  );
}

export default App;
