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
      title:'Bttn',
      type: 'string',
    }),
   
  ],
  preview: {
    select: {
     heading:'heading',
     pera:'pera',
     btn:'btn'
    },
  },
})
