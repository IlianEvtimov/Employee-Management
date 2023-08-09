import './App.css'
import EmployeeComponent from './Components/EmployeeComponent'
import DepartmentComponent from './Components/DepartmentComponent'
import FooterComponent from './Components/FooterComponent'
import HeaderComponent from './Components/HeaderComponent'
import ListDepartmentComponent from './Components/ListDepartmentComponent'
import ListEmployeeComponent from './Components/ListEmployeeComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
              
              {/* // http://localhost:3000 */}
              <Route path='/' element = { <ListEmployeeComponent />}></Route>
              
              {/* // http://localhost:3000/employees */}
              <Route path='/employees' element = { <ListEmployeeComponent /> }></Route>

              {/* // http://localhost:3000/add-employee */}
              <Route path='/add-employee' element = { <EmployeeComponent />}></Route>

              {/* // http://localhost:3000/edit-employee/id */}
              <Route path='/edit-employee/:id' element = { <EmployeeComponent /> }></Route>

              {/* // http://localhost:3000/departments */}
              <Route path='/departments' element = { <ListDepartmentComponent />}></Route>

              {/* // http://localhost:3000/add-department */}
              <Route path='/add-department' element = { <DepartmentComponent /> }></Route>

              {/* // http://localhost:3000/id */}
              <Route path='/edit-department/:id' element = { <DepartmentComponent />}></Route>
          </Routes>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
