function numberParser(params) {
    return Number(params.newValue);
  }
  
  export const columnDefinition = [
    {
      headerName: "Comment",
      field: "comment",
      editable: true,
      cellEditor: "textAreaComponent"
    },
    {
      headerName: "Date",
      field: "date",
      editable: true,
      cellEditor: "datePickerComponent"
    },
    {
      headerName :"Message",
      field : "message",
      editable:true,
      cellStyle: { 'text-decoration': 'underline' },
      cellEditor:"inputTextComponent"

    },
    {
      headerName: "$$",
      field: "$$Value",
      editable: true,
      valueParser: numberParser
    },
    {
      headerName: "CPM",
      field: "cmpValue",
      editable: true,
      valueParser: numberParser
    },
    {
      headerName: "IMPS",
      field: "IMPSValue",
      editable: true,
      valueParser: numberParser
    }
  ];
  