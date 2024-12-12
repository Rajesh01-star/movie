interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <p className="text-xl text-red-600">{message}</p>
    </div>
  );
};