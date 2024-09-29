import { defineType,defineField } from "sanity";


export const lastDataType = defineType({
    name:'lastDataType',
    type:'document',
    title:'LastDataType',

    fields:[
        defineField({
            name:'heading',
            title:'Heading',
            type:'string'

        }),
        defineField({
            name:'pera',
            title:'Pera',
            type:'string'

        }),
        defineField({
            name:'rightFirstImage',title:'RightFirstImage',
            type:'image'
        }),
        defineField({
            name:'rightSecondImage',title:'RightSecondImage',
            type:'image'
        })
    ]

    
})