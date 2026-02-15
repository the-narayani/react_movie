import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  return (
      <div>
        <MovieCard movie = {{title: "tim", release_date: 2024}}/>
        <MovieCard movie = {{title: "joe", release_date: 2025}}/>
      </div>      
  )
}
export default App
