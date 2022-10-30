import Day from "./component/Day";    // 데이 컨포넌트 불러오기
import DayList from "./component/DayList";  // 데이리스트 컨포넌트 불러오기
import Header from "./component/Header";    // 헤더 부분 컨포넌트 불러오기
import {BrowserRouter, Routes, Route} from 'react-router-dom'; // 브라우저 라우터 불러오기

function App() {
  return (
    // header부분은 공통으로 보여주기
    // switch 부분은 컨포넌트에 따라서 다르게 보여주기
    // route 경로와 연결
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/">
            <DayList />
          </Route>
          <Route path="day">
            <Day />
          </Route>
        </Routes>     
      </div>
    </BrowserRouter>
  );
}
export default App;
