export default {
  name: "testimonals",
  title: "Testimonials",
  type: "document",
  fields: [
    {
      name: "name",
      titel: "Name",
      type: "string",
    },
    {
      name: "company",
      titel: "Company",
      type: "string",
    },
    {
      name: "imageurl",
      titel: "Imgurl",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "feedback",
      titel: "Feedback",
      type: "string",
    },
  ],
};
