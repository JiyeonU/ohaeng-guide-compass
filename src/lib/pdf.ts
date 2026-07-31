import type { LangKey } from "@/data/types";

const FILE_LABEL: Record<LangKey, string> = {
  en: "Five-Elements-Wellness-Report",
  ko: "Ohaeng-Wellness-Report",
  zh: "Five-Elements-Wellness-Report",
};

function safeName(name: string) {
  return name.trim().replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "") || "guest";
}

/**
 * Renders the report DOM node to a paginated A4 PDF, fully client-side.
 */
export async function exportReportPdf(node: HTMLElement, name: string, lang: LangKey) {
  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
    import("html2canvas-pro"),
    import("jspdf"),
  ]);

  const canvas = await html2canvas(node, {
    scale: Math.min(2, window.devicePixelRatio || 1.5),
    backgroundColor: "#faf6ee",
    useCORS: true,
  });

  const pdf = new jsPDF({ unit: "pt", format: "a4", orientation: "portrait" });
  const pageW = pdf.internal.pageSize.getWidth();
  const pageH = pdf.internal.pageSize.getHeight();
  const margin = 18;
  const usableW = pageW - margin * 2;
  const scale = usableW / canvas.width;
  const sliceH = Math.floor((pageH - margin * 2) / scale);

  let offset = 0;
  let page = 0;
  while (offset < canvas.height) {
    const height = Math.min(sliceH, canvas.height - offset);
    const slice = document.createElement("canvas");
    slice.width = canvas.width;
    slice.height = height;
    const ctx = slice.getContext("2d");
    if (!ctx) break;
    ctx.fillStyle = "#faf6ee";
    ctx.fillRect(0, 0, slice.width, slice.height);
    ctx.drawImage(canvas, 0, offset, canvas.width, height, 0, 0, canvas.width, height);

    if (page > 0) pdf.addPage();
    pdf.addImage(
      slice.toDataURL("image/jpeg", 0.92),
      "JPEG",
      margin,
      margin,
      usableW,
      height * scale,
    );
    offset += height;
    page += 1;
  }

  pdf.save(`${FILE_LABEL[lang]}_${safeName(name)}.pdf`);
}
