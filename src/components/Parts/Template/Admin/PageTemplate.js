import AdminMenu from '@/components/Parts/Template/Admin/AdminMenu'
import WrapperGrid from '@/components/Parts/Atoms/Admin/WrapperGrid'
import ContentsGrid from '@/components/Parts/Atoms/Admin/ContentsGrid'
import TitleGrid from '@/components/Parts/Atoms/Admin/TitleGrid'
const PageTemplate = ({ open, setOpen, title, ...props }) => {
  return (
    <>
      <AdminMenu open={open} setOpen={setOpen} />
      <WrapperGrid open={open}>
        <TitleGrid title={title} />
        <ContentsGrid {...props} />
      </WrapperGrid>
    </>
  )
}
export default PageTemplate
