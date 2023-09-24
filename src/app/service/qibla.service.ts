import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QiblaService {
  constructor() {}

  async getQiblaDirection(): Promise<number> {
    try {
      // Obtenir la position de l'appareil en utilisant l'API Web de géolocalisation
      const position = await this.getCurrentPosition();

      // Coordonnées de la Kaaba à La Mecque
      const kaabaLatitude = 21.42276;
      const kaabaLongitude = 39.8256687;

      // Calculer la direction de la Qibla
      const qiblaDirection = this.calculateQiblaDirection(
        position.coords.latitude,
        position.coords.longitude,
        kaabaLatitude,
        kaabaLongitude
      );

      return qiblaDirection;
    } catch (error) {
      console.error('Erreur lors de la récupération de la direction de la Qibla :', error);
      throw error;
    }
  }

  private getCurrentPosition(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => resolve(position),
          (error) => reject(error)
        );
      } else {
        reject(new Error('La géolocalisation n\'est pas prise en charge par cet appareil.'));
      }
    });
  }

   calculateQiblaDirection(
    userLatitude: number,
    userLongitude: number,
    kaabaLatitude: number,
    kaabaLongitude: number
  ): number {
    // Convertissez les degrés en radians
    const userLatRad = this.degreesToRadians(userLatitude);
    const userLngRad = this.degreesToRadians(userLongitude);
    const kaabaLatRad = this.degreesToRadians(kaabaLatitude);
    const kaabaLngRad = this.degreesToRadians(kaabaLongitude);

    // Utilisez la formule trigonométrique sphérique de base pour calculer la direction de la Qibla
    const y = Math.sin(kaabaLngRad - userLngRad);
    const x =
      Math.cos(userLatRad) * Math.tan(kaabaLatRad) -
      Math.sin(userLatRad) * Math.cos(kaabaLngRad - userLngRad);
    const qiblaDirectionRad = Math.atan2(y, x);

    // Convertissez la direction en degrés
    const qiblaDirectionDegrees = this.radiansToDegrees(qiblaDirectionRad);

    // Ajustez la direction pour qu'elle soit entre 0 et 360 degrés
    return (qiblaDirectionDegrees + 360) % 360;
  }

  private degreesToRadians(degrees: number): number {
    return (degrees * Math.PI) / 180;
  }

  private radiansToDegrees(radians: number): number {
    return (radians * 180) / Math.PI;
  }

}
