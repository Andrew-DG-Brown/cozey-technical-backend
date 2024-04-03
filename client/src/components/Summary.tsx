'use client'
import { DATE_RANGES } from '@/config/constants';
import { ValidDate, useOrders } from '@/contexts/Orders.context';
import { DatePicker, DatePickerValue, Divider } from '@tremor/react';

export default function Summary() {
    const { date } = useOrders()

    function handleDateUpdate(newDate: DatePickerValue) {
        const parsedDate = newDate?.toLocaleDateString('fr-ca') as ValidDate ?? null
        if (!parsedDate) return
        date!.set(parsedDate)
    }

    return (
        <section className={`mx-auto min-w-[1300px]`}>
            <div className='text-[3rem] flex justify-center w-full font-semibold'>
                <h1 className='mx-auto'>Warehouse Order Manager</h1>
            </div>
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
              <div className="cards">
                {/* <MetricCards /> */}
              </div>
            </div>
        </section>
    )
}