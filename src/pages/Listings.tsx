import { Bed, Bath, Square, MapPin } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { listings, formatPrice } from '../data/listings';

export function Listings() {
  const activeListings = listings.filter((l) => l.status === 'active');
  const pendingListings = listings.filter((l) => l.status === 'pending');
  const soldListings = listings.filter((l) => l.status === 'sold');

  return (
    <div className="py-12">
      <section className="container-wide">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Our Listings</h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Explore our current properties in Hollister and the surrounding San Benito County area.
          </p>
        </div>

        {/* Active Listings */}
        {activeListings.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Active Listings
              <span className="text-sm font-normal text-neutral-400">({activeListings.length})</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        )}

        {/* Pending Listings */}
        {pendingListings.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              Pending
              <span className="text-sm font-normal text-neutral-400">({pendingListings.length})</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pendingListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        )}

        {/* Recently Sold */}
        {soldListings.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-neutral-400 rounded-full"></span>
              Recently Sold
              <span className="text-sm font-normal text-neutral-400">({soldListings.length})</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {soldListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

function ListingCard({ listing }: { listing: typeof listings[0] }) {
  const statusVariant = {
    active: 'success',
    pending: 'warning',
    sold: 'default',
  } as const;

  return (
    <Card className="overflow-hidden group hover:shadow-md transition-shadow">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={listing.images[0]}
          alt={listing.address}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge variant={statusVariant[listing.status]}>
            {listing.status.charAt(0).toUpperCase() + listing.status.slice(1)}
          </Badge>
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="bg-neutral-900/80 text-white px-3 py-1.5 rounded-lg text-lg font-bold">
            {formatPrice(listing.price)}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-white mb-1">{listing.address}</h3>
        <div className="flex items-center gap-1 text-sm text-neutral-400 mb-3">
          <MapPin className="w-3.5 h-3.5" />
          <span>{listing.city}, {listing.state} {listing.zip}</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-neutral-300">
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4 text-neutral-500" />
            <span>{listing.bedrooms} bed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-neutral-500" />
            <span>{listing.bathrooms} bath</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Square className="w-4 h-4 text-neutral-500" />
            <span>{listing.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-neutral-700">
          <p className="text-sm text-neutral-400 line-clamp-2">{listing.description}</p>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {listing.features.slice(0, 3).map((feature) => (
            <span key={feature} className="text-xs bg-neutral-700 text-neutral-300 px-2 py-1 rounded">
              {feature}
            </span>
          ))}
          {listing.features.length > 3 && (
            <span className="text-xs text-neutral-400 px-2 py-1">
              +{listing.features.length - 3} more
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}
