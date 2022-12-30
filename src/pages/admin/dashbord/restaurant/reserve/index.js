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
      allDay: false, // will make the time show
    },
  ])
  const handleDateSelect = selectionInfo => {
    console.log('selectionInfo: ', selectionInfo) // 選択した範囲の情報をconsoleに出力
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
          {events && (
            <div className="demo-app-main">
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek" // 初期表示のモードを設定する
                headerToolbar={{
                  center: 'dayGridMonth,timeGridWeek',
                }}
                editable={true}
                locale="ja"
                droppable={true}
                events={events}
                allDaySlot={false}
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
