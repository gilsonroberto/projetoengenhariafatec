import { NavMenu } from "../components/NavMenu";
import TableCustom from "../components/TableCustom";

export default function Products() {
  return (
    <div>
      <NavMenu />
      <div className="container">
        <div className="row">
          <TableCustom />
        </div>
      </div>
    </div>
  )
}
