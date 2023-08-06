import { Paper,Box } from "@mui/material"
import meme from '../../assets/meme1.jpg'
import { Fragment } from "react"
const Index = () =>{
    return(
        <Fragment>
        <Box component={'span'} sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:"center"
        }}>
            <Paper sx={{
                padding:'1rem'
            }}>
                <Box component={'img'} sx={{
                    width:["15rem","initial"]
                }} src={meme} alt="meme1" aria-label="meme"/>
            </Paper>
        </Box >
        <div 
        style={{
            position: "relative",
            overflow: "hidden",
            paddingTop: "56.25%"}}
            >
            <iframe src="https://share.synthesia.io/embeds/videos/ffc78ade-cf8c-4653-ad00-6975c34cdc3a" loading="lazy" title="Synthesia video player - Your AI video" allow="encrypted-media; fullscreen;" style={{position: "absolute",width: "100%", height: "100%", top: 0, left: 0, border: "none", padding: 0, margin: 0, overflow:"hidden"}}></iframe></div>
        </Fragment>
    )
}

export default Index