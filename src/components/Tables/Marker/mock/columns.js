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
    align: "center",
    label: "Name",
    field: "markerName",
    sortable: true,
  },
  { name: "text", label: "Description", field: "text", sortable: false },
  { name: "title", label: "Title", field: "title" },
  { name: "path", label: "Path", field: "path" },
];
