import { useState, useCallback } from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import axios from '@/lib/axios'
import Cropper from 'react-easy-crop'
const CROP_AREA_ASPECT = 1 / 1
const Output = ({ croppedArea, file }) => {
  const scale = 100 / croppedArea.width
  const transform = {
    x: `${-croppedArea.x * scale}%`,
    y: `${-croppedArea.y * scale}%`,
    scale,
    width: 'calc(100% + 0.5px)',
    height: 'auto',
  }

  const imageStyle = {
    transform: `translate3d(${transform.x}, ${transform.y}, 0) scale3d(${transform.scale},${transform.scale},1)`,
    width: transform.width,
    height: transform.height,
    position: 'absolute',
    top: 0,
    left: 0,
    transformOrigin: 'top left',
  }

  return (
    <div
      className="output"
      style={{
        paddingBottom: 0,
        // paddingBottom: `${100 / CROP_AREA_ASPECT}%`,
        position: 'relative',
        width: '300px',
        height: '300px',
        overflow: 'hidden',
        boxShadow: '0 0 32px rgba(0, 0, 0, 0.3)',
      }}>
      <img src={file} alt="" style={imageStyle} />
    </div>
  )
}
const test = () => {
  const [file, setImage] = useState()
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [backCrop, setBackCrop] = useState(null)
  const [zoom, setZoom] = useState(1)
  const [croppedArea, setCroppedArea] = useState(null)
  const onChangeHandler = event => {
    setImage(undefined)
    if (event.target.files?.length === 0) {
      return
    }
    if (!event.target.files?.[0].type.match('image.*')) {
      return
    }
    const reader = new FileReader()
    reader.onload = e => {
      setImage(e.target?.result)
    }
    reader.readAsDataURL(event.target?.files[0])
  }
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setBackCrop(croppedAreaPixels)
  }, [])

  const submit = async () => {
    const sendData = { file: file, backCrop: backCrop }
    const res = await axios.post('/api/admin/imageUpload', sendData)
  }

  return (
    <>
      <input
        type="file"
        accept="image/jpeg,image/png"
        onChange={onChangeHandler}
      />
      <p>test</p>
      <Grid style={{ position: 'relative', height: '50vh' }}>
        {file && (
          <Cropper
            image={file}
            crop={crop}
            zoom={zoom}
            aspect={5 / 2}
            showGrid={false}
            zoomSpeed={1}
            restrictPosition={true}
            maxZoom={2}
            onCropChange={setCrop}
            zoomWithScroll={1}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            onCropAreaChange={croppedArea => {
              setCroppedArea(croppedArea)
            }}
          />
        )}
      </Grid>
      <Grid>
        {croppedArea && file && (
          <Output croppedArea={croppedArea} file={file} />
        )}
      </Grid>
      <Button variant="contained" onClick={submit}>
        送信
      </Button>
    </>
  )
}
export default test
