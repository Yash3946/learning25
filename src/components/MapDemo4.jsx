import React from 'react'

export const MapDemo4 = () => {
  var books = [
    { 
        Id: 1, 
        Name: "Atomic Habits", 
        Relaease_year: 2024, 
        Ratings: 4.5, 
        Author: "James Clear",
         Price: 350 
    },
    { 
        Id: 2,
         Name: "The Alchemist",
          Relaease_year: 2024, 
          Ratings: 5, 
          Author: "Paulo Coelho", 
          Price: 490 
    },
    { 
        Id: 3,
         Name: "Rich Dad Poor Dad",
          Relaease_year: 2025, 
          Ratings: 3.5, 
          Author: "Robert Kiyosaki",
           Price: 1029 
    },
    { 
        Id: 4,
         Name: "Wings of Fire",
          Relaease_year: 2025, 
          Ratings: 3.8, 
          Author: "A.P.J. Abdul Kalam", 
          Price: 489 
    },
    {
         Id: 5,
         Name: "Ikigai", 
         Relaease_year: 2026, 
         Ratings: 4, 
         Author: "Héctor García, Francesc Miralles", 
         Price: 1098 
    }
  ]

  return (
    <div style={{textAlign: 'center' }}>
      <h1>MapDemo4</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Release Year</th>
            <th>Ratings</th>
            <th>Author</th>
            <th>Price</th>
           
          </tr>
        </thead>
        <tbody>
          {
            books.map((book) => {
              return (
                <tr key={book.Id}>
                  <td>{book.Id}</td>
                  <td>{book.Name}</td>

                  <td>{book.Relaease_year}
                  {book.Relaease_year == 2025 && <span> - CurrentYear</span>}
                  {book.Relaease_year < 2025 &&  <span> - PreviousYear</span>}
                  {book.Relaease_year > 2025 &&  <span> - NextYear</span>}
                  </td>
                
                  <td>{book.Ratings}
                  { book.Ratings >= 4 && <span> - Highly recommended</span>}
                  { book.Ratings < 4 && <span> - Not recommended</span>}
                  </td>


                  <td>{book.Author}</td>

                  <td style={{color:book.Price <= 500 ? "yellow" : "red"}} >{book.Price}
                  { book.Price >= 100 && book.Price <= 500 && <span> - Low price</span>}
                  { book.Price >= 500 && book.Price <= 1500 && <span> - High price</span>}
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}