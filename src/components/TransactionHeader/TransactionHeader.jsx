import Button from "../_share/Button/Button";

const TransactionHeader = ({ transTitle, handleCloseTransaction }) => {
  return (
    <>
      <Button
        title="GoBack"
        cbOnClick={handleCloseTransaction}
      />
      <h1>{transTitle}</h1>
    </>
  );
};
// const TransactionHeader = ({ title, handleCloseTransaction }) => {
//   return (
//     <header>
//       <Button
//         title="GoBack"
//         cbOnClick={handleCloseTransaction}
//       />
//       <h1>{title}</h1>
//     </header>
//   );
// };

export default TransactionHeader;
