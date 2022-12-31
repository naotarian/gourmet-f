import { useState, useCallback, useRef } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import axios from '@/lib/axios'
import Cropper from 'react-easy-crop'
import { Backdrop } from '@mui/material'
const CROP_AREA_ASPECT = 1 / 1
const TabTop = () => {
  const [file, setImage] = useState([null, null, null, null, null])
  const [crop, setCrop] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ])
  const [backCrop, setBackCrop] = useState([null, null, null, null, null])
  const [zoom, setZoom] = useState([1, 1, 1, 1, 1])
  const [croppedArea, setCroppedArea] = useState(null)
  const ref = useRef(null)
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
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels, num) => {
    setBackCrop(prevState =>
      prevState.map((obj, index) => (index === num ? croppedAreaPixels : obj)),
    )
    // setBackCrop(croppedAreaPixels)
  }, [])

  const changeCrop = (cropVal, num) => {
    setCrop(prevState =>
      prevState.map((obj, index) => (index === num ? cropVal : obj)),
    )
  }

  const changeZoom = (val, num) => {
    setZoom(prevState =>
      prevState.map((obj, index) => (index === num ? val : obj)),
    )
  }

  const submit = async () => {
    const sendData = { file: file, backCrop: backCrop }
    const res = await axios.post('/api/admin/imageUpload', sendData)
    setImage([null, null, null, null, null])
    ref.current.value = ''
    console.log(ref.current.value)
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="h6">フォトギャラリー設定</Typography>
        </Grid>
        {/* <Grid item xs={8}>
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
                crop={crop[0]}
                zoom={zoom1}
                aspect={5 / 2}
                showGrid={false}
                zoomSpeed={1}
                restrictPosition={true}
                maxZoom={2}
                onCropChange={(a, b) => {
                  console.log(a)
                }}
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
        </Grid> */}
        {file.map((f, index) => {
          return (
            <Grid item xs={8}>
              <input
                type="file"
                accept="image/jpeg,image/png"
                onChange={e => onChangeHandler(e, index)}
                ref={ref}
              />
              <Grid
                style={{
                  position: 'relative',
                  height: '25vh',
                  marginTop: '2rem',
                }}>
                {f && (
                  <Cropper
                    image={f}
                    crop={crop[index]}
                    zoom={zoom[index]}
                    aspect={5 / 2}
                    showGrid={false}
                    zoomSpeed={1}
                    restrictPosition={true}
                    maxZoom={2}
                    onCropChange={(cropVal, b) => {
                      changeCrop(cropVal, index)
                    }}
                    zoomWithScroll={1}
                    onCropComplete={(cropped, croppedAreaPixels) => {
                      onCropComplete(cropped, croppedAreaPixels, index)
                    }}
                    onZoomChange={val => {
                      changeZoom(val, index)
                    }}
                    onCropAreaChange={croppedArea => {
                      setCroppedArea(croppedArea)
                    }}
                  />
                )}
              </Grid>
            </Grid>
          )
        })}
      </Grid>

      <Button variant="contained" onClick={submit}>
        送信
      </Button>
    </>
  )
}
export default TabTop
