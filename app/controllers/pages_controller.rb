class PagesController < ApplicationController
  def home
    render inertia: "home", props: {
      packages: Package.for_site,
      areas: ServiceArea.for_site
    }
  end

  def services
    render inertia: "services", props: {
      packages: Package.for_site,
      services: Service.for_site
    }
  end

  def how_it_works
    render inertia: "how_it_works"
  end

  def area
    render inertia: "area", props: { areas: ServiceArea.for_site }
  end

  def about
    render inertia: "about"
  end

  def legal
    render inertia: "legal"
  end

  def privacy
    render inertia: "privacy"
  end
end
