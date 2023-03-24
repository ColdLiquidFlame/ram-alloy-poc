const getLogStatus = (logs = []) => {
  const cancelledOrClosed = logs.filter((l) =>
    ["Closed", "Cancel"].includes(l.station)
  );
  const isCancelledOrClosed = cancelledOrClosed.length !== 0;

  let status = "In Progress";

  if (isCancelledOrClosed) {
    const [value] = cancelledOrClosed;
    status = value.station;
  }

  return {
    isCancelledOrClosed,
    status,
  };
};

export { getLogStatus };
