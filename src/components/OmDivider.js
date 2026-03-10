export default function OmDivider() {
  return (
    <div className="flex items-center justify-center gap-4 mx-auto max-w-[280px]">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-saffron-500" />
      <span className="text-saffron-500 font-display text-2xl font-semibold">ॐ</span>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-saffron-500" />
    </div>
  );
}
