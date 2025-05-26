import { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { useSurpriseMePrompt } from "../hooks/surpriseMe";

type FormDataType = {
  name: string;
  prompt: string;
};

const Generate = () => {
  const [form, setForm] = useState<FormDataType>({
    name: "",
    prompt: "",
  });

  const [imageUrl, setImageUrl] = useState<string>("");

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log("form : ", form);

  const handleSupriseMe = () => {
    const surprisePrompt = useSurpriseMePrompt();
    // console.log(prompt);

    setForm((prev) => ({
      ...prev,
      prompt: surprisePrompt,
    }));
  };

  const handleGenerate = async () => {
    try {
      const result = await fetch("http://localhost:3000/images", {
        method: "POST",
        body: JSON.stringify({
          name: form.name,
          prompt: form.prompt,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Generated image url :", result);
    } catch (error) {
      console.log("Error generating image :", error);
    }
  };

  const handleSubmit = () => {};

  return (
    <section className="px-4 md:px-10 md:px-20 py-4 md:py-8 lg:py-10">
      <h2 className="text-5xl font-extrabold">Create</h2>
      <p className="text-xl mt-4 text-gray-600">
        Create imaginative and visually stunning images with DALL-E AI and share
        them with community.
      </p>

      <form className="mt-4" onSubmit={handleSubmit}>
        <CustomInput
          value={form.name}
          name="name"
          className="mb-6"
          placeholder="ex. Aniket More"
          label="Name"
          onChange={handleFormChange}
        ></CustomInput>

        <CustomInput
          value={form.prompt}
          name="prompt"
          className="mb-6"
          placeholder="ex. cat flying in space"
          label="Prompt"
          onChange={handleFormChange}
        ></CustomInput>

        <CustomButton type="button" className="mb-6" onClick={handleSupriseMe}>
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
          type="button"
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
          type="submit"
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
