# Données de départ du site. Relançable sans doublon : chaque ligne est retrouvée par son identifiant.
# Prix, durées et rayon sont provisoires, à valider avec Olivier avant la mise en ligne.

services = [
  { slug: "prelavage", name: "Prélavage", category: :exterior, position: 1,
    description: "Décollage des saletés à la mousse active, avant tout contact avec la carrosserie." },
  { slug: "shampoing-carrosserie", name: "Shampoing carrosserie", category: :exterior, position: 2,
    description: "Lavage à la main au gant microfibre, méthode des deux seaux, puis rinçage." },
  { slug: "jantes-et-pneus", name: "Jantes et pneus", category: :exterior, position: 3,
    description: "Nettoyage des jantes et des passages de roue, brillant pneus." },
  { slug: "vitres-exterieures", name: "Vitres extérieures", category: :exterior, position: 4,
    description: "Pare-brise, vitres et rétroviseurs sans trace." },
  { slug: "sechage-microfibre", name: "Séchage microfibre", category: :exterior, position: 5,
    description: "Séchage complet de la carrosserie, sans rayure ni trace d'eau." },
  { slug: "aspiration", name: "Aspiration complète", category: :interior, position: 6,
    description: "Sièges, tapis, moquettes, coffre et recoins." },
  { slug: "plastiques", name: "Plastiques et tableau de bord", category: :interior, position: 7,
    description: "Dépoussiérage, nettoyage et rénovation des plastiques." },
  { slug: "vitres-interieures", name: "Vitres intérieures", category: :interior, position: 8,
    description: "Face intérieure du pare-brise et des vitres, sans voile." },
  { slug: "seuils-de-portes", name: "Seuils de portes", category: :interior, position: 9,
    description: "Seuils, contre-portes et charnières." },
  { slug: "shampoing-sieges", name: "Shampoing sièges", category: :extra, position: 10,
    description: "Nettoyage en profondeur des sièges en tissu." },
  { slug: "cire-de-protection", name: "Cire de protection", category: :extra, position: 11,
    description: "Protection de la carrosserie et brillance pendant plusieurs semaines." }
]

services.each do |attributes|
  Service.find_or_initialize_by(slug: attributes[:slug]).update!(attributes)
end

packages = [
  { slug: "exterieur", name: "Extérieur", position: 1, price: 29, duration_minutes: 45,
    tagline: "La carrosserie propre et sèche, sans trace.",
    description: "Prélavage, shampoing à la main, jantes, vitres extérieures et séchage microfibre.",
    services: %w[prelavage shampoing-carrosserie jantes-et-pneus vitres-exterieures sechage-microfibre] },
  { slug: "interieur", name: "Intérieur", position: 2, price: 39, duration_minutes: 60,
    tagline: "Un habitacle net, du tableau de bord au coffre.",
    description: "Aspiration complète, plastiques nettoyés et rénovés, vitres intérieures et seuils de portes.",
    services: %w[aspiration plastiques vitres-interieures seuils-de-portes] },
  { slug: "complet", name: "Complet", position: 3, price: 59, duration_minutes: 90, featured: true,
    tagline: "Dedans et dehors, en une seule visite.",
    description: "Tout l'extérieur et tout l'intérieur, en une seule intervention.",
    services: %w[prelavage shampoing-carrosserie jantes-et-pneus vitres-exterieures sechage-microfibre
                 aspiration plastiques vitres-interieures seuils-de-portes] }
]

packages.each do |attributes|
  service_slugs = attributes.delete(:services)
  package = Package.find_or_initialize_by(slug: attributes[:slug])
  package.update!(attributes)
  package.package_services.destroy_all
  service_slugs.each_with_index do |slug, index|
    package.package_services.create!(service: Service.find_by!(slug:), position: index + 1)
  end
end

ServiceArea.find_or_initialize_by(name: "Toulouse et périphérie").update!(
  kind: :mobile,
  latitude: 43.604652,
  longitude: 1.444209,
  radius_km: 25,
  position: 1,
  description: "Toulouse et les communes alentour, dans un rayon de 25 km."
)
