function numberParser(params) {
    return Number(params.newValue);
  }
  
  export const columnDefinition = [
    { field: "id", headerName: "id", hide: true },
    {
      headerName: "Comment",
      field: "comment",
      editable: true,
      cellEditor: "textAreaComponent"
    },
    {
      headerName: "Start Date",
      field: "sdate",
      editable: true,
      cellEditor: "datePickerComponent"
    },
    {
      headerName: "End Date",
      field: "edate",
      editable: true,
      hide:true,
      cellEditor: "datePickerComponent"
    },
    {
      headerName :"Plan Name",
      field : "name",
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
  