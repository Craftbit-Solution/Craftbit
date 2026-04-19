'use client';
export default function Notice() {
  return (
    <>
      <div className="relative top-20 w-full overflow-hidden bg-black text-white">
        <div className="animate-[marquee_20s_linear_infinite] py-2 text-sm font-medium whitespace-nowrap">
          <span className="mx-6">🚧 This site is under progress</span>
          <span className="mx-6">🚧 This site is under progress</span>
          <span className="mx-6">🚧 This site is under progress</span>
          <span className="mx-6">🚧 This site is under progress</span>
          <span className="mx-6">🚧 This site is under progress</span>
          <span className="mx-6">🚧 This site is under progress</span>
          <span className="mx-6">🚧 This site is under progress</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </>
  );
}
