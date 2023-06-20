
import Header from './header';
import Sidebar from './sidebar';
import Feed from './Feed';
import RightSidebar from './RightSidebar';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{user},dispatch] = useStateValue();
  console.log(user);
  return (
    <>
    {
      !user ? (<Login/>) : (
            <div className="App">
          <Header/>
          <div className='app_body'>
            <Sidebar/>
            <Feed/>
            <RightSidebar/>
          </div>
          
        </div>
        )
    }
    {/* <div className="App">
      <Header/>
      <div className='app_body'>
        <Sidebar/>
        <Feed/>
        <RightSidebar/>
      </div>
    </div> */}
    </>
  );
}

export default App;
