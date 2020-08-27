import React from "react";
import { Page } from "@essence/app";
import { withTailwind } from "@essence/react-tailwind";
import { Pattern, Main } from "@essence/ui";
import { Row, Div } from "@essence/tags"

const Home: React.FC = () => {
    return withTailwind(
        <Page title={"Wesley White"}>
            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet"></link>
            <Pattern opacity={0.08} fill="red800" name="Topography">
                <Main>
                    <Body/>
                </Main>
            </Pattern>
        </Page>
    )
}

const Body: React.FC = () => withTailwind (
    <Row
        display="flex"
        flexWrap="wrap"
        height="auto"
        minHeight="screen"
        alignItems="center"
        overflow="hidden"
        style={{
            justifyContent:"space-evenly",
            fontFamily:"Source Sans Pro, sans-serif"
        }} 
    >
        <Tree/>
        <Div
            marginBottom="20"
            style={{
                fontSize: "18px",
                maxWidth: "600px"
            }}
        >
            <p fontSize="4xl">
                Hey! My name is Wesley White.
            </p>
            <p>
                I am a software engineer currently working at Business Laboratory.
            </p>
            <p>
                I received my B.S. in Software Engineering from The University of Texas.
            </p>
            <p>
                I spend most of my free time rock climbing, training for rock climbing, or planning my next climbing trip.
            </p>
        </Div>
    </Row>
)

const Tree: React.FC = () => withTailwind (
    <Div
        margin="8"
        style={{
            height:"600px",
            width:"300px"
        }}
    >
        <img 
            src="headshot.jpg" 
            padding="2"
            borderRadius="full"
            position="relative"
            style={{
                border:"5px solid #bf1a1a",
                width: "200px",
            }}
        />    
        <img 
            src="branch.svg"
            position="relative"
            style={{
                height:"575px",
                top:"-165px",
                left:"67px",
                transform:"scale(.9)"
            }}
        />
        <Btn 
            name="GitHub" 
            linkTo="https://github.com/wesleywhite"
            style={{
                padding:"1.25rem .54rem",
                top:"-620px",
                left:"224px"
            }}
        />
        <Btn 
            name="Resume" 
            linkTo="/resume.pdf"
            style={{
                padding:"1.29rem .41rem",
                top:"-533px",
                left:"154px"
            }}
            download='WesleyWhite-Resume'
        />
        <Btn 
            name="Contact" 
            linkTo="mailto:wesley.white35@gmail.com"
            style={{
                padding:"1.29rem .4rem",
                top:"-444px",
                left:"84px"
            }}
        />
    </Div>
)

type BtnProps = {
    name: string,
    linkTo: string,
    style: {},
    download?: string
}

const Btn: React.FC<BtnProps> = ({name, linkTo, style, download}) => withTailwind (
    <a
            href={linkTo}
            borderWidth="2"
            borderColor="red700"
            borderRadius="full"
            position="relative"
            textDecoration="none"
            color="red700"
            colorHover="white"
            bgColorHover="red700"
            style={style}
            download={download}
        >
            {name}
        </a>
)

export default Home;
