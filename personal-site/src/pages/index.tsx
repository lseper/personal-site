import styled from "styled-components"
import ImageCard from "@/components/ImageCard"
import Image from "next/image"

const Layout = styled.main`
  display: grid;
  grid-template-columns: fit-content(20ch) minmax(min(50vw, 30ch), 1fr);
`

function HomePage() {
  return <Layout>
      <h1>
        Sidebar Content
      </h1>
      <div>
        Main Layout
        <ImageCard>
          <Image src='/images/zav_gb_demo.png' alt='me' width='512' height='512'/>
          <h3>Welcome to Deerville</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorem blanditiis vitae cumque accusamus, repellendus illum esse. Amet necessitatibus illum cum animi consectetur, odit voluptatem, accusantium, eveniet possimus impedit quasi.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo iure quidem at incidunt, maiores dignissimos consequuntur non porro itaque voluptatum repudiandae accusamus repellat cupiditate recusandae consequatur eius suscipit eveniet deserunt.</p>
        </ImageCard>
      </div>
    </Layout>

}


export default HomePage