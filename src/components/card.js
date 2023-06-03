
import Image from 'next/image';
export default function Card({ title, description, image }) {
        
        return (<div style={{
                backgroundColor: "gray", marginLeft: "4px", marginRight: "4px",
                padding: "12px", width: "20vw", 
        }}>
                <div style= {{width: "100%", display: "flex", justifyContent: "center"}}>
                        <Image
                                src={image}
                                alt="vercel logo"
                                width={130}
                                height={100}
                        />
                </div>
                <h1 style={{ "margin-top": "12px", "margin-bottom": "12px" }}>{title}</h1>
                <p>{description}</p>

        </div>)
}
