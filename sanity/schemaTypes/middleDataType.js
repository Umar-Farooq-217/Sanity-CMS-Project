import {UserIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const middleDataType = defineType({
  name: 'middleDataType',
  title: 'MiddleDataType',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'heading',
      title:'Heading',
      type: 'string',
    }),
 
   defineField({
      name: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      }
      
      
    }), 
  ],
  preview: {
    select: {
     heading:'heading',
     Image:'middleImage',
    },
  },
})
