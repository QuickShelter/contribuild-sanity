import { defineField, defineType } from 'sanity'

export const personnel = defineType({
  name: 'personnel',
  title: 'Personnel',
  type: 'document',
  fields: [
    defineField({
      name: 'orderNumber',
      title: 'Order Number',
      type: 'number',
      description: 'Number used to order the personnel',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => `${doc.firstName} ${doc.lastName}`.toLowerCase().replace(/\s+/g, '-'),
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "reference",
      to: [{
        type: 'role'
      }]
    }),
    defineField({
      title: 'Approved',
      name: 'approved',
      type: 'boolean',
      description: "Personnel won't show on the site without approval",
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    }),
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      media: 'image',
      role: 'role.name',
    },
    prepare(selection) {
      const { firstName, lastName, media, role } = selection

      return {
        title: `${firstName} ${lastName}`,
        subtitle: role,
        media,
      }
    }
  },
})
