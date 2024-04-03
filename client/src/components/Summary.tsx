'use client'
import { DATE_RANGES } from '@/config/constants';
import { ValidDate, useOrders } from '@/contexts/Orders.context';
import { Card, DatePicker, DatePickerValue, Divider, List, ListItem, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react';

export default function Summary() {
    const { date, data: { summary } = {} } = useOrders()

    function handleDateUpdate(newDate: DatePickerValue) {
        const parsedDate = newDate?.toLocaleDateString('fr-ca') as ValidDate ?? null
        if (!parsedDate) return
        date!.set(parsedDate)
    }

    return (
        <section className={`mx-auto min-w-[1300px]`}>
            <div className='mb-5 flex gap-5 items-center'>
                <p>Showing</p>
                <DatePicker
                    enableClear={false}
                    minDate={DATE_RANGES.forDate('MIN')}
                    maxDate={DATE_RANGES.forDate('MAX')}
                    defaultValue={DATE_RANGES.forDate('MIN')}
                    onValueChange={handleDateUpdate}
                    enableYearNavigation={false}
                    className='max-w-[15rem]'
                    />
            </div>
            <Divider className='mt-10'/>
            <div id='metrics' className={`flex flex-col justify-between mx-auto mt-14`}>
              <h2 className='text-[2.6rem] ml-2 mb-5 text-tremor-content-strong'>Summary</h2>
              <div className="cards flex gap-5 w-full">
                <Card className="h-min">
                    <p className="text-md text-tremor-content dark:text-dark-tremor-content">Line Items</p>
                    <Divider className='my-4'/>
                    <div className='flex gap-5'>
                        {summary?.lineItems ? (
                            <Table className='w-full'>
                                <TableHead>
                                    <TableRow>
                                        {Object.keys(summary.lineItems[0]).map((key: any, i: number) => {
                                            return (
                                                <TableHeaderCell key={i}>{key}</TableHeaderCell>
                                            )
                                        })}
                                    </TableRow>
                                </TableHead>
                            
                                <TableBody>
                                {summary.lineItems.map((item: any, i: number) => {
                                    return (
                                        <TableRow key={`${item.name}-${i}`}>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell>{item.quantity}</TableCell>
                                        </TableRow>
                                    )
                                })}

                                </TableBody>
                            </Table>
                        ) : null}
                    </div>
                </Card>
                <Card>
                    <p className="text-md text-tremor-content dark:text-dark-tremor-content">Products</p>
                    <Divider className='my-4'/>
                    <div className='flex gap-5'>
                        {summary?.products ? (
                            <Table className='w-full'>
                                <TableHead>
                                    <TableRow>
                                        {Object.keys(summary.products[0]).map((key: any, i: number) => {
                                            return (
                                                <TableHeaderCell key={i}>{key}</TableHeaderCell>
                                            )
                                        })}
                                    </TableRow>
                                </TableHead>
                            
                                <TableBody>
                                {summary.products.map((item: any, i: number) => {
                                    return (
                                        <TableRow key={`${item.name}-${i}`}>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell>{item.quantity}</TableCell>
                                        </TableRow>
                                    )
                                })}

                                </TableBody>
                            </Table>
                        ) : null}
                    </div>
                </Card>
              </div>
            </div>
        </section>
    )
}