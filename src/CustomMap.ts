export interface Mappable {
  location: { lat: number; lng: number };
  markerContent(): string;
}

export class CustomMap {
  private map: google.maps.Map;

  constructor(divId: string) {
    this.map = new google.maps.Map(document.getElementById(divId)!, {
      zoom: 2,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker({ location,markerContent }: Mappable): void {
    const marker = new google.maps.Marker({
      position: location,
      map: this.map,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: markerContent(),
    });

    marker.addListener('click', () => {
      infoWindow.open({
        map: this.map,
        anchor: marker,
      });
    });
  }
}
