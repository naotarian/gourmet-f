import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import AdminMenu from '@/components/Parts/Template/Admin/AdminMenu'
import WrapperGrid from '@/components/Parts/Atoms/Admin/WrapperGrid'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
const index = () => {
  const [open, setOpen] = useState(true)
  const [events, setEvents] = useState([
    {
      title: 'event1',
      start: '2022-12-27 12:30:00',
      end: '2022-12-27 12:30:00',
    },
    {
      title: 'event2',
      start: '2022-12-25 12:30:00',
      end: '2022-12-25 14:30:00',
    },
    {
      title: 'event3',
      start: '2022-12-25 12:30:00',
      allDay: false,
    },
  ])
  const handleDateSelect = selectionInfo => {
    setEvents(prevState => [
      ...prevState,
      { title: '追加', start: selectionInfo.start, end: selectionInfo.end },
    ])
    const calendarApi = selectionInfo.view.calendar

    calendarApi.unselect() // 選択した部分の選択を解除
  }
  const handleDateClick = arg => {
    // bind with an arrow function
    alert(arg.dateStr)
  }
  return (
    <>
      <AdminMenu open={open} setOpen={setOpen} />
      <WrapperGrid open={open}>
        <div className="demo-app">
          aaaa
          {events && (
            <div className="demo-app-main">
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                headerToolbar={{
                  center: 'dayGridMonth,timeGridWeek',
                }}
                editable={true}
                locale="ja"
                droppable={true}
                firstDay={5}
                // validRange={() => {
                //   return {
                //     start: '2023-01-20',
                //     end: '2023-01-27',
                //   }
                // }}
                height={900}
                slotMinTime="09:00:00"
                slotMaxTime="25:00:00"
                events={events}
                allDaySlot={false}
                // headerToolbar={{
                //   start: 'title',
                //   center: 'prev, next, today',
                //   end: 'dayGridMonth,timeGridWeek',
                // }}
                select={handleDateSelect}
                selectable={true}
                selectMirror={true}
                dateClick={handleDateClick}
              />
            </div>
          )}
        </div>
      </WrapperGrid>
    </>
  )
}
export default index
