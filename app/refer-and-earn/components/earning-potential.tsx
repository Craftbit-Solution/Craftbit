'use client';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/shared/section-wrapper';

const data = [
  { label: '1 Refer', value: '₹500' },
  { label: '5 Refers', value: '₹2,500' },
  { label: '10 Refers', value: '₹5,000' },
];

export function EarningPotential() {
  return (
    <SectionWrapper className="py-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#0D3082]">
          Your earning potential
        </h2>
        <p className="text-[#0D3082]/60 mt-2">
          The more you refer, the more you earn.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        {data.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="group rounded-2xl border border-[#0D3082]/08 bg-[#fafbff] p-6 text-left transition-all duration-300 hover:shadow-lg hover:shadow-[#0D3082]/10"
          >
            {/* Top Row */}
            <div className="flex items-center gap-4">
              {/* Coin Emoji */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3E92CC]/10 text-2xl transition-transform duration-300 group-hover:scale-110">
                💰
              </div>

              <div>
                <p className="text-sm text-[#0D3082]/60">
                  {item.label}
                </p>
                <h3 className="text-xl font-bold text-[#0D3082]">
                  {item.value}
                </h3>
              </div>
            </div>

            {/* Bottom subtle line */}
            <div className="h-px w-full bg-[#0D3082]/06" />

            {/* Extra hint */}
            <p className="mt-2 text-xs text-[#0D3082]/50">
              Instant reward on successful referral
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}