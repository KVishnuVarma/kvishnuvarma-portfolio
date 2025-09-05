
type LoadingScreenProps = {
  loading: boolean;
};

const LoadingScreen = ({ loading }: LoadingScreenProps) => {
  return (
    <div
      className={`fixed inset-0 bg-background z-[100] flex items-center justify-center transition-opacity duration-500 ease-in-out ${
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="text-muted-foreground mt-4 font-body">Loading Portfolio...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
