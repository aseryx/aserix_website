/** Static Pick → Lock → Open product surface for hero / how-it-works craft. */

const STEPS = [
  {
    id: 'pick',
    label: '01 · Pick',
    title: 'What they asked for',
    rows: [
      { name: 'events', cols: '12 cols', on: true },
      { name: 'users', cols: '4 cols', on: true },
      { name: 'billing', cols: '8 cols', on: false },
    ],
  },
  {
    id: 'lock',
    label: '02 · Lock',
    title: 'Locked copy',
    meta: [
      { k: 'State', v: 'Frozen' },
      { k: 'Hash', v: 'a3f9…c2' },
      { k: 'Where', v: 'Said before commit' },
    ],
  },
  {
    id: 'open',
    label: '03 · Open',
    title: 'Paid access',
    meta: [
      { k: 'Price', v: 'You set' },
      { k: 'Term', v: '6 months' },
      { k: 'Ends', v: 'Access expires' },
    ],
  },
];

export default function LicenseProductSurface({ className = '' }) {
  return (
    <div
      className={`w-full max-w-4xl mx-auto rounded-lg border border-[#E8E4DE] dark:border-[#1F2937] bg-[#F9F8F6]/95 dark:bg-[#0f0f0f]/95 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="flex items-center justify-between gap-2 px-4 py-3 border-b border-[#E8E4DE] dark:border-[#1F2937] bg-[#EDEBE8]/80 dark:bg-[#111111]/80">
        <span className="font-mono text-[10px] tracking-widest uppercase text-[#6B7280] dark:text-gray-500">
          Pick · Lock · Open
        </span>
        <span className="font-mono text-[10px] tracking-widest uppercase text-brand-orange">License</span>
      </div>

      <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E8E4DE] dark:divide-[#1F2937]">
        {STEPS.map((step) => (
          <div key={step.id} className="p-4 md:p-5 text-left">
            <p className="font-mono text-[10px] tracking-widest uppercase text-brand-orange mb-2">{step.label}</p>
            <p className="font-display text-sm md:text-base text-[#1A1A1A] dark:text-white mb-4">{step.title}</p>

            {step.rows && (
              <ul className="space-y-2">
                {step.rows.map((row) => (
                  <li
                    key={row.name}
                    className={`flex items-center justify-between gap-2 px-2.5 py-2 rounded border text-xs ${
                      row.on
                        ? 'border-brand-orange/30 bg-brand-orange/5 text-[#1A1A1A] dark:text-white'
                        : 'border-[#E8E4DE] dark:border-[#1F2937] text-[#6B7280] dark:text-gray-500 opacity-60'
                    }`}
                  >
                    <span className="font-mono">{row.name}</span>
                    <span className="font-mono text-[10px]">{row.on ? row.cols : 'off'}</span>
                  </li>
                ))}
              </ul>
            )}

            {step.meta && (
              <dl className="space-y-2">
                {step.meta.map((item) => (
                  <div key={item.k} className="flex items-baseline justify-between gap-2 text-xs">
                    <dt className="font-mono text-[10px] uppercase tracking-wider text-[#6B7280] dark:text-gray-500">
                      {item.k}
                    </dt>
                    <dd className="text-[#1A1A1A] dark:text-white font-medium">{item.v}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
