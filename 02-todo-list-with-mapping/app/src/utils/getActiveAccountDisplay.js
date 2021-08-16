// Function that displays the active account and is ETH balance
export default ({ address, balance, units }) => {
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