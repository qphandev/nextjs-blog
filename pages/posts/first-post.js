// import Image from "next/image";
// import Link from "next/link";
// import Head from "next/head";
// import Script from "next/script";
// import Layout from '../../components/layout';

// import { getSortedPostsData } from '../../lib/posts'

// export async function getStaticProps() {
// 	const allPostsData = getSortedPostsData();
// 	return {
// 		props: {
// 			allPostsData,
// 		},
// 	};
// }

// export default function FirstPost(props) { // you must export it as default

//     console.log(`I'm in firstpost`)
//     console.log(props)

//     return (
//         <Layout>
//             <Head><title>First Post</title></Head>
//             <Script
//                 src="https://connect.facebook.net/en_US/sdk.js"
//                 strategy="lazyOnload"
//                 onLoad={() =>
//                     console.log(`script loaded correctly, window.FB has been populated`)
//                 }
//             />
//             <h1>First Post</h1>
//             <ul>
//                 <li>Make a game using the volume button for the Logitech G915 as controls (flappy bird mock?), it could also be the mouse wheel</li>
//                 <li>Make game to teach github commands, pictures, maybe also pointing to your actual repo lol</li>
//             </ul>
//             <h2>
//                 <Link href="/">Back to home</Link>
//             </h2>

//             <Image
//                 src="https://upload.wikimedia.org/wikipedia/commons/1/17/Augustwiki.jpg" // Route of the image file
//                 height={144} // Desired size with correct aspect ratio
//                 width={144} // Desired size with correct aspect ratio
//                 alt="Your Name"
//             />
//         </Layout>
//     )
// }