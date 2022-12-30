import { useState, useCallback } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import axios from '@/lib/axios'
import Cropper from 'react-easy-crop'
import { Backdrop } from '@mui/material'
const CROP_AREA_ASPECT = 1 / 1
const TabTop = () => {
  const [file, setImage] = useState([null, null, null, null, null])
  const [crop1, setCrop1] = useState({ x: 0, y: 0 })
  const [crop2, setCrop2] = useState({ x: 0, y: 0 })
  const [backCrop1, setBackCrop1] = useState(null)
  const [backCrop2, setBackCrop2] = useState(null)
  const [zoom1, setZoom1] = useState(1)
  const [zoom2, setZoom2] = useState(1)
  const [croppedArea1, setCroppedArea1] = useState(null)
  const [croppedArea2, setCroppedArea2] = useState(null)
  const onChangeHandler = (event, num) => {
    // setImage(undefined)
    if (event.target.files?.length === 0) {
      return
    }
    if (!event.target.files?.[0].type.match('image.*')) {
      return
    }
    const reader = new FileReader()
    reader.onload = e => {
      setImage(file.map((f, index) => (index === num ? e.target?.result : f)))
      //   setImage(e.target?.result)
    }
    reader.readAsDataURL(event.target?.files[0])
  }
  const onCropComplete1 = useCallback((croppedArea, croppedAreaPixels) => {
    setBackCrop1(croppedAreaPixels)
  }, [])
  const onCropComplete2 = useCallback((croppedArea, croppedAreaPixels) => {
    setBackCrop2(croppedAreaPixels)
  }, [])

  const submit = async () => {
    const backCrop = [backCrop1, backCrop2]
    const sendData = { file: file, backCrop: backCrop }
    const res = await axios.post('/api/admin/imageUpload', sendData)
    setImage([null, null, null, null, null])
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="h6">フォトギャラリー設定</Typography>
        </Grid>
        <Grid item xs={8}>
          <input
            type="file"
            accept="image/jpeg,image/png"
            onChange={e => onChangeHandler(e, 0)}
          />
          <Grid
            style={{ position: 'relative', height: '25vh', marginTop: '2rem' }}>
            {file[0] && (
              <Cropper
                image={file[0]}
                crop={crop1}
                zoom={zoom1}
                aspect={5 / 2}
                showGrid={false}
                zoomSpeed={1}
                restrictPosition={true}
                maxZoom={2}
                onCropChange={setCrop1}
                zoomWithScroll={1}
                onCropComplete={onCropComplete1}
                onZoomChange={setZoom1}
                onCropAreaChange={croppedArea => {
                  setCroppedArea1(croppedArea)
                }}
              />
            )}
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <input
            type="file"
            accept="image/jpeg,image/png"
            onChange={e => onChangeHandler(e, 1)}
          />
          <Grid
            style={{ position: 'relative', height: '25vh', marginTop: '2rem' }}>
            {file[1] && (
              <Cropper
                image={file[1]}
                crop={crop2}
                zoom={zoom2}
                aspect={5 / 2}
                showGrid={false}
                zoomSpeed={1}
                restrictPosition={true}
                maxZoom={2}
                onCropChange={setCrop2}
                zoomWithScroll={1}
                onCropComplete={onCropComplete2}
                onZoomChange={setZoom2}
                onCropAreaChange={croppedArea => {
                  setCroppedArea2(croppedArea)
                }}
              />
            )}
          </Grid>
        </Grid>
      </Grid>

      <Button variant="contained" onClick={submit}>
        送信
      </Button>
    </>
  )
}
export default TabTop
