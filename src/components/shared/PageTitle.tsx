type Props = {
  title: string
  subtitle?: string
}

export default function PageTitle({ title, subtitle }: Props) {
  return (
    <header className="space-y-1">
      <h1 className="text-3xl sm:text-4xl font-bold text-green-200">{title}</h1>
      {subtitle && <p className="text-green-400 text-sm sm:text-base">{subtitle}</p>}
    </header>
  )
}
