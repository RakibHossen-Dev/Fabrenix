// import axios from "axios";

// const page = async ({ params }) => {
//   const p = await params;
//   const res = await axios(`http://localhost:3000/api/blog/${p.id}`);
//   const blogDetails = res.data;
//   console.log(blogDetails);
//   return (
//     <div className="w-11/12 mx-auto lg:w-[900px] space-y-3  mt-32 mb-10">
//       <h3 className="text-center font-light text-4xl">{blogDetails.title}</h3>
//       <p className="text-sm text-center">by Admin on 22 Mar 2025</p>
//       <img
//         src={blogDetails.image}
//         className="w-full md:h-[400px] rounded-lg"
//         alt=""
//       />
//       <p className="text-sm">{blogDetails.description}</p>
//       <div>
//         {blogDetails?.tag?.map((t, idx) => (
//           <button key={idx} className="border text-sm py-1 px-3 m-2">
//             {t}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default page;

import React from "react";

const page = () => {
  return <div>This is bolg Details page</div>;
};

export default page;
