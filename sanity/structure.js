// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Blog')
    .items([
    
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && ![ ].includes(item.getId()),
      ),
    ])
