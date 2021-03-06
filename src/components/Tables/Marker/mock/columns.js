export const columns = [
  {
    name: "asset",
    required: true,
    label: "Item",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "markerName",
    align: "left",
    label: "Name",
    field: "markerName",
    sortable: true,
  },
  {
    name: "text",
    label: "Description",
    align: "left",
    field: "text",
    sortable: false,
  },
  { name: "title", label: "Title", align: "left", field: "title" },
  { name: "path", label: "Path", align: "left", field: "path" },
];
