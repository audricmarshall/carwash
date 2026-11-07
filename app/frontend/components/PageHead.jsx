import { Head, usePage } from "@inertiajs/react"

export default function PageHead({ title, description }) {
  const { brand } = usePage().props
  const fullTitle = title ? `${title} · ${brand.name}` : `${brand.name} : ${brand.baseline}`

  return (
    <Head>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
    </Head>
  )
}
