const Payment = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <div>Payment:{id}</div>;
};

export default Payment;
