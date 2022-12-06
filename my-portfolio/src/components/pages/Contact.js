// import React from 'react';
// import { validateEmail } from '../../utils/helper';


// function Contact() {

//   // const [email, setEmail] = useState('');
//   // const [name, setName] = useState('');
//   // const [message, setMessage] = useState('');
//   // const [errorMessage, setErrorMessage] = useState('');

//   // const handleInputChange = (e) => {
//   //   const { target } = e;
//   //   const inputType = target.name;
//   //   const inputValue = target.value;

//   //   if (inputType === 'email') {
//   //     setEmail(inputValue);
//   //   } else if (inputType === 'name') {
//   //     setName(inputValue);
//   //   } else {
//   //     setMessage(inputValue);
//   //   }
//   // };

//   // const handleFormSubmit = (e) => {
//   //   e.preventDefault();

//   //   if (!validateEmail(email) || !userName) {
//   //     setErrorMessage('Email or username is invalid');
//   //     return;
//   //   }
//   //   if (!checkPassword(password)) {
//   //     setErrorMessage(
//   //       `Choose a more secure password for the account: ${nName}`
//   //     );
//   //     return;
//   //   }
//   //   alert(`Hello ${name}`);

//   //   setName('');
//   //   setName('');
//   //   setEmail('');


//     return (
//       <div>
//         <p>Hello {userName}</p>
//         <form className="form">
//           <input
//             value={email}
//             name="email"
//             onChange={handleInputChange}
//             type="email"
//             placeholder="email"
//           />
//           <input
//             value={name}
//             name="name"
//             onChange={handleInputChange}
//             type="text"
//             placeholder="name"
//           />
//           <input
//             value={password}
//             name="password"
//             onChange={handleInputChange}
//             type="password"
//             placeholder="Password"
//           />
//           <button type="button" onClick={handleFormSubmit}>Submit</button>
//         </form>
//         {errorMessage && (
//           <div>
//             <p className="error-text">{errorMessage}</p>
//           </div>
//         )}
//       </div>
//     );
//   }


// export default Contact