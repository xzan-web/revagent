import { Tag } from '@/shared/components/dashboard/components/ui'
import type { Characteristic } from '@/shared/components/dashboard/types'
import { IconLink, IconPlus, IconTrash } from '@/shared/components/dashboard/components/icons'

type FolderId = 'all' | Characteristic['folder']

export function CharacteristicsTab({
  items,
  folder,
  onFolder,
  onToggle,
  onDelete,
  onAdd,
  compact = false,
}: {
  items: Characteristic[]
  folder: FolderId
  onFolder: (id: FolderId) => void
  onToggle: (id: string) => void
  onDelete: (id: string) => void
  onAdd: () => void
  compact?: boolean
}) {
  const counts = {
    all: items.length,
    default: items.filter((i) => i.folder === 'default').length,
    mine: items.filter((i) => i.folder === 'mine').length,
    pipeline: items.filter((i) => i.folder === 'pipeline').length,
  }
  const filtered = folder === 'all' ? items : items.filter((i) => i.folder === folder)
  const visible = compact ? filtered.slice(0, 5) : filtered

  return (
    <div className={`grid grid-cols-1 gap-6 ${compact ? 'pt-5 md:grid-cols-[168px_minmax(0,1fr)]' : 'pt-3 lg:grid-cols-[220px_1fr]'}`}>
      <aside className={compact ? 'hidden md:block' : undefined}>
        <h2 className="mb-3 text-base font-semibold text-gray-900">Характеристика</h2>
        <ul className="space-y-1">
          <FolderRow label="Все" count={counts.all} active={folder === 'all'} onClick={() => onFolder('all')} />
          <FolderRow label="Default" count={counts.default} active={folder === 'default'} onClick={() => onFolder('default')} />
          <FolderRow label="Мои метрики" count={counts.mine} active={folder === 'mine'} onClick={() => onFolder('mine')} />
          <FolderRow
            label="Агентский пайплайн"
            count={counts.pipeline}
            active={folder === 'pipeline'}
            onClick={() => onFolder('pipeline')}
          />
        </ul>
      </aside>

      <div className="min-w-0">
        <div className="mb-3 flex items-center justify-between gap-2">
          <h2 className="text-base font-semibold text-gray-900 md:hidden">Характеристика</h2>
          <button
            type="button"
            onClick={onAdd}
            className={`ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-brand-600 text-sm font-medium text-white hover:bg-brand-700 ${
              compact ? 'px-2.5 py-1.5' : 'px-3 py-2'
            }`}
          >
            <IconPlus className="h-3.5 w-3.5" />
            Добавить
          </button>
        </div>

        <ul className="space-y-3 md:hidden">
          {visible.map((item) => (
            <li key={item.id} className="border-b border-gray-50 pb-3 last:border-0 last:pb-0">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-medium text-gray-900">{item.name}</p>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {item.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
                <Toggle enabled={item.enabled} onToggle={() => onToggle(item.id)} static={compact} />
              </div>
              <p className="mt-1 text-sm text-gray-400">{item.description}</p>
              <p className="mt-2 text-xs text-gray-500">
                Норма {item.norm}
                <span className="mx-1.5 text-gray-300">·</span>
                Вес {item.weight ?? '—'}
              </p>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-[11px] font-normal text-gray-400">
                <th className="py-1.5 pr-4 font-normal">Метрика</th>
                <th className="py-1.5 pr-4 font-normal">Норма</th>
                <th className="py-1.5 pr-4 font-normal">Вес</th>
                <th className="py-1.5 font-normal">Учитывать</th>
              </tr>
            </thead>
            <tbody>
              {visible.map((item) => (
                <tr key={item.id} className="border-b border-gray-50 align-top last:border-0">
                  <td className={`${compact ? 'py-2.5' : 'py-4'} pr-4`}>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span className="font-medium text-gray-900">{item.name}</span>
                      {item.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                    <p className="mt-1 max-w-xl text-sm text-gray-400">{item.description}</p>
                  </td>
                  <td className={`${compact ? 'py-2.5' : 'py-4'} pr-4 whitespace-nowrap text-gray-700`}>{item.norm}</td>
                  <td className={`${compact ? 'py-2.5' : 'py-4'} pr-4 text-gray-700`}>{item.weight ?? '—'}</td>
                  <td className={compact ? 'py-2.5' : 'py-4'}>
                    <div className="flex items-center gap-3">
                      <Toggle enabled={item.enabled} onToggle={() => onToggle(item.id)} static={compact} />
                      <IconLink className="h-4 w-4 text-gray-300" />
                      {!item.builtin ? (
                        <button
                          type="button"
                          onClick={() => onDelete(item.id)}
                          className="text-gray-300 hover:text-red-500"
                          aria-label="Удалить метрику"
                        >
                          <IconTrash className="h-4 w-4" />
                        </button>
                      ) : null}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function Toggle({
  enabled,
  onToggle,
  static: isStatic = false,
}: {
  enabled: boolean
  onToggle: () => void
  static?: boolean
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      tabIndex={isStatic ? -1 : 0}
      onClick={isStatic ? undefined : onToggle}
      className={`relative h-6 w-10 shrink-0 rounded-full ${
        enabled ? 'bg-brand-600' : 'bg-gray-200'
      } ${isStatic ? 'pointer-events-none cursor-default' : 'transition-colors'}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
          enabled ? 'translate-x-4' : ''
        }`}
      />
    </button>
  )
}

function FolderRow({
  label,
  count,
  active,
  onClick,
}: {
  label: string
  count: number
  active: boolean
  onClick: () => void
}) {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm ${
          active ? 'bg-brand-50 font-medium text-brand-800' : 'text-gray-600 hover:bg-gray-50'
        }`}
      >
        <span className="min-w-0 flex-1 text-left">{label}</span>
        <span className="shrink-0 text-right tabular-nums text-gray-400">{count}</span>
      </button>
    </li>
  )
}
