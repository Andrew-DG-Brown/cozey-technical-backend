import { Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react'

export default function ProductsCard({ products }: { products: Array<any> }) {
    return (
        <Card className='w-full'>
            <h3 className='text-[1.5rem] text-tremor-content-strong mb-5'>Products</h3>
            <div className='flex gap-2'>
                <Table className='w-full'>
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell>
                                product id
                            </TableHeaderCell>
                            <TableHeaderCell>
                                product name
                            </TableHeaderCell>
                            <TableHeaderCell>
                                product price
                            </TableHeaderCell>
                            <TableHeaderCell>
                                quantity
                            </TableHeaderCell>
                            <TableHeaderCell>
                                warehouse shelf
                            </TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {products?.map((item: any, i: number) => {
                        return (
                            <TableRow key={`${item.name}-${i}`}>
                                <TableCell>{item.productId}</TableCell>
                                <TableCell>{item.productName}</TableCell>
                                <TableCell>{item.productPrice}</TableCell>
                                <TableCell>{item.quantity}</TableCell>
                                <TableCell>{item.warehouseShelfNum}</TableCell>
                            </TableRow>
                        )
                    })}
                    </TableBody>
                </Table>
            </div>
        </Card>
    )
}