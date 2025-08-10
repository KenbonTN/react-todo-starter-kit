import { FaPen, FaClipboardList } from 'react-icons/fa';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-800">
      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="flex items-center gap-3 p-5 bg-slate-900 text-white">
            <FaPen className="text-amber-400" />
            <FaClipboardList className="text-emerald-400" />
            <h1 className="text-xl font-semibold">What to do</h1>
          </div>
          <div className="p-5">
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
