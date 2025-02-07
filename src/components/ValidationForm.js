

// import React, { useState } from "react";

// const Form = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     skills: [],
//   });

//   const [formErrors, setFormErrors] = useState({
//     name: false,
//     email: false,
//     phone: false,
//     skills: false,
//   });

//   const validateForm = () => {
//     const errors = {
//       name: !formData.name,
//       email: !formData.email,
//       phone: !formData.phone,
//       skills: formData.skills.every((skill) => !skill.trim()),
//     };

//     setFormErrors(errors);

//     return !Object.values(errors).includes(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Handle form submission if validation is successful
//       console.log("Form submitted successfully");
//     } else {
//       console.log("Form validation failed");
//     }
//   };

//   return (
//     <div>
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Name"
//         value={formData.name}
//         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//         style={{ borderColor: formErrors.name ? "red" : "" }}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//         style={{ borderColor: formErrors.email ? "red" : "" }}
//       />
//       <input
//         type="tel"
//         placeholder="Phone"
//         value={formData.phone}
//         onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//         style={{ borderColor: formErrors.phone ? "red" : "" }}
//       />
//       <textarea
//         placeholder="Skills (comma separated)"
//         value={formData.skills.join(",")}
//         onChange={(e) =>
//           setFormData({
//             ...formData,
//             skills: e.target.value.split(",").map((skill) => skill.trim()),
//           })
//         }
//         style={{ borderColor: formErrors.skills ? "red" : "" }}
//       />
//       {formErrors.skills && (
//         <div style={{ color: "red" }}>Please add at least one skill.</div>
//       )}
//       <button type="submit">Submit</button>
//     </form>
//     </div>
//   );
// };

// export default Form;
