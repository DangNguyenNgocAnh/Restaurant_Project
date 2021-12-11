import "C:/Demonstration/PolyReact2021/restaurant-project/src/asset/css/BookTable.css";

function BookTable() {
  return (
    <div className="BookTable">
      <header className="header">
        <div class="section-title">
          <h3>Reservation</h3>
          <h2>Book a Table</h2>
        </div>
        <table className="table">
          <tr className="table-row">
            <td className="table-item" >
              <input type="text" placeholder="Your Name" size="30"/>
            </td>
            <td className="table-item" >
              <input type="email" placeholder="Your Email" size="30" />
            </td>
            <td className="table-item" >
              <input type="text" placeholder="Your Phone" size="30"/>
            </td>
          </tr>
          <tr className="table-row">
            <td className="table-item" >
              <input type="text" placeholder="Date" size="30" />
            </td>
            <td className="table-item" >
              <input type="text" placeholder="Time" size="30"/>
            </td>
            <td className="table-item" >
              <input type="text" placeholder="Number of people" size="30" />
            </td>
          </tr>
          
        </table>
        <div class="btn">
        <a href="">Book a table</a>
        </div>
      </header>
    </div>
  );
}

export default BookTable;
