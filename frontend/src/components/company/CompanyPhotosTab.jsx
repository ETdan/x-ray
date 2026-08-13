import { useState } from "react";
import { FiX, FiImage } from "react-icons/fi";

export default function CompanyPhotosTab({ company }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const photos = company.photos || [];

  return (
    <div className="py-8 space-y-8">
      <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 shadow-soft">
        <h2 className="text-2xl font-extrabold text-text mb-1">
          Workplace Gallery ({photos.length})
        </h2>
        <p className="text-sm text-text-muted">
          Authentic workplace photos of {company.name} offices, teams, and townhalls.
        </p>
      </div>

      {photos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group bg-surface border border-border rounded-2xl overflow-hidden shadow-soft cursor-pointer hover:shadow-hover transition-all"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-neutral-900/80 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {photo.category}
                </span>
              </div>
              <div className="p-4">
                <p className="text-xs font-bold text-text group-hover:text-primary transition-colors">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-surface border border-dashed border-border rounded-2xl p-12 text-center text-text-muted">
          <p className="font-semibold">No photos uploaded for {company.name} yet.</p>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-text/80 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl w-full bg-surface rounded-2xl overflow-hidden shadow-modal">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 bg-neutral-900/60 text-white p-2 rounded-full hover:bg-neutral-900"
            >
              <FiX size={20} />
            </button>
            <div className="max-h-[75vh] bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.caption}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="p-4 bg-surface flex justify-between items-center text-xs">
              <span className="font-bold text-text text-sm">{selectedPhoto.caption}</span>
              <span className="font-semibold text-text-muted px-2.5 py-1 rounded-full bg-surface-secondary">
                {selectedPhoto.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
