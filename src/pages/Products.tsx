import { NavMenu } from "../components/NavMenu";
import TableCustom from "../components/TableCustom";
import { columnsProduct, rowsProduct } from '../initial-state/dataProducts'

export function Products() {
  return (
    <div>
      <NavMenu />
      <div className="container">
        <div className="title-insert border-product">
          <p>Produtos</p>
        </div>
        <div className="row ">
          <TableCustom 
            row={rowsProduct}
            column={columnsProduct}
            design={'product'}
          />
        </div>
      </div>
    </div>
  )
}
