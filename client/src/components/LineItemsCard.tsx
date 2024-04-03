import { Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react'

function camelCaseToLowerCaseWords(camelCase: string) {
    let result = camelCase.replace(/([A-Z])/g, ' $1');
    result = result.toLowerCase();
    return result;
}

export default function LineItemsCard({ lineItems }: { lineItems: Array<any> }) {
    return (
        <Card className='w-1/3 h-fit'>
            <h3 className='text-[1.5rem] text-tremor-content-strong mb-5'>Line Items</h3>
            <div className='flex gap-2'>
                <Table className='w-full'>
                    <TableHead>
                        <TableRow>
                            {Object.keys(lineItems[0]).map((key: any, i: number) => {
                                return (
                                    <TableHeaderCell key={i}>
                                        {camelCaseToLowerCaseWords(key)}
                                    </TableHeaderCell>
                                )
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {lineItems?.map((item: any, i: number) => {
                        return (
                            <TableRow key={`${item.name}-${i}`}>
                                <TableCell>{item.lineItemId}</TableCell>
                                <TableCell>{item.lineItemName}</TableCell>
                                <TableCell>{item.quantity}</TableCell>
                            </TableRow>
                        )
                    })}
                    </TableBody>
                </Table>
            </div>
        </Card>
    )
}