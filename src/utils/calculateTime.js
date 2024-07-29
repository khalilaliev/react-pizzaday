export const getEstimatedDelivery = (data) => {
  return new Date(data.estimatedDelivery);
};

export const getWaitTimeMinutes = (estimatedDelivery) => {
  return (estimatedDelivery.getTime() - new Date().getTime()) / 60000;
};
