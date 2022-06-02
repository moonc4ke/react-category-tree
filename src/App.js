import RecursiveTree from './components/recursive_tree';
import { mockOrgTreeList } from './data';

const App = () => {
  return (
    <>
      <RecursiveTree listMeta={mockOrgTreeList} />
    </>
  );
};

export default App;
