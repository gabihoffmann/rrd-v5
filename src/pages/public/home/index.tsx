interface HomePageProps {
  onLogout: () => void;
}
export function HomePage(props: HomePageProps) {
  return (
    <div>
      <h2>Home</h2>
      <button onClick={props.onLogout}>logout</button>
    </div>
  );
}
