import "flag-icons/css/flag-icons.min.css";

const CODE: Record<string, string> = { "Việt Nam": "vn", "Hoa Kỳ": "us", "Vương quốc Anh": "gb", "Nhật Bản": "jp" };

export function Flag({ country }: { country: string }) {
  return <span className={`fi fis fi-${CODE[country]} sk-flag`} role="img" aria-label={country} title={country} />;
}
