export function downloadFile(el, content) {
  const contentType = "text/plain";
  const file = new Blob([content], { type: contentType });
  el.href = URL.createObjectURL(file);
  el.download = "appKey.cert";
  el.click();
}