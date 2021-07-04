export function ReactComponentLayerInspector (item: any) {
  return [
    {
      key: `value`, 
      editor: 'TextEditor', 
      editorOptions: {
        label: 'Value',
      }, 
      refresh: true, 
      defaultValue: item?.value 
    },   
  ]
}