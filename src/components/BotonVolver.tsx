import { IonButton } from '@ionic/react';

interface BotonVolverProps {
  texto: string;
  color?: string;
}

const BotonVolver: React.FC<BotonVolverProps> = ({ texto, color }) => {
  return (
    <IonButton color={color} shape="round">
      {texto}
    </IonButton>
  );
};

export { BotonVolver };
