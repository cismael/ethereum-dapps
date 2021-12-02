// Function that displays the active account and is ETH balance
const getActiveAccountDisplay = ({ address, balance, units }) => {
  return (
      <>
          <div>
              Active Account : <span style={{ color: "red" }}><strong>{address}</strong></span>
          </div>
          <div>
              Balance : <span style={{ color: "red" }}><strong>{balance}{" "}{units}</strong></span>
          </div>
      </>
  );
};

export default getActiveAccountDisplay;