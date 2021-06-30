export function ReactComponentLayerInspector (item) {
  console.log(item); 
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