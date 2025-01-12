interface ResultDisplayProps {
    resultado: number;
  }
  
  export const ResultDisplay = ({ resultado }: ResultDisplayProps) => (
    <div className="mt-4 text-center">
      <p className="text-lg font-bold">Resultado: {resultado}</p>
    </div>
  );
  
  