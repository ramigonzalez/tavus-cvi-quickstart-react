export const WelcomeScreen = ({ onStart, loading }: { onStart: () => void, loading: boolean }) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-10 p-10'>
      <h1 className='text-4xl'>
        Welcome to Tavus Conversational Video Interface
      </h1>
      <button onClick={onStart}>{loading ? 'Loading...' : 'Start daily ritual'}</button>
    </div>
  );
};
