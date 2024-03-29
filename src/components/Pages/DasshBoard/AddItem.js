import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddItem = () => {
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const product = {
      ...data,
      productImg: imageURL,
    };
    console.log(product);
    const res = await axios.post(
      "https://manufacture-website-cycle-ghor-server.vercel.app/add-product",
      product
    );
    if (!res.success) {
      return toast.error(res.data.error, {
        position: toast.POSITION.TOP_CENTER,
      });
    }

    toast.success(res.data.message, {
      position: toast.POSITION.TOP_CENTER,
    });
    reset();
    setImageURL("");
  };

  const handleUploadImage = (event) => {
    setLoading(true);
    const image = event.target.files[0];

    const formData = new FormData();

    formData.set("image", image);

    axios
      .post(
        "https://api.imgbb.com/1/upload?key=f9806104e1084bb2549ae1bb88a4bff8",
        formData
      )
      .then((res) => {
        setImageURL(res.data.data.display_url);
        if (res.data.data.display_url) {
          toast.success("Image Upload success", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        setLoading(false);
      })
      .catch((error) => {});
  };
  return (
    <div className="mt-14">
      <div className="card flex-shrink-0 w-96 shadow-2xl bg-base-100 mx-auto">
        <div className="card-body">
          <h1 className="text-center text-2xl">Add Cycle Parse</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label htmlFor="productName" className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                id="productName"
                className="input input-bordered"
                {...register("name")}
              />
            </div>
            <div className="form-control">
              <label htmlFor="producQuantity" className="label">
                <span className="label-text">Add Min order Quantity</span>
              </label>
              <input
                type="number"
                id="productQuantity"
                className="input input-bordered"
                {...register("orderQuantity")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product price</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                {...register("price")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Add product details</span>
              </label>
              <textarea
                type="textarea"
                className="textarea textarea-bordered h-24"
                {...register("details")}
              />
            </div>
            <div className="form-control">
              {!imageURL ? (
                <label
                  htmlFor="image"
                  className={
                    loading
                      ? "btn btn-primary loading mt-5"
                      : "btn btn-primary mt-5"
                  }>
                  Upload Image
                </label>
              ) : (
                <div className=" w-24 rounded-xl mx-auto pt-5">
                  {" "}
                  <img src={imageURL} alt="" />
                </div>
              )}
              <input
                type="file"
                id="image"
                className="input input-bordered hidden"
                onChange={handleUploadImage}
              />
            </div>
            <div className="form-control mt-6 ">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!imageURL ? true : false}>
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
