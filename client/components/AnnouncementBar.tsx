export default function AnnouncementBar() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 bg-[#181818] text-[#F7F5F1] h-8 flex items-center justify-center"
      role="banner"
      aria-label="Store announcement"
    >
      <p className="text-[10px] tracking-[0.25em] font-medium uppercase text-center px-4">
        NEW COLLECTION —{" "}
        <span className="text-[#9A7653]">EXPLORE THE LATEST MEN&apos;S STYLES</span>
      </p>
    </div>
  );
}
