import React from 'react';
import { Lock, Database, Zap, Layers, RefreshCw } from 'lucide-react';

const labs = [
  {
    id: '01-concurrency',
    title: 'Lab 01: 동시성 제어 & 락',
    subtitle: 'Lost Update 재현 & 3대 락 벤치마크',
    icon: Lock,
    status: 'ACTIVE',
    badgeColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400',
  },
  {
    id: '02-index-tuning',
    title: 'Lab 02: 인덱스 & 쿼리 튜닝',
    subtitle: '100만 건 풀스캔 vs 복합/커버링 인덱스',
    icon: Database,
    status: 'COMING SOON',
    badgeColor: 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400',
  },
  {
    id: '03-caching',
    title: 'Lab 03: Redis 캐싱 전략',
    subtitle: 'Cache Aside vs Cache Stampede 방어',
    icon: Zap,
    status: 'COMING SOON',
    badgeColor: 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400',
  },
  {
    id: '04-n-plus-one',
    title: 'Lab 04: JPA N+1 & 페치 조인',
    subtitle: '지연 로딩 쿼리 폭탄 vs Fetch Join 최적화',
    icon: Layers,
    status: 'COMING SOON',
    badgeColor: 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400',
  },
  {
    id: '05-async-messaging',
    title: 'Lab 05: 비동기 & 메시지 큐',
    subtitle: '동기 HTTP 지연 vs @Async / Event 분리',
    icon: RefreshCw,
    status: 'COMING SOON',
    badgeColor: 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400',
  },
];

export default function Sidebar({ currentLab, setCurrentLab }) {
  return (
    <aside className="w-full md:w-72 shrink-0 border-r border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 p-4 space-y-4">
      <div>
        <h2 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-3 mb-2">
          Troubleshooting Labs
        </h2>
        <div className="space-y-1">
          {labs.map((lab) => {
            const Icon = lab.icon;
            const isActive = currentLab === lab.id;
            return (
              <button
                key={lab.id}
                onClick={() => lab.status === 'ACTIVE' && setCurrentLab(lab.id)}
                disabled={lab.status !== 'ACTIVE'}
                className={`w-full text-left px-3 py-3 rounded-xl transition flex items-start space-x-3 ${
                  isActive
                    ? 'bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700'
                    : lab.status === 'ACTIVE'
                    ? 'hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    : 'opacity-50 cursor-not-allowed'
                }`}
              >
                <div
                  className={`p-2 rounded-lg mt-0.5 ${
                    isActive
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p
                      className={`text-sm font-semibold truncate ${
                        isActive
                          ? 'text-indigo-600 dark:text-indigo-400'
                          : 'text-slate-800 dark:text-slate-200'
                      }`}
                    >
                      {lab.title}
                    </p>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                    {lab.subtitle}
                  </p>
                  <span
                    className={`inline-block mt-1 text-[10px] font-semibold px-1.5 py-0.2 rounded ${lab.badgeColor}`}
                  >
                    {lab.status}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-200 dark:border-slate-800 px-3">
        <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-100 dark:border-indigo-900/40 text-xs">
          <p className="font-semibold text-indigo-900 dark:text-indigo-300">💡 포트폴리오 가이드</p>
          <p className="text-indigo-700/80 dark:text-indigo-400 mt-1 leading-relaxed">
            각 Lab을 순서대로 클리어하며 백엔드 핵심 병목을 직접 측정하고 시각화할 수 있습니다.
          </p>
        </div>
      </div>
    </aside>
  );
}
