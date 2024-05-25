import { UserDisplay } from "@components/UserDisplay";
import { UserForm } from "@components/UserForm";
function App() {
  return (
    <div className="bg-noir-800 flex min-h-screen px-8 py-6">
      <UserDisplay className="w-1/2" />
      <UserForm className="w-1/2" />
    </div>
  );
}
export default App;
