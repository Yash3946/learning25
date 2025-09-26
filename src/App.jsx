import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import {ContentComponent} from "./components/ContentComponent"
import HeaderComponent from './components/HeaderComponent'
import { FooterComponent } from './components/FooterComponent'
import { MapDemo1 } from './components/MapDemo1'
import { MapDemo2 } from './components/MapDemo2'
import { MapDemo3 } from './components/MapDemo3'
import { MapDemo4 } from './components/MapDemo4'
import { Users } from './components/Users'
import { UseStateDemo } from './components/UseStateDemo'
import { UseStateDemo2 } from './components/UseStateDemo2'
import UseStateDemo3 from './components/UseStateDemo3'
import { Students } from './components/Students'
import { StudentList } from './components/StudentList'
import { Employees } from './components/Employees'
import { Doctor } from './components/Doctor'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { NetflixHome } from './components/Netflix/Netflixhome'
import { NetflixMovies } from './components/Netflix/NetflixMovies'
import { Erorr404 } from './components/Erorr404'
import { WatchContent } from './components/Netflix/WatchContent'
import { NetflixShows } from './components/Netflix/NetflixShows'
import { InputHandlinfDemo1 } from './components/InputHandlinfDemo1'
import { InputHandlingTask1 } from './components/InputHandlingTask1'
import { FormDemo1 } from './components/forms/FormDemo1'
import { FormDemo2 } from './components/forms/FormDemo2'
import { FormStudent } from './components/forms/FormStudent'
import { FormEmployee } from './components/forms/FormEmployee'
import { FormProduct } from './components/forms/FormProduct'
import { FormDemo3 } from './components/forms/FormDemo3'
import { FormInfo } from './components/forms/FormInfo'
import { FormDemo4 } from './components/forms/FormDemo4'
import { BookList } from './components/BookList'
import { DynamicForm } from './components/forms/DynamicForm'
import { DynamicForm2 } from './components/forms/DynamicForm2'
import { DynamicForm3 } from './components/forms/DynamicForm3'
import { Expense } from './components/Expense'
import { Task } from './components/Task'
import { UseMemoDemo } from './components/UseMemoDemo'



function App() {

  var title = "React Js"
  return (
    <div style={{textAlign:'center'}}>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element ={<Students/>}></Route>
        <Route path='/netflixhome' element={<NetflixHome/>}></Route>
        <Route path='/netflixmovies' element={<NetflixMovies/>}></Route>
        <Route path='/netflixshows' element = {<NetflixShows/>}></Route>
        <Route path='/watch/:name' element = {<WatchContent/>}></Route>
        <Route path='/*' element={<Erorr404/>}></Route> */
        /* <Route path='/inputhandlerdemo1' element={<InputHandlinfDemo1/>}></Route>
        <Route path='/inputhadelingtask1' element={<InputHandlingTask1/>}></Route>
        <Route path='/formdemo1' element={<FormDemo1/>}></Route>
        <Route path='/formdemo2' element={<FormDemo2/>}></Route>
        <Route path='/formstudent' element={<FormStudent/>}></Route>
        <Route path='/formemployee' element={<FormEmployee/>}></Route>
        <Route path='/formproduct' element={<FormProduct/>}></Route>
        <Route path='/formdemo3' element={<FormDemo3/>}></Route>
        <Route path='/forminfo' element={<FormInfo/>}></Route>
        <Route path='/formdemo4' element={<FormDemo4/>}></Route>
        <Route path='booklist' element={<BookList/>}></Route>
        <Route path='/dynamicform' element={<DynamicForm/>}></Route>
        <Route path='/dynamicform2' element={<DynamicForm2/>}></Route>
        <Route path='/dynamicform3' element={<DynamicForm3/>}></Route>
        <Route path='/expence' element={<Expense/>}></Route>
        <Route path='/task' element={<Task/>}></Route>
        <Route path='/usememodemo' element={<UseMemoDemo/>}></Route>
      </Routes>
    </div>
  )
}

export default App