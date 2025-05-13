import { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

const Generate = () => {
  const [form, setForm] = useState({
    name: "",
    prompt: "",
  });

  const [imageUrl, setImageUrl] = useState<string>("");

  const handleSubmit = () => {};

  const handleGenerate = () => {};

  const handleSupriseMe = () => {};

  const handleChange = () => {};

  return (
    <section className="px-4 md:px-10 md:px-20 py-4 md:py-8 lg:py-10">
      <h2 className="text-5xl font-extrabold">Create</h2>
      <p className="text-xl mt-4 text-gray-600">
        Create imaginative and visually stunning images with DALL-E AI and share
        them with community.
      </p>

      <form className="mt-4" onSubmit={handleSubmit}>
        <CustomInput
          className="mb-6"
          placeholder="ex. Aniket More"
          label="Name"
          onChange={handleChange}
        ></CustomInput>

        <CustomInput
          className="mb-6"
          placeholder="ex. cat flying in space"
          label="Prompt"
          onChange={handleChange}
        ></CustomInput>

        <CustomButton className="mb-6" onClick={handleSupriseMe}>
          Suprise Me
        </CustomButton>

        <div className="mb-6">
          <img
            src={
              imageUrl !== ""
                ? imageUrl
                : "./src/assets/images/img-placeholder.png"
            }
            className="h-60 w-60 object-cover border-1 rounded-xl bg-white"
            alt=""
          />
        </div>

        <CustomButton
          className="mb-6 w-full md:w-3/8 lg:w-2/8"
          onClick={handleGenerate}
        >
          Generate Image
        </CustomButton>

        <p className="mb-6 text-lg text-gray-600">
          Once you have created the image that you want, you can share it with
          the commuity.
        </p>

        <CustomButton
          className="mb-6 w-full md:w-3/8 lg:w-2/8"
          onClick={handleGenerate}
        >
          Share with Community
        </CustomButton>
      </form>
    </section>
  );
};

export default Generate;
