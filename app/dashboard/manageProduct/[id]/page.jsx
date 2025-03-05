import ProductUpdateForm from "../components/ProductUpdateForm";
import axios from "axios";

const page = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/manageProduct/${params?.id}`
  );
  return (
    <div>
      <ProductUpdateForm data={res.data}></ProductUpdateForm>
    </div>
  );
};

export default page;
