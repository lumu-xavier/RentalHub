export const mockProperties = [
  {
    id: 1,
    name: "Modern Kampala Penthouse",
    location: "Kampala, Uganda",
    price: 150000,
    currency: "UGX",
    rating: 4.8,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop",
    type: "Apartment",
    beds: 2,
    baths: 2,
    amenities: ["WiFi", "Kitchen", "AC", "Parking", "Gym", "Security"],
    description: "Luxurious penthouse with stunning city views",
    host: "John Doe",
    hostId: 1,
    available: true,
    earnings: 2400000
  },
  {
    id: 2,
    name: "Beachfront Villa",
    location: "Masaka, Uganda",
    price: 200000,
    currency: "UGX",
    rating: 4.9,
    reviews: 62,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
    type: "Villa",
    beds: 4,
    baths: 3,
    amenities: ["WiFi", "Pool", "Garden", "Beach Access", "Kitchen"],
    description: "Stunning beachfront villa with private pool",
    host: "Sarah Smith",
    hostId: 2,
    available: true,
    earnings: 4800000
  },
  {
    id: 3,
    name: "Business Suite Kampala",
    location: "Kampala City Center",
    price: 120000,
    currency: "UGX",
    rating: 4.7,
    reviews: 38,
    image: "https://images.unsplash.com/photo-1495707902905-78189c7cf290?w=600&h=400&fit=crop",
    type: "Apartment",
    beds: 2,
    baths: 1,
    amenities: ["WiFi", "Workspace", "AC", "Security", "Parking"],
    description: "Perfect for business travelers",
    host: "Mike Johnson",
    hostId: 3,
    available: true,
    earnings: 1800000
  },
  {
    id: 4,
    name: "Cozy Studio Entebbe",
    location: "Entebbe, Uganda",
    price: 80000,
    currency: "UGX",
    rating: 4.6,
    reviews: 29,
    image: "https://images.unsplash.com/photo-1502635221390-81f1b83b20ad?w=600&h=400&fit=crop",
    type: "Studio",
    beds: 1,
    baths: 1,
    amenities: ["WiFi", "Kitchen", "AC", "Laundry"],
    description: "Intimate studio near the lake",
    host: "Emma Wilson",
    hostId: 4,
    available: true,
    earnings: 960000
  },
  {
    id: 5,
    name: "Luxury Family Home",
    location: "Kololo, Kampala",
    price: 250000,
    currency: "UGX",
    rating: 5.0,
    reviews: 71,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
    type: "House",
    beds: 5,
    baths: 4,
    amenities: ["WiFi", "Pool", "Garden", "Cinema", "Gym", "Security"],
    description: "Premium family home with all luxury amenities",
    host: "David Brown",
    hostId: 5,
    available: true,
    earnings: 6000000
  }
]

export const mockBookings = [
  {
    id: 1,
    propertyId: 1,
    propertyName: "Modern Kampala Penthouse",
    guestName: "Lumu Xavier",
    checkIn: "2025-06-01",
    checkOut: "2025-06-05",
    nights: 4,
    totalPrice: 600000,
    status: "confirmed"
  },
  {
    id: 2,
    propertyId: 2,
    propertyName: "Beachfront Villa",
    guestName: "Alice Johnson",
    checkIn: "2025-06-10",
    checkOut: "2025-06-15",
    nights: 5,
    totalPrice: 1000000,
    status: "confirmed"
  }
]

export const mockReviews = [
  {
    id: 1,
    propertyId: 1,
    guestName: "Lumu Xavier",
    rating: 5,
    comment: "Amazing property! Very clean and well-maintained. Highly recommend!",
    date: "2025-05-15"
  },
  {
    id: 2,
    propertyId: 2,
    guestName: "Alice Johnson",
    rating: 5,
    comment: "Absolutely stunning! The beach access is incredible.",
    date: "2025-05-20"
  }
]

export const categories = [
  { id: 1, name: "Apartments", emoji: "🏢" },
  { id: 2, name: "Villas", emoji: "🏛️" },
  { id: 3, name: "Houses", emoji: "🏠" },
  { id: 4, name: "Studios", emoji: "📦" },
  { id: 5, name: "Luxury", emoji: "⭐" }
]
