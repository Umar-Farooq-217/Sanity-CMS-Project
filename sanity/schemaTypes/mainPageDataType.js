import {UserIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const mainPageDataType = defineType({
  name: 'mainPageDataType',
  title: 'MainPageDataType',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'heading',
      title:'Heading',
      type: 'string',
    }),
    defineField({
      name: 'pera',
      title:'Pera',
      type: 'string',
    }),
    defineField({
      name: 'btn',
      title:'Btn',
      type: 'string',
    }), defineField({
      name: 'firstImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ]
    }), defineField({
      name: 'secondImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ]
    }),
   
  ],
  preview: {
    select: {
     heading:'heading',
     pera:'pera',
     btn:'btn',
     firstImage:'firstImage',
     secondImage:'secondImage',
    },
  },
})
