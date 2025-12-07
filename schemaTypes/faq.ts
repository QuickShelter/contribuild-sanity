import { defineType, defineField, defineArrayMember } from 'sanity'

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "text",
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: { type: "faqCategory" },
        }),
      ],
    }),
    defineField({
      title: 'Approved',
      name: 'approved',
      type: 'boolean',
      description: "FAQs won't show on the site without approval",
    }),
  ],
  // preview: {
  //   select: {
  //     question: 'question',
  //     answer: 'answer',
  //     category: 'faqCategory.name',
  //   },
  // },
});